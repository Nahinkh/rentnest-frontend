import React from "react";
import { Button } from "../ui/button";
import { userLogout } from "@/hook/auth/userLogout";
import { Loader2, LogOut } from "lucide-react";

const LogoutButton = () => {
  const { mutate: logout, isPending } = userLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 text-xs"
      onClick={handleLogout}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Signing out...
        </>
      ) : (
        <>
          <LogOut className="w-4 h-4" />
          Sign Out
        </>
      )}
    </Button>
  );
};

export default LogoutButton;
