"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  DollarSign,
  Home,
  ImageIcon,
  Loader2,
  MapPin,
  Maximize,
  PlusCircle,
  Sparkles,
} from "lucide-react";
import type { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddProperty } from "@/hook/property/useProperty";
import PropertyImageUpload from "./PropertyImageUpload";
import { propertySchema } from "@/schemas/property.schemas";
import DashboardHeader from "@/app/dashboard/common/DashboardHeader";
import { IProperty } from "@/types/property";

type PropertyFormValues = z.input<typeof propertySchema>;

const AddPropertyForm = () => {
  const { mutate, isPending,isSuccess} = useAddProperty();


  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      category: "Apartment",
      images: [],
    },
  });

  const images = watch("images") ?? [];

  const onSubmit = (data: PropertyFormValues) => {
    mutate(data as unknown as IProperty);
  };

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-background">
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 max-w-4xl mx-auto w-full">
        <DashboardHeader
          title="Add New Property"
          description="Create a detailed listing so tenants can easily understand and discover your property."
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            {/* =====================================================
                GENERAL INFORMATION
            ====================================================== */}
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/40 bg-muted/10 px-5 py-4 sm:px-6">
                <SectionHeading
                  icon={<Building2 className="h-4 w-4" />}
                  title="General Information"
                  description="Basic information tenants will see first."
                />
              </CardHeader>

              <CardContent className="space-y-5 px-5 py-6 sm:px-6">
                {/* Title */}
                <FormField
                  label="Property Title"
                  htmlFor="title"
                  required
                  error={errors.title?.message}
                >
                  <Input
                    id="title"
                    placeholder="e.g. Modern 3 Bedroom Apartment in Gulshan"
                    className="h-10"
                    {...register("title")}
                  />
                </FormField>

                {/* Description */}
                <FormField
                  label="Description"
                  htmlFor="description"
                  required
                  error={errors.description?.message}
                >
                  <Textarea
                    id="description"
                    placeholder="Describe the property, nearby facilities, amenities, environment, and anything tenants should know..."
                    className="min-h-[130px] resize-none"
                    {...register("description")}
                  />

                  <p className="text-[10px] text-muted-foreground">
                    A clear description helps tenants understand the property
                    before contacting you.
                  </p>
                </FormField>

                {/* Rent + Category */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Monthly Rent"
                    htmlFor="rentPrice"
                    required
                    error={errors.rentPrice?.message}
                  >
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="rentPrice"
                        type="number"
                        placeholder="30000"
                        className="h-10 pl-9"
                        {...register("rentPrice")}
                      />
                    </div>
                  </FormField>

                  <FormField
                    label="Property Category"
                    required
                    error={errors.category?.message}
                  >
                    <Select
                      defaultValue="Apartment"
                      onValueChange={(value) =>
                        setValue("category", value as string, {
                          shouldValidate: true,
                        })
                      }
                    >
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>

                        <SelectItem value="Office">Office</SelectItem>

                        <SelectItem value="Townhouse">Townhouse</SelectItem>

                        <SelectItem value="Studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>
              </CardContent>
            </Card>

            {/* =====================================================
                PROPERTY IMAGES
            ====================================================== */}
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/40 bg-muted/10 px-5 py-4 sm:px-6">
                <SectionHeading
                  icon={<ImageIcon className="h-4 w-4" />}
                  title="Property Images"
                  description="Upload clear images that showcase your property."
                />
              </CardHeader>

              <CardContent className="px-5 py-6 sm:px-6">
                <PropertyImageUpload
                  value={images as any as File[]}
                  onChange={(files) =>
                    setValue("images", files as any, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                  maxFiles={10}
                  maxSizeInMB={5}
                />

                {errors.images && (
                  <p className="mt-3 text-xs text-destructive">
                    {typeof errors.images.message === "string"
                      ? errors.images.message
                      : "Please add valid property images."}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* =====================================================
                PROPERTY SPECIFICATIONS
            ====================================================== */}
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/40 bg-muted/10 px-5 py-4 sm:px-6">
                <SectionHeading
                  icon={<Home className="h-4 w-4" />}
                  title="Property Specifications"
                  description="Give tenants a quick overview of the property's size and layout."
                />
              </CardHeader>

              <CardContent className="px-5 py-6 sm:px-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <FormField
                    label="Bedrooms"
                    htmlFor="bedrooms"
                    error={errors.bedrooms?.message}
                  >
                    <div className="relative">
                      <BedDouble className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="bedrooms"
                        type="number"
                        placeholder="3"
                        className="h-10 pl-9"
                        {...register("bedrooms")}
                      />
                    </div>
                  </FormField>

                  <FormField
                    label="Bathrooms"
                    htmlFor="bathrooms"
                    error={errors.bathrooms?.message}
                  >
                    <div className="relative">
                      <Bath className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="bathrooms"
                        type="number"
                        step="0.5"
                        placeholder="2"
                        className="h-10 pl-9"
                        {...register("bathrooms")}
                      />
                    </div>
                  </FormField>

                  <FormField
                    label="Area"
                    htmlFor="area"
                    error={errors.area?.message}
                  >
                    <div className="relative">
                      <Maximize className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="area"
                        type="number"
                        placeholder="1200"
                        className="h-10 pl-9 pr-16"
                        {...register("area")}
                      />

                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">
                        sq.ft
                      </span>
                    </div>
                  </FormField>
                </div>
              </CardContent>
            </Card>

            {/* =====================================================
                LOCATION
            ====================================================== */}
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/40 bg-muted/10 px-5 py-4 sm:px-6">
                <SectionHeading
                  icon={<MapPin className="h-4 w-4" />}
                  title="Location"
                  description="Help tenants understand where the property is located."
                />
              </CardHeader>

              <CardContent className="space-y-5 px-5 py-6 sm:px-6">
                <FormField
                  label="Street Address"
                  htmlFor="address"
                  required
                  error={errors.address?.message}
                >
                  <Input
                    id="address"
                    placeholder="House 12, Road 5, Gulshan"
                    className="h-10"
                    {...register("address")}
                  />
                </FormField>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="City"
                    htmlFor="city"
                    required
                    error={errors.city?.message}
                  >
                    <Input
                      id="city"
                      placeholder="Dhaka"
                      className="h-10"
                      {...register("city")}
                    />
                  </FormField>

                  <FormField
                    label="Division"
                    htmlFor="division"
                    required
                    error={errors.division?.message}
                  >
                    <Input
                      id="division"
                      placeholder="Dhaka"
                      className="h-10"
                      {...register("division")}
                    />
                  </FormField>
                </div>

                {/* Coordinates */}
                <div className="rounded-xl border border-border/50 bg-muted/10 p-4">
                  <div className="mb-4 flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />

                    <div>
                      <p className="text-xs font-medium">Map Coordinates</p>

                      <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                        Optional. Add coordinates if you want to show the exact
                        property location on a map.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      label="Latitude"
                      htmlFor="latitude"
                      error={errors.latitude?.message}
                    >
                      <Input
                        id="latitude"
                        type="number"
                        step="0.0001"
                        placeholder="23.7806"
                        className="h-10"
                        {...register("latitude")}
                      />
                    </FormField>

                    <FormField
                      label="Longitude"
                      htmlFor="longitude"
                      error={errors.longitude?.message}
                    >
                      <Input
                        id="longitude"
                        type="number"
                        step="0.0001"
                        placeholder="90.4070"
                        className="h-10"
                        {...register("longitude")}
                      />
                    </FormField>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* =====================================================
                SUBMIT
            ====================================================== */}
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardFooter className="flex flex-col gap-3 bg-muted/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <p className="max-w-md text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    Make sure your property information and images are accurate
                    before publishing your listing.
                  </p>
                </div>

                <div className="flex w-full gap-2 sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 text-xs sm:flex-none"
                  >
                    <Link href="/dashboard/landlord/properties">Cancel</Link>
                  </Button>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 gap-2 text-xs sm:flex-none"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <PlusCircle className="h-4 w-4" />
                        Publish Property
                      </>
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ================================================================
   SECTION HEADING
================================================================ */

const SectionHeading = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background text-primary">
        {icon}
      </div>

      <div>
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>

        <CardDescription className="mt-0.5 text-[10px] leading-relaxed sm:text-xs">
          {description}
        </CardDescription>
      </div>
    </div>
  );
};

/* ================================================================
   FORM FIELD
================================================================ */

const FormField = ({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-xs font-medium">
        {label}

        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>

      {children}

      {error && <p className="text-[11px] text-destructive">{error}</p>}
    </div>
  );
};

export default AddPropertyForm;
