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
    <div className="flex justify-around p-4 w-full">
      {icons.map((icon) => (
        <div key={icon.title} className="flex flex-col gap-1 items-center">
          <Image src={icon.img} width={24} height={24} alt={icon.title}></Image>
          <p className="text-gray-800 font-bold">{icon.title}</p>
          <span className="text-gray-700">{icon.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;