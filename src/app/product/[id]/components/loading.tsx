const Loading = () => {
  return (
    <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2 p-8 animate-pulse">
      
      <div className="flex items-center justify-center bg-zinc-200 rounded-2xl h-125 border border-zinc-200 shadow-sm" />

      <div className="flex flex-col justify-center space-y-6">
        
        <div className="space-y-4">
          <div className="h-4 bg-zinc-200 rounded w-1/3" />
          <div className="space-y-2">
            <div className="h-8 bg-zinc-200 rounded-lg w-full" />
            <div className="h-8 bg-zinc-200 rounded-lg w-1/2" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-10 bg-zinc-200 rounded-lg w-32" />
          <div className="h-5 bg-zinc-200 rounded w-40" />
          <div className="space-y-2">
            <div className="h-4 bg-zinc-200 rounded w-full" />
            <div className="h-4 bg-zinc-200 rounded w-full" />
            <div className="h-4 bg-zinc-200 rounded w-3/4" />
          </div>
        </div>

        <div className="pt-6 space-y-4">
          <div className="h-14 bg-zinc-200 rounded-xl w-full" />
          <div className="h-14 bg-zinc-100 border border-zinc-200 rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;