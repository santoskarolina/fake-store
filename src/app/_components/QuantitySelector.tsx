export const QuantitySelector = ({ quantity, add, remove }: { quantity: number, add: () => void, remove: () => void }) => {
    return (
        <div className="flex items-center gap-4 border-amber-400 p-1 px-3 border rounded-2xl w-fit bg-white shadow-sm">
            <button className="text-amber-600 hover:text-amber-700 font-bold text-lg transition-colors px-2 cursor-pointer" onClick={remove}> − </button>
            <span className="font-semibold text-slate-800 min-w-6 text-center">{quantity}</span>
            <button className="text-amber-600 hover:text-amber-700 font-bold text-lg transition-colors px-2 cursor-pointer" onClick={add}> + </button>
        </div>
    )
}