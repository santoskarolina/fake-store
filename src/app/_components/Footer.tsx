import Image from "next/image";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-blue text-zinc-100 p-8 flex flex-col items-center border-t border-b-blue-950 mt-auto">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-bold text-amber-500 uppercase text-sm tracking-widest">Contatos</p>
          <nav className="flex flex-col gap-1 items-center md:items-start text-zinc-300">
            <a href="https://www.linkedin.com/in/karolina104016/" 
               target="_blank" rel="noopener noreferrer" 
               className="hover:text-amber-400 transition-colors">
               Linkedin
            </a>
            <a href="https://github.com/santoskarolina" 
               target="_blank" rel="noopener noreferrer"
               className="hover:text-amber-400 transition-colors">
               GitHub
            </a>
            <a href="https://anakarolina.netlify.app/" 
               target="_blank" rel="noopener noreferrer"
               className="hover:text-amber-400 transition-colors">
               Personal Website
            </a>
          </nav>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/vercel.svg"
            width={40}
            height={40}
            alt="Logo Fake Store"
          />
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-zinc-700 w-full text-center">
        <h2 className="font-medium text-sm text-zinc-400">
          &copy; {currentYear} Fake Store. Todos os direitos reservados.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;