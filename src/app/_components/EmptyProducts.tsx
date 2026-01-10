import Image from "next/image";

const EmptyProducts = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <Image
        src="/empty-data.png"
        width={500}
        height={500}
        alt="Lista Sem Resultados"
        className="h-auto object-cover"
      />
      <h1 className="text-gray-500 font-bold text-4xl">
        Sua busca não retornou resultados
      </h1>
      <h2 className="text-gray-800 text-2xl font-medium">
        Tente realizar outra busca.
      </h2>
    </div>
  );
};

export default EmptyProducts;
