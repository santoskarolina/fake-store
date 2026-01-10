import Image from "next/image";

const Icons = () => {
  const icons: { title: string, description: string, img: string }[] = [
    {
      title: "Frete Gratis",
      description: "A partir de R$ 999,99",
      img: "/frete.png",
    },
    {
      title: "Prazos",
      description: "Até 3 dias para envio",
      img: "/data.png",
    },
    {
      title: "Todos os cartões",
      description: "Parcele em até 999 vezes",
      img: "/desconto.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-around gap-8 p-4">
      {icons.map((icon) => (
      <div key={icon.title} className="flex flex-col gap-2 items-center text-center p-2">
        <div className="relative w-8 h-8 md:w-12 md:h-12">
          <Image src={icon.img} fill alt={icon.title} className="object-contain" />
        </div>
        <p className="text-gray-800 font-bold text-sm md:text-base">{icon.title}</p>
        <span className="text-gray-700 text-xs md:text-sm">{icon.description}</span>
      </div>
    ))}
    </div>
  );
};

export default Icons;