import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-primary/5 p-4">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
