# Currículo Web

Currículo pessoal desenvolvido como uma página web estática usando **HTML, CSS e JavaScript puro**, com foco em apresentação profissional, leitura rápida e geração de uma versão adequada para impressão/PDF.

## Estado atual

A versão atual foi reposicionada para refletir os projetos técnicos mais fortes do portfólio:

- S3 / S3-Benchmarks;
- Human Space Atlas;
- Molecule Generation & Virtual Screening Suite;
- Transparência Municipal.

Também foram removidas do HTML público informações pessoais excessivamente específicas, como endereço residencial completo e telefone.

## Funcionalidades

- currículo em uma única página;
- layout visual inspirado em uma janela de navegador;
- perfil profissional, competências, formação e experiência;
- projetos técnicos em destaque;
- links para GitHub e certificações;
- tema claro/escuro;
- preferência de tema persistida em `localStorage`;
- detecção inicial via `prefers-color-scheme`;
- stylesheet separado para impressão/PDF;
- funcionamento sem framework ou etapa de build.

## Tema claro e escuro

O arquivo `script.js` controla a preferência visual:

```text
carrega a página
      ↓
verifica tema salvo no localStorage
      ↓
se não existir, consulta prefers-color-scheme
      ↓
aplica tema claro ou escuro
      ↓
usuário pode alternar manualmente
      ↓
nova preferência é persistida
```

## Versão para impressão / PDF

`print.css` define uma apresentação A4 mais simples:

- remove a barra visual do navegador;
- elimina background e sombras;
- reorganiza o conteúdo em duas colunas;
- reduz elementos decorativos;
- evita que blocos importantes quebrem no meio da página quando possível;
- força contraste adequado para impressão.

Para gerar um PDF, use a função **Imprimir / Salvar como PDF** do navegador.

## Stack

- HTML5
- CSS3
- JavaScript
- LocalStorage
- `prefers-color-scheme`
- CSS `@media print`

## Estrutura

```text
Curr-culo/
├── certi/        # páginas e materiais de certificação
├── img/          # imagens utilizadas pela interface
├── index.html    # conteúdo principal do currículo
├── style.css     # identidade visual e temas
├── print.css     # versão A4 / impressão
├── script.js     # alternância/persistência de tema
└── README.md
```

## Executando localmente

Não há dependências externas obrigatórias.

Você pode abrir `index.html` diretamente ou iniciar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Privacidade

Currículos públicos merecem uma revisão diferente de currículos enviados diretamente a uma empresa.

A versão no repositório evita endereço residencial completo e telefone. Antes de publicar novas informações, avalie se o dado precisa realmente ficar acessível permanentemente no GitHub.

## Próximas evoluções úteis

- criar uma variante ainda mais enxuta para sistemas ATS;
- adicionar testes de acessibilidade e links quebrados;
- automatizar validação de HTML;
- separar conteúdo profissional da camada visual para facilitar múltiplas versões do currículo.
