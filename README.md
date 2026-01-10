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

   Migrei a busca de dados para o lado do cliente ('use client' + useEffect), dessa forma, perdi um pouco da performance inicial de SEO e o "HTML pronto" que o servidor enviaria. Mas optei por essa abordagem para garantir a confiabilidade da entrega de dados.

   Como a api do fakeStore apresentou instabilidade de conexão com o ambiente de build da vercel, o fetch no cliente garante que o usuário final consiga visializar os produtos, contornando bloqueios de rede que ocorriam no servidor.

- **Renderização Dinâmica (force-dynamic):**

    Forcei a página a ser dinâmica, pois priorizei a consistência dos dados. No exemplo do fakeStore, é preferível que o usuário veja os dados reais a atuis da api do que uma versão estática que pode estar desatualizada ou vazia devido a um erro no momento do deploy.