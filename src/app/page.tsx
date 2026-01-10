import { Suspense } from "react";
import Header from "@/src/app/_components/Header";
import HomeContainer from "@/src/app/_components/Home";
import Icons from "@/src/app/_components/Icons";
import Image from "next/image";
import Loading from "@/src/app/_components/loading";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Header />
      <Image
        src="/banner.jpg"
        alt="Fake Store"
        width={1920}
        height={600}
        priority
        className="w-full h-auto object-cover"
      />
      <div className="max-w-5xl">
        <Icons />
        <Suspense fallback={<Loading />}>
          <HomeContainer />
        </Suspense>
      </div>
    </div>
  );
}
