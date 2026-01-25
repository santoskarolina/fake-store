import Breadcrumb from '@/src/app/_components/Breadcrumb';
import DetailsWrapper from './components/DetailsWrapper';
import { Suspense } from 'react';
import Loading from './components/loading';
import SimilarProducts from '../../_components/SimilarProductsWrapper';

interface ProductPageProps {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ name: string, category: string, categoryId: number }>;
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { id } = await params;
  const { name, category, categoryId } = await searchParams;
   
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans md:pt-34 pt-50">
      <Breadcrumb name={name} category={category} categoryId={categoryId}/>
      <Suspense fallback={<Loading />}>
        <DetailsWrapper id={id} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SimilarProducts categoryId={categoryId}/>
      </Suspense>

    </div>
  )
}
