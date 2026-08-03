"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { userLogin } from '@/hook/auth/userLogin'
import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '@/schemas/auth.schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import PasswordInput from './PasswordInput'
import { Label } from '../ui/label'


const LoginForm = () => {
     const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = userLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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
    <div className="h-[calc(100vh-6rem)] w-full flex items-center justify-center overflow-hidden px-4">
      <Card className="w-full max-w-md rounded-3xl border p-6 sm:p-8 shadow-xl bg-card">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome Back 👋
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Login to continue your rental journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <FieldGroup className="space-y-4">
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
              className="text-primary text-xs sm:text-sm hover:underline"
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

        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
          <span className="text-muted-foreground">
            Don&apos;t have an account?
          </span>
          <Link
            href="/register"
            className="text-primary ml-2 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </Card>
    </div>
    // <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center bg-background px-4 py-12">
    //   <Card className="w-full max-w-md border-border/60 shadow-lg bg-card">
    //     <CardHeader className="space-y-1 text-center sm:text-left">
    //       <div className="flex justify-center sm:justify-start mb-2">
    //         <span className="h-2 w-2 rounded-full bg-primary" />
    //       </div>
    //       <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
    //       <CardDescription>
    //         Enter your credentials to access your Vesta portal
    //       </CardDescription>
    //     </CardHeader>
        
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <CardContent className="space-y-4">
    //         {/* Email Field */}
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email address</Label>
    //           <Input 
    //             id="email" 
    //             type="email" 
    //             placeholder="name@example.com" 
    //             {...register("email")}
    //             disabled={isLoading}
    //             className="bg-background"
    //           />
    //           {errors.email && (
    //             <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
    //           )}
    //         </div>
            
    //         {/* Password Field */}
    //         <div className="space-y-2">
    //           <div className="flex items-center justify-between">
    //             <Label htmlFor="password">Password</Label>
    //             <Link 
    //               href="/forgot-password" 
    //               className="text-xs text-muted-foreground hover:text-foreground transition-colors"
    //             >
    //               Forgot password?
    //             </Link>
    //           </div>
    //           <Input 
    //             id="password" 
    //             type="password" 
    //             {...register("password")}
    //             disabled={isLoading}
    //             className="bg-background"
    //           />
    //           {errors.password && (
    //             <p className="text-xs text-destructive font-medium">{errors.password.message}</p>
    //           )}
    //         </div>
    //       </CardContent>

    //       <CardFooter className="flex flex-col gap-4 pt-2">
    //         <Button type="submit" className="w-full gap-2" disabled={isLoading}>
    //           {isLoading ? (
    //             <>
    //               <Loader2 className="w-4 h-4 animate-spin" />
    //               Signing in...
    //             </>
    //           ) : (
    //             <>
    //               Sign In
    //               <ArrowRight className="w-4 h-4" />
    //             </>
    //           )}
    //         </Button>
            
    //         <p className="text-xs text-center text-muted-foreground">
    //           Don&apos;t have an account?{" "}
    //           <Link href="/register" className="text-foreground font-medium hover:underline">
    //             Register here
    //           </Link>
    //         </p>
    //       </CardFooter>
    //     </form>
    //   </Card>
    // </div>
  )
}

export default LoginForm