const ProductsSkeleton = () => {
  return (
    <div className="max-w-5xl mt-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-60 h-60 bg-zinc-200 animate-pulse border p-4 rounded-lg shadow mx-auto"></div>
        ))}
        </div>
    </div>
  )
}

export default ProductsSkeleton;