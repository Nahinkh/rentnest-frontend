"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building, Check, ChevronLeft, ChevronRight, Clock3, Eye, MapPin, Search, User, X } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo, useState } from 'react'


type RequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELLED";

interface RentalRequest {
  id: string;
  tenantName: string;
  tenantEmail: string;
  propertyId: string;
  propertyTitle: string;
  category: string;
  city: string;
  division: string;
  rentPrice: number;
  moveInDate: string;
  leaseDuration: number;
  occupants: number;
  occupation?: string;
  status: RequestStatus;
  submittedAt: string;
  message?: string;
}

const rentalRequests: RentalRequest[] = [
  {
    id: "req-001",
    tenantName: "Abdul Karim",
    tenantEmail: "abdul@example.com",
    propertyId: "property-001",
    propertyTitle: "Modern 2BR Apartment",
    category: "Apartment",
    city: "Gulshan",
    division: "Dhaka",
    rentPrice: 30000,
    moveInDate: "2026-09-01",
    leaseDuration: 12,
    occupants: 2,
    occupation: "Software Engineer",
    status: "PENDING",
    submittedAt: "2026-08-10",
    message:
      "I am interested in renting this apartment and would like to move in September.",
  },
  {
    id: "req-002",
    tenantName: "Tanvir Hasan",
    tenantEmail: "tanvir@example.com",
    propertyId: "property-002",
    propertyTitle: "Family Townhouse",
    category: "Townhouse",
    city: "Uttara",
    division: "Dhaka",
    rentPrice: 35000,
    moveInDate: "2026-10-15",
    leaseDuration: 12,
    occupants: 4,
    occupation: "Business Owner",
    status: "PENDING",
    submittedAt: "2026-08-09",
    message:
      "Looking for a long-term family residence in the Uttara area.",
  },
  {
    id: "req-003",
    tenantName: "Nusrat Jahan",
    tenantEmail: "nusrat@example.com",
    propertyId: "property-003",
    propertyTitle: "Luxury Glasshouse Apartment",
    category: "Apartment",
    city: "Gulshan",
    division: "Dhaka",
    rentPrice: 28000,
    moveInDate: "2026-09-15",
    leaseDuration: 6,
    occupants: 1,
    occupation: "Marketing Executive",
    status: "APPROVED",
    submittedAt: "2026-08-05",
  },
  {
    id: "req-004",
    tenantName: "Rakib Ahmed",
    tenantEmail: "rakib@example.com",
    propertyId: "property-004",
    propertyTitle: "Commercial Office Space",
    category: "Office",
    city: "Tejgaon",
    division: "Dhaka",
    rentPrice: 40000,
    moveInDate: "2026-09-01",
    leaseDuration: 24,
    occupants: 8,
    occupation: "Company Director",
    status: "REJECTED",
    submittedAt: "2026-08-03",
  },
];

const ITEMS_PER_PAGE = 5;

const RentalRequestPage = () => {
     const [requests, setRequests] = useState(rentalRequests);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [propertyFilter, setPropertyFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Filtering
   */
  const filteredRequests = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return requests.filter((request) => {
      const matchesSearch =
        !query ||
        request.tenantName.toLowerCase().includes(query) ||
        request.propertyTitle.toLowerCase().includes(query) ||
        request.city.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" ||
        request.status === statusFilter;

      const matchesProperty =
        propertyFilter === "ALL" ||
        request.propertyId === propertyFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesProperty
      );
    });
  }, [
    requests,
    searchQuery,
    statusFilter,
    propertyFilter,
  ]);

  /*
   * Pagination
   */
  const totalPages =
    Math.ceil(filteredRequests.length / ITEMS_PER_PAGE) || 1;

  const paginatedRequests = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredRequests.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredRequests, currentPage]);

  /*
   * Status counts
   */
  const pendingCount = requests.filter(
    (request) => request.status === "PENDING"
  ).length;

  /*
   * Update request status
   *
   * Later this will become:
   * await approveRentalRequest(requestId)
   * await rejectRentalRequest(requestId)
   */
  const updateRequestStatus = (
    requestId: string,
    status: RequestStatus
  ) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === requestId
          ? { ...request, status }
          : request
      )
    );
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (value: string | null) => {
    setStatusFilter(value ?? "ALL");
    setCurrentPage(1);
  };
   const handlePropertyFilter = (value: string | null) => {
    setPropertyFilter(value ?? "ALL");
    setCurrentPage(1);
  };
  return (
        <div className="h-[calc(100vh-4rem)] w-full overflow-hidden bg-background">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="space-y-6 pb-8">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <section className="flex flex-col gap-4 border-b border-border/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Rental Requests
                </h1>

                {pendingCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                  >
                    {pendingCount} pending
                  </Badge>
                )}
              </div>

              <p className="max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Review and manage tenant requests for your
                rental properties.
              </p>
            </div>
          </section>

          {/* =====================================================
              FILTERS
          ====================================================== */}
          <section className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchQuery}
                onChange={(event) =>
                  handleSearch(event.target.value)
                }
                placeholder="Search tenant or property..."
                className="h-9 pl-9 text-xs sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex">
              {/* Status */}
              <Select
                value={statusFilter}
                onValueChange={handleStatusFilter}
              >
                <SelectTrigger className="h-9 w-full text-xs sm:w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="ALL">
                    All Statuses
                  </SelectItem>
                  <SelectItem value="PENDING">
                    Pending
                  </SelectItem>
                  <SelectItem value="APPROVED">
                    Approved
                  </SelectItem>
                  <SelectItem value="REJECTED">
                    Rejected
                  </SelectItem>
                  <SelectItem value="CANCELLED">
                    Cancelled
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Property */}
              <Select
                value={propertyFilter}
                onValueChange={handlePropertyFilter}
              >
                <SelectTrigger className="h-9 w-full text-xs sm:w-[190px]">
                  <SelectValue placeholder="Property" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="ALL">
                    All Properties
                  </SelectItem>

                  {requests.map((request) => (
                    <SelectItem
                      key={request.propertyId}
                      value={request.propertyId}
                    >
                      {request.propertyTitle}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* =====================================================
              REQUEST LIST
          ====================================================== */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    Tenant Requests
                  </CardTitle>

                  <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
                    {filteredRequests.length} request
                    {filteredRequests.length !== 1 && "s"} found
                  </p>
                </div>

                <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                  <Clock3 className="h-3.5 w-3.5" />
                  {pendingCount} awaiting review
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">

              {/* =================================================
                  DESKTOP TABLE
              ================================================== */}
              <div className="hidden overflow-x-auto md:block">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/20 hover:bg-muted/20">
                      <TableHead className="h-11 pl-6 text-[10px] font-medium uppercase tracking-wide">
                        Tenant
                      </TableHead>

                      <TableHead className="h-11 text-[10px] font-medium uppercase tracking-wide">
                        Property
                      </TableHead>

                      <TableHead className="h-11 text-[10px] font-medium uppercase tracking-wide">
                        Move-in
                      </TableHead>

                      <TableHead className="h-11 text-[10px] font-medium uppercase tracking-wide">
                        Rent
                      </TableHead>

                      <TableHead className="h-11 text-[10px] font-medium uppercase tracking-wide">
                        Status
                      </TableHead>

                      <TableHead className="h-11 pr-6 text-right text-[10px] font-medium uppercase tracking-wide">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {paginatedRequests.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="h-48 text-center text-xs text-muted-foreground"
                        >
                          No rental requests found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedRequests.map((request) => (
                        <TableRow
                          key={request.id}
                          className="group transition-colors hover:bg-muted/30"
                        >
                          {/* Tenant */}
                          <TableCell className="py-4 pl-6">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-muted/40">
                                <User className="h-4 w-4 text-muted-foreground" />
                              </div>

                              <div className="min-w-0">
                                <p className="text-xs font-medium sm:text-sm">
                                  {request.tenantName}
                                </p>

                                <p className="mt-0.5 max-w-[160px] truncate text-[10px] text-muted-foreground">
                                  {request.tenantEmail}
                                </p>
                              </div>
                            </div>
                          </TableCell>

                          {/* Property */}
                          <TableCell>
                            <div className="min-w-[190px]">
                              <p className="truncate text-xs font-medium">
                                {request.propertyTitle}
                              </p>

                              <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {request.city}, {request.division}
                              </div>
                            </div>
                          </TableCell>

                          {/* Move in */}
                          <TableCell>
                            <p className="text-xs font-medium">
                              {new Date(
                                request.moveInDate
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>

                            <p className="mt-0.5 text-[10px] text-muted-foreground">
                              {request.leaseDuration} months
                            </p>
                          </TableCell>

                          {/* Rent */}
                          <TableCell>
                            <span className="text-xs font-semibold">
                              ৳
                              {request.rentPrice.toLocaleString()}
                            </span>

                            <span className="ml-1 text-[10px] text-muted-foreground">
                              /mo
                            </span>
                          </TableCell>

                          {/* Status */}
                          <TableCell>
                            <RequestStatusBadge
                              status={request.status}
                            />
                          </TableCell>

                          {/* Actions */}
                          <TableCell className="pr-6">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                
                                variant="ghost"
                                size="sm"
                                className="h-8 gap-1 px-2 text-xs"
                              >
                                <Link
                                  href={`/dashboard/landlord/rental-requests/${request.id}`}
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                  View
                                </Link>
                              </Button>

                              {request.status === "PENDING" && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1 px-2 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                                    onClick={() =>
                                      updateRequestStatus(
                                        request.id,
                                        "REJECTED"
                                      )
                                    }
                                  >
                                    <X className="h-3.5 w-3.5" />
                                    Reject
                                  </Button>

                                  <Button
                                    size="sm"
                                    className="h-8 gap-1 px-2 text-xs"
                                    onClick={() =>
                                      updateRequestStatus(
                                        request.id,
                                        "APPROVED"
                                      )
                                    }
                                  >
                                    <Check className="h-3.5 w-3.5" />
                                    Approve
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* =================================================
                  MOBILE CARDS
              ================================================== */}
              <div className="divide-y md:hidden">
                {paginatedRequests.length === 0 ? (
                  <div className="px-4 py-12 text-center text-xs text-muted-foreground">
                    No rental requests found.
                  </div>
                ) : (
                  paginatedRequests.map((request) => (
                    <div
                      key={request.id}
                      className="space-y-4 p-4"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted/40">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">
                                {request.tenantName}
                              </p>

                              <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                                {request.tenantEmail}
                              </p>
                            </div>

                            <RequestStatusBadge
                              status={request.status}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property */}
                      <div className="rounded-lg border bg-muted/20 p-3">
                        <div className="flex items-start gap-2.5">
                          <Building className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

                          <div className="min-w-0">
                            <p className="truncate text-xs font-medium">
                              {request.propertyTitle}
                            </p>

                            <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {request.city}, {request.division}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-3 gap-2">
                        <RequestDetail
                          label="Move-in"
                          value={new Date(
                            request.moveInDate
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                          })}
                        />

                        <RequestDetail
                          label="Rent"
                          value={`৳${request.rentPrice.toLocaleString()}`}
                        />

                        <RequestDetail
                          label="Occupants"
                          value={String(request.occupants)}
                        />
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          
                          variant="outline"
                          size="sm"
                          className="h-9 gap-1.5 text-xs"
                        >
                          <Link
                            href={`/dashboard/landlord/rental-requests/${request.id}`}
                          >
                            <Eye className="h-3.5 w-3.5" />
                            View Details
                          </Link>
                        </Button>

                        {request.status === "PENDING" ? (
                          <Button
                            size="sm"
                            className="h-9 gap-1.5 text-xs"
                            onClick={() =>
                              updateRequestStatus(
                                request.id,
                                "APPROVED"
                              )
                            }
                          >
                            <Check className="h-3.5 w-3.5" />
                            Approve
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 text-xs"
                            disabled
                          >
                            {request.status === "APPROVED"
                              ? "Approved"
                              : request.status.toLowerCase()}
                          </Button>
                        )}

                        {request.status === "PENDING" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="col-span-2 h-9 gap-1.5 border-destructive/30 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                            onClick={() =>
                              updateRequestStatus(
                                request.id,
                                "REJECTED"
                              )
                            }
                          >
                            <X className="h-3.5 w-3.5" />
                            Reject Request
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* =================================================
                  PAGINATION
              ================================================== */}
              {filteredRequests.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-border/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <p className="text-[11px] text-muted-foreground">
                    Showing{" "}
                    <span className="font-medium text-foreground">
                      {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium text-foreground">
                      {Math.min(
                        currentPage * ITEMS_PER_PAGE,
                        filteredRequests.length
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium text-foreground">
                      {filteredRequests.length}
                    </span>
                  </p>

                  <div className="flex items-center justify-between gap-2 sm:justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 flex-1 gap-1 px-2.5 text-xs sm:flex-none"
                      disabled={currentPage === 1}
                      onClick={() =>
                        setCurrentPage((page) =>
                          Math.max(page - 1, 1)
                        )
                      }
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                      Previous
                    </Button>

                    <div className="flex h-8 min-w-8 items-center justify-center rounded-md border bg-muted/30 px-2 text-xs font-medium">
                      {currentPage}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 flex-1 gap-1 px-2.5 text-xs sm:flex-none"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((page) =>
                          Math.min(page + 1, totalPages)
                        )
                      }
                    >
                      Next
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const RequestStatusBadge = ({
  status,
}: {
  status: RequestStatus;
}) => {
  const config: Record<
    RequestStatus,
    {
      label: string;
      className: string;
    }
  > = {
    PENDING: {
      label: "Pending",
      className:
        "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500",
    },
    APPROVED: {
      label: "Approved",
      className:
        "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
    },
    REJECTED: {
      label: "Rejected",
      className:
        "border-destructive/30 bg-destructive/10 text-destructive",
    },
    CANCELLED: {
      label: "Cancelled",
      className:
        "border-border bg-muted text-muted-foreground",
    },
  };

  const current = config[status];

  return (
    <Badge
      variant="outline"
      className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${current.className}`}
    >
      {current.label}
    </Badge>
  );
};

/* ================================================================
   MOBILE DETAIL
================================================================ */

const RequestDetail = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-lg border bg-muted/20 p-2.5">
      <p className="text-[9px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-semibold">
        {value}
      </p>
    </div>
  );
};

export default RentalRequestPage