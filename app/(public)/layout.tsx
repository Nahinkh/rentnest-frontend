import Navbar from "@/components/layout/navbar/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
