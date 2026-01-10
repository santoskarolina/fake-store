'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 p-4">
      <h2 className="text-xl font-bold text-red-600">Ops! Algo deu errado.</h2>
      <p className="text-zinc-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Tentar novamente
      </button>
    </div>
  );
}