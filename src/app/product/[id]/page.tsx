import Breadcrumb from '@/src/app/_components/Breadcrumb';
import DetailsWrapper from './components/DetailsWrapper';
import { Suspense } from 'react';
import Loading from './components/loading';

interface ProductPageProps {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ name: string, category: string }>;
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { id } = await params;
  const { name, category } = await searchParams;
   
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans">
      <Breadcrumb name={name} category={category}/>
      <Suspense fallback={<Loading />}>
        <DetailsWrapper id={id} />
      </Suspense>
    </div>
  )
}
