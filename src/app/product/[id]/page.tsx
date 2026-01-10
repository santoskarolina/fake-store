import Header from '../../_components/Header';
import { Suspense } from 'react';
import Details from './components/Details';
import Loading from './components/loading';
import Breadcrumb from '../../_components/Breadcrumb';

interface ProductPageProps {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ name: string, category: string }>;
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { id } = await params;
  const { name, category } = await searchParams;
   
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans">
      <Header />
      <Breadcrumb name={name} category={category}/>
      <Suspense fallback={<Loading />}>
        <Details id={id} />
      </Suspense>
    </div>
  )
}
