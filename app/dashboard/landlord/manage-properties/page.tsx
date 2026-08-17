"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllProperties,
  useGetAllPropertiesByLandlord,
} from "@/hook/property/useProperty";
import {
  Building,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import DashboardEmptyState from "../../common/DashboardEmptyState";
import DashboardLoadingState from "../../common/DashboardLoadingState";
import DashboardErrorState from "../../common/DashboardErrorState";
import DashboardHeader from "../../common/DashboardHeader";

const ManagePropertiesPage = () => {
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetAllPropertiesByLandlord();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 5;
  /**
   * Filter properties
   */
  const filteredProperties = useMemo(() => {
    if (!properties) return [];

    const query = searchQuery.toLowerCase().trim();

    if (!query) return properties;

    return properties.filter(
      (property) =>
        property.title.toLowerCase().includes(query) ||
        property.category.name.toLowerCase().includes(query) ||
        property.city.toLowerCase().includes(query) ||
        property.division.toLowerCase().includes(query),
    );
  }, [properties, searchQuery]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, currentPage]);

  /**
   * Reset page when search changes
   */
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  if (isLoading) {
    return <DashboardLoadingState />;
  }
  if (isError) {
    return <DashboardErrorState />;
  }

  return (
    <div className="h-full w-full overflow-y-auto bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="space-y-6">
          {/* =========================================================
              HEADER
          ========================================================== */}
          <DashboardHeader
            title="Manage Properties"
            description="View and manage your property listings."
            action={{
              label: "Add Property",
              href: "/dashboard/landlord/add-property",
              icon: <Plus className="h-3.5 w-3.5" />,
            }}
          />

          {/* =========================================================
              TOOLBAR
          ========================================================== */}
          <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search properties..."
                className="h-9 w-full pl-9 text-xs sm:text-sm"
              />
            </div>

            <div className="text-xs text-muted-foreground">
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}{" "}
              found
            </div>
          </section>

          {/* =========================================================
              PROPERTIES CARD
          ========================================================== */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            {/* Card Header */}
            <CardHeader className="border-b border-border/40 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    Active Listings
                  </CardTitle>

                  <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
                    Properties currently managed by you
                  </p>
                </div>

                <Badge
                  variant="outline"
                  className="hidden text-[10px] font-normal sm:flex"
                >
                  {filteredProperties.length} listings
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* =====================================================
                  DESKTOP TABLE
              ====================================================== */}
              <div className="hidden overflow-x-auto md:block">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/20 hover:bg-muted/20">
                      <TableHead className="h-11 min-w-[260px] pl-6 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Property
                      </TableHead>

                      <TableHead className="h-11 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Category
                      </TableHead>

                      <TableHead className="h-11 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Location
                      </TableHead>

                      <TableHead className="h-11 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Rent
                      </TableHead>

                      <TableHead className="h-11 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Area
                      </TableHead>

                      <TableHead className="h-11 pr-6 text-right text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {paginatedProperties.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="h-52 text-center">
                          <DashboardEmptyState
                            hasSearch={Boolean(searchQuery)}
                            onClear={() => handleSearch("")}
                          />
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedProperties.map((property) => (
                        <TableRow
                          key={property.id}
                          className="group transition-colors hover:bg-muted/30"
                        >
                          {/* Property */}
                          <TableCell className="py-4 pl-6">
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
                                <Building className="h-4 w-4 text-muted-foreground" />
                              </div>

                              <div className="min-w-0">
                                <p className="max-w-[240px] truncate text-sm font-medium">
                                  {property.title}
                                </p>

                                <p className="mt-0.5 text-[10px] text-muted-foreground">
                                  Property ID: {property.id.slice(0, 8)}
                                </p>
                              </div>
                            </div>
                          </TableCell>

                          {/* Category */}
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-normal"
                            >
                              {property.category.name}
                            </Badge>
                          </TableCell>

                          {/* Location */}
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5 shrink-0" />

                              <span className="max-w-[150px] truncate">
                                {property.city}, {property.division}
                              </span>
                            </div>
                          </TableCell>

                          {/* Rent */}
                          <TableCell>
                            <span className="text-sm font-semibold">
                              ৳{property.rentPrice.toLocaleString()}
                            </span>

                            <span className="ml-1 text-[10px] text-muted-foreground">
                              / month
                            </span>
                          </TableCell>

                          {/* Area */}
                          <TableCell>
                            <span className="text-xs text-muted-foreground">
                              {property.area.toLocaleString()} sq.ft
                            </span>
                          </TableCell>

                          {/* Actions */}
                          <TableCell className="pr-6">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1.5 px-2.5 text-xs "
                              >
                                <Link
                                  className="flex items-center gap-1.5"   
                                  href={`/dashboard/landlord/properties/edit/${property.id}`}
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                  <span>Update</span>
                                </Link>
                              </Button>

                              <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center h-8 gap-1.5 border-destructive/30 px-2.5 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                <span>Delete</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* =====================================================
                  MOBILE PROPERTY CARDS
              ====================================================== */}
              <div className="divide-y md:hidden">
                {paginatedProperties.length === 0 ? (
                  <div className="px-4 py-12">
                    <DashboardEmptyState
                      hasSearch={Boolean(searchQuery)}
                      onClear={() => handleSearch("")}
                    />
                  </div>
                ) : (
                  paginatedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="p-4 transition-colors active:bg-muted/30"
                    >
                      {/* Property Header */}
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
                          <Building className="h-4 w-4 text-muted-foreground" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold">
                            {property.title}
                          </h3>

                          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">
                              {property.city}, {property.division}
                            </span>
                          </div>
                        </div>

                        <Badge
                          variant="outline"
                          className="shrink-0 rounded-md px-2 py-0.5 text-[10px] font-normal"
                        >
                          {property.category.name}
                        </Badge>
                      </div>

                      {/* Property Details */}
                      <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg border bg-muted/20 p-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            Monthly Rent
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            ৳{property.rentPrice.toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            Area
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            {property.area.toLocaleString()}{" "}
                            <span className="text-[10px] font-normal text-muted-foreground">
                              sq.ft
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 gap-1.5 text-xs"
                        >
                          <Link
                            href={`/dashboard/landlord/properties/edit/${property.id}`}
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Update
                          </Link>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 gap-1.5 border-destructive/30 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* =====================================================
                  PAGINATION
              ====================================================== */}
              {filteredProperties.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-border/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    Showing{" "}
                    <span className="font-medium text-foreground">
                      {(currentPage - 1) * itemsPerPage + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium text-foreground">
                      {Math.min(
                        currentPage * itemsPerPage,
                        filteredProperties.length,
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium text-foreground">
                      {filteredProperties.length}
                    </span>
                  </p>

                  <div className="flex items-center justify-between gap-2 sm:justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 flex-1 gap-1 px-2.5 text-xs sm:flex-none"
                      onClick={() =>
                        setCurrentPage((page) => Math.max(page - 1, 1))
                      }
                      disabled={currentPage === 1}
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
                      onClick={() =>
                        setCurrentPage((page) => Math.min(page + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
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
  );
};

export default ManagePropertiesPage;
