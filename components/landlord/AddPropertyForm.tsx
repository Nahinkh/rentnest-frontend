"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Building, ImageIcon, Loader2, PlusCircle } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { propertySchema } from "@/schemas/property.schemas";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAddProperty } from "@/hook/property/useProperty";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Trash2 } from "lucide-react";

type PropertyFormValues = z.input<typeof propertySchema>;
const AddPropertyForm = () => {
  const { mutate, isPending } = useAddProperty();
  const router = useRouter();
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = (data: PropertyFormValues) => {
    mutate(data as any, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-background">
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 max-w-4xl mx-auto w-full">
        <Card className="border-border/60 shadow-lg bg-card rounded-2xl">
          <CardHeader className="space-y-1 border-b border-border/40 pb-5">
            <div className="flex items-center gap-2 text-primary">
              <Building className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">
                Landlord Portal
              </span>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              List a New Property
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Provide complete architectural details and image asset links for
              your listing.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-6 pt-6">
              {/* Basic Information Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                  General Info
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Commercial Office Space in Tejgaon"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-xs text-destructive">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Suitable for startups and IT companies."
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="text-xs text-destructive">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rentPrice">Rent Price ($ / ৳)</Label>
                    <Input
                      id="rentPrice"
                      type="number"
                      placeholder="40000"
                      {...register("rentPrice")}
                    />
                    {errors.rentPrice && (
                      <p className="text-xs text-destructive">
                        {errors.rentPrice.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoryName">Category Type</Label>
                    <Select
                      onValueChange={(val) => setValue("categoryName", val as string)}
                      defaultValue="Office"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Office">
                          Office (Commercial)
                        </SelectItem>
                        <SelectItem value="Apartment">
                          Apartment (Residential)
                        </SelectItem>
                        <SelectItem value="Townhouse">Townhouse</SelectItem>
                        <SelectItem value="Studio">Studio Loft</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.categoryName && (
                      <p className="text-xs text-destructive">
                        {errors.categoryName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Images Array Section */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Property Images (URL
                    Array)
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => append({ url: "" })}
                  >
                    + Add Image URL
                  </Button>
                </div>

                <div className="space-y-3">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <Input
                        placeholder="https://example.com/image.jpg"
                        {...register(`images.${index}.url` as any)}
                      />
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive shrink-0"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  {errors.images && (
                    <p className="text-xs text-destructive">
                      {errors.images.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Specifications Matrix */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                  Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Rooms / Beds</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      placeholder="6"
                      {...register("bedrooms")}
                    />
                    {errors.bedrooms && (
                      <p className="text-xs text-destructive">
                        {errors.bedrooms.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      step="0.5"
                      placeholder="2"
                      {...register("bathrooms")}
                    />
                    {errors.bathrooms && (
                      <p className="text-xs text-destructive">
                        {errors.bathrooms.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area Size (sq.ft)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="3000"
                      {...register("area")}
                    />
                    {errors.area && (
                      <p className="text-xs text-destructive">
                        {errors.area.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location & Coordinates */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                  Location & Coordinates
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    placeholder="Tejgaon Commercial Area"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-xs text-destructive">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Dhaka"
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="text-xs text-destructive">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="division">Division / State</Label>
                    <Input
                      id="division"
                      placeholder="Dhaka"
                      {...register("division")}
                    />
                    {errors.division && (
                      <p className="text-xs text-destructive">
                        {errors.division.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                      id="latitude"
                      type="number"
                      step="0.0001"
                      placeholder="23.7315"
                      {...register("latitude")}
                    />
                    {errors.latitude && (
                      <p className="text-xs text-destructive">
                        {errors.latitude.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input
                      id="longitude"
                      type="number"
                      step="0.0001"
                      placeholder="90.4175"
                      {...register("longitude")}
                    />
                    {errors.longitude && (
                      <p className="text-xs text-destructive">
                        {errors.longitude.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-end gap-3 border-t border-border/40 py-4 bg-secondary/10">
              <Button type="submit" disabled={isPending} className="gap-2">
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Publishing Property...
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" />
                    Publish Listing
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPropertyForm;
