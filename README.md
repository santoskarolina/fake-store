## Fake Store

O deploy do projeto foi feito na Vercel, o mesmo pode ser acessado pelo seguinte lindk:


https://fake-store-omega-ashen.vercel.app/

#### Para rodar manualmente, execute os seguintes passos:

1. Clone o repositório
```bash
git clone https://github.com/santoskarolina/fake-store.git
cd fake-store
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto
```bash
npm run dev
```

Acesse http://localhost:3000 no seu navegador.


## Decisões Técnicas

- **Next.js (App Router)**: Utilizado pela facilidade de roteamento e suporte nativo a Server Components.
- **Server Components**: O fetch de dados é realizado no servidor, eliminando o uso de useEffect para carregamento inicial. Isso garante que o conteúdo esteja disponível para motores de busca (SEO) e reduz o processamento no lado do cliente.
- **Zustand**: Utilizado para gerenciar o estado global de produtos e categorias de forma leve

## Decisões Técnicas

- **Framework**: Next.js (App Router)
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Zustand
- **API Externa**: Platzi Fake Store API (https://fakeapi.platzi.com/en)
- **Deploy & CI/CD**: Vercel & GitHub Actions