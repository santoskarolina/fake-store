## Fake Store

O deploy do projeto foi feito na Vercel, o mesmo pode ser acessado pelo seguinte lindk:

```bash
https://fake-store-omega-ashen.vercel.app/
```

Para rodar manualmente, execute os seguintes passos:

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

- Next.js (App Router): Utilizado pela facilidade de roteamento e suporte nativo a Server Components.
- Server Components: Optei por realizar o fetch de dados no lado do servidor para melhorar o SEO e reduzir a carga de JavaScript no cliente.
- Renderização Dinâmica (force-dynamic): Configurada para garantir que os dados da API externa sejam sempre buscados em tempo real, evitando cache estático viciado durante o build.
- Zustand: Utilizado para gerenciar o estado global de produtos e categorias de forma leve



## Pontos de Melhoria
- Implementação de Testes: Adicionar testes unitários com Jest.
## Obervações
Identifiquei que o ambiente de build da Vercel apresentava instabilidades ao conectar com a API da FakeStore, então optei pela renderização dinâmica para garantir a resiliência do sistema em produção