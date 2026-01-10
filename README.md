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
- **Server Components**: Optei por realizar o fetch de dados no lado do servidor para melhorar o SEO e reduzir a carga de JavaScript no cliente.
- **Renderização Dinâmica (force-dynamic)**: Configurada para garantir que os dados da API externa sejam sempre buscados em tempo real, evitando cache estático viciado durante o build.
- **Zustand**: Utilizado para gerenciar o estado global de produtos e categorias de forma leve
- **Data Fetching**: Optei por realizar o fetch de dados no lado do cliente (CSR) utilizando useEffect. Embora Server Components sejam preferíveis para SEO, identifiquei instabilidades na comunicação entre o ambiente de execução da Vercel e a API externa (FakeStoreAPI) durante o processamento no servidor, garantindo assim que o usuário final sempre receba os dados independentemente de latências de rede no servidor.



## Pontos de Melhoria
- **Implementação de Testes**: Adicionar testes unitários com Jest.


## Trade-offs
- **Client-side Fetching vs. Server-side Rendering (SSR):**

   Inicialmente havia feito o fetch no lado do servidor, utilizando Server Componente para otimizar a performance e SEO. Mas durante o deploy na vercel, identifiquei gargalos em relação a instabilidade de rede entre o ambiente de execução da Vercel e a api da fakeStore, isso causava o congelamento dos dados. Dessa forma, optei por realizar o fetch no lado do cliente ('use client') para garantir a disponibilidade do conteúdo, evitando que instabilidades de rede entre a Vercel e a API externa durante o build comprometessem a visualização do catálogo pelos usuários.

- **Renderização Dinâmica (force-dynamic):**

    Forcei a página a ser dinâmica, pois priorizei a consistência dos dados. No exemplo do fakeStore, é preferível que o usuário veja os dados reais a atuis da api do que uma versão estática que pode estar desatualizada ou vazia devido a um erro no momento do deploy.