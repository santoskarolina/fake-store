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

## Escolha do Next.Js
Embora o Vite seja uma excelente ferramenta para Single Page Applications (SPAs) puras, a escolha pelo Next.js para este projeto foi estratégica devido aos seguintes fatores:

- **Otimização Nativa de Imagens:** Utilizei o componente <Image /> do Next.js, que gerencia automaticamente o lazy loading e o redimensionamento de imagens (essencial para um catálogo de e-commerce com fotos externas da FakeStoreAPI).
- **Roteamento baseado em arquivos:** O sistema de app router torna a criação de páginas de detalhes (/product/[id]) muito mais intuitiva e organizada do que a configuração manual de bibliotecas como o react-router-dom no Vite.
- **Preparação para Escala:** O Next.js já traz embutido otimizações de fontes, metadados (SEO) e scripts que, em um cenário real de produção, colocariam a aplicação em um nível de performance superior ao de uma SPA comum.


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


- **Vite**

Se o objetivo do projeto fosse uma aplicação interna (como um Dashboard de Admin) onde o SEO não é relevante e a infraestrutura de servidor precisa ser a mais simples possível (apenas arquivos estáticos), o Vite seria considerado pela sua velocidade de build e simplicidade de deploy em storages estáticos (como S3 ou Firebase Hosting).