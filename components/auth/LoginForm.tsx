"use client"
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { userLogin } from '@/hook/auth/userLogin'
import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '@/schemas/auth.schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import PasswordInput from './PasswordInput'


const LoginForm = () => {
     const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = userLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };
  return (
    <Card className="rounded-3xl border p-8 shadow-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Login to continue your rental journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FieldGroup>

          <Field data-invalid={!!errors.email}>
            <FieldLabel>Email</FieldLabel>

            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            <FieldError errors={[errors.email]} />
          </Field>

          <Field data-invalid={!!errors.password}>
            <FieldLabel>Password</FieldLabel>

            <PasswordInput
              placeholder="Enter your password"
              {...register("password")}
            />

            <FieldError errors={[errors.password]} />
          </Field>

        </FieldGroup>

        <div className="flex justify-end">
          <Link
            href="#"
            className="text-primary text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isPending}
        >
          {isPending ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm">
        <span className="text-muted-foreground">
          Don't have an account?
        </span>

        <Link
          href="/register"
          className="text-primary ml-2 font-semibold hover:underline"
        >
          Register
        </Link>
      </div>
    </Card>
  )
}

export default LoginForm