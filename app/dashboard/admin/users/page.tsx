"use client";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import React, { useState } from "react";
import UsersTable, { AdminUser } from "../UsersTable";
import { useAdminUsers } from "@/hook/admin/useAdminUsers";
import UserManagementToolbar from "@/components/dashboard/admin/UserManagementToolbar";
import DashboardPagination from "../../common/DashboardPagination";

const AdminUsersPage = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, refetch } = useAdminUsers({
    searchTerm: search,
    role,
    status,
    page,
    limit: 10,
  });
  console.log(data)

  const handleClear = () => {
    setSearch("");
    setRole("all");
    setStatus("all");
    setPage(1);
  };
  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-primary">Administration</p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            User Management
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage users, roles, and account status across RentNest.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-6">
          <UserManagementToolbar
            search={search}
            role={role}
            status={status}
            onSearchChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            onRoleChange={(value) => {
              setRole(value);
              setPage(1);
            }}
            onStatusChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
            onClear={handleClear}
          />
        </div>

        {/* Error */}
        {isError && (
          <div className="mt-4 flex items-center justify-between rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3">
            <p className="text-sm text-destructive">Failed to load users.</p>

            <button
              type="button"
              onClick={() => refetch()}
              className="text-sm font-medium text-destructive underline underline-offset-4"
            >
              Try again
            </button>
          </div>
        )}

        {/* Users */}
        <div className="mt-6">
          <UsersTable users={data?.data ?? []} isLoading={isLoading} />
        </div>

        {/* Result count */}
        {!isLoading && !isError && data?.meta && (
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Showing {data.data.length} of {data.meta.total} users
              </p>
            </div>

            <DashboardPagination
              page={page}
              totalPages={data.meta.totalPage}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </RoleProtectedRoute>
  );
};

export default AdminUsersPage;
