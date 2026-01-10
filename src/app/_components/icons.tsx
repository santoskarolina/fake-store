const Icons = () => {
  const icons: { title: string, description: string, img: string }[] = [
    {
      title: "Frete Gratis",
      description: "A partir de R$ 999,99",
      img: "frete.png",
    },
    {
      title: "Prazos",
      description: "Até 3 dias para envio",
      img: "data.png",
    },
    {
      title: "Todos os cartões",
      description: "Parcele em até 999 vezes",
      img: "desconto.png",
    },
  ];

  return (
    <div className="flex justify-around p-4 w-full">
      {icons.map((icon) => (
        <div key={icon.title} className="flex flex-col gap-1 items-center">
          <img src={icon.img} alt="" className="w-6" />
          <p className="text-gray-800 font-bold">{icon.title}</p>
          <span className="text-gray-700">{icon.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;