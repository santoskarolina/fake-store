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