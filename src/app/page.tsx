import Icons from "@/src/app/_components/Icons";
import Image from "next/image";
import Header from "@/src/app/_components/Header";
import { Suspense } from "react";
import ProductsWrapper from "./_components/ProductsWrapper";
import ProductsSkeleton from "./_components/ProductsSkeleton";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans">
      <Header />
      <Image
        src="/banner.jpg"
        alt="Fake Store"
        width={1920}
        height={600}
        priority
        className="w-full h-auto object-cover"
        style={{ height: 'auto' }}
      />
      <div className="max-w-5xl">
        <Icons />
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsWrapper />
        </Suspense>
      </div>
    </div>
  );
}
