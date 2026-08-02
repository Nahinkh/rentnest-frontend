"use client";
import React from "react";
import { Card } from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import Link from "next/link";
import { RegisterFormData, registerSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/hook/auth/userRegister";

const RegisterForm = () => {
  const router = useRouter();

  const { mutate, isPending } = userRegister();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "TENANT",
    },
  });

  const onSubmit = ({ confirmPassword, ...data }: RegisterFormData) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };
  return (
    <Card className="w-full rounded-3xl border p-8 shadow-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Account 🚀</h1>

        <p className="mt-2 text-muted-foreground">Join RentNest today.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup>
          <Field data-invalid={!!errors.name}>
            <FieldLabel>Name</FieldLabel>

            <Input placeholder="Your full name" {...register("name")} />

            <FieldError errors={[errors.name]} />
          </Field>

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

            <PasswordInput placeholder="Password" {...register("password")} />

            <FieldError errors={[errors.password]} />
          </Field>

          <Field data-invalid={!!errors.confirmPassword}>
            <FieldLabel>Confirm Password</FieldLabel>

            <PasswordInput
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />

            <FieldError errors={[errors.confirmPassword]} />
          </Field>

          <Field data-invalid={!!errors.role}>
            <FieldLabel>Role</FieldLabel>

            <RadioGroup
              value={watch("role")}
              onValueChange={(value) =>
                setValue("role", value as "TENANT" | "LANDLORD")
              }
              className="flex gap-8"
            >
              <label className="flex cursor-pointer items-center gap-2">
                <RadioGroupItem value="TENANT" />
                Tenant
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <RadioGroupItem value="LANDLORD" />
                Landlord
              </label>
            </RadioGroup>

            <FieldError errors={[errors.role]} />
          </Field>
        </FieldGroup>

        <Button type="submit" size="lg" className="w-full" disabled={isPending}>
          {isPending ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm">
        <span className="text-muted-foreground">Already have an account?</span>

        <Link
          href="/login"
          className="text-primary ml-2 font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
    </Card>
  );
};

export default RegisterForm;
