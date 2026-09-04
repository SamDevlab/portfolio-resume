# Currículo Web

Currículo pessoal desenvolvido como uma página web estática usando **HTML, CSS e JavaScript puro**, com foco em apresentação profissional, organização visual e acesso rápido a projetos e certificações.

## Objetivo

O projeto transforma um currículo tradicional em uma experiência navegável no navegador, mantendo a estrutura de formação, experiência, habilidades, certificados e projetos em uma interface visual própria.

## Funcionalidades

- currículo completo em uma única página;
- layout visual inspirado em uma janela de navegador;
- seções para contato, habilidades, formação, experiência profissional, certificados e projetos;
- links diretos para projetos e certificações;
- alternância entre tema claro e escuro;
- preferência de tema salva no `localStorage`;
- detecção inicial da preferência de tema do sistema operacional;
- assets locais para imagens e certificados;
- funcionamento sem framework ou etapa de build.

## Tema claro e escuro

O arquivo `script.js` controla a preferência visual da página.

Fluxo atual:

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

## Stack

- HTML5
- CSS3
- JavaScript
- LocalStorage
- `prefers-color-scheme`

## Estrutura

```text
Curr-culo/
├── certi/        # páginas e materiais de certificação
├── img/          # imagens utilizadas pela interface
├── index.html    # conteúdo principal do currículo
├── style.css     # identidade visual e temas
├── script.js     # alternância/persistência de tema
└── README.md
```

## Executando localmente

Não há dependências externas.

Você pode abrir `index.html` diretamente no navegador ou iniciar um servidor HTTP simples:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Estado do projeto

O currículo é uma implementação estática funcional. Alterações de conteúdo são realizadas diretamente no HTML e nos assets do repositório.

## Privacidade

O conteúdo de um currículo pode incluir dados pessoais. Antes de tornar este repositório ou uma cópia dele pública, revise cuidadosamente telefone, e-mail, endereço, documentos, certificados e qualquer outra informação que não deva ser exposta.

## Possíveis evoluções

- separar os dados pessoais do HTML em um arquivo estruturado;
- gerar automaticamente versões para impressão/PDF;
- adicionar versão específica para recrutadores e sistemas ATS;
- automatizar atualização de projetos a partir do GitHub;
- incluir testes simples de acessibilidade e links quebrados;
- publicar uma versão sem informações pessoais sensíveis.
