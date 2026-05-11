function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

const importedCertificatesRaw = `Dominando Interfaces e Lambda em Java
30/04/2026 11:43
Conhecendo o GitHub Copilot: Aumentando sua Produtividade na Programação
29/04/2026 10:22
Tudo o que Você Precisa Saber para Começar a Usar Inteligência Artificial
28/04/2026 23:57
O Que é Este Bootcamp?
24/04/2026 19:55
Herança e Polimorfismo em Java
08/04/2026 19:59
Java e a Arte da Abstração com Classes e Encapsulamento
07/04/2026 10:37
Fundamentos de Machine Learning
05/04/2026 23:55
Desafio Final
05/04/2026 23:55
Onboarding + IA para Acelerar o Desenvolvimento
05/04/2026 23:55
Fundamentos de Banco de Dados e SQL
05/04/2026 23:55
Manipulação de Dados com Estruturas Fundamentais em Python
05/04/2026 23:55
Fundamentos Essenciais de Python para Análise de Dados
05/04/2026 23:55
Fundamentos de Java
05/04/2026 22:39
Estruturas de Controle em Java
05/04/2026 21:13
Fundamentos da Sintaxe da Linguagem Java
05/04/2026 10:34
Introdução ao Java e seu Ambiente de Desenvolvimento
04/04/2026 16:22
Accenture - Python para Análise e Automação de Dados
03/04/2026 23:46
Detecção de Anomalias em Transações em Python
03/04/2026 23:46
Python Aplicado à Análise: Automação de Rotinas e Visualização
03/04/2026 23:46
Inclusão Financeira: como a IA Pode te Ajudar a Organizar Suas Finanças Pessoais
03/04/2026 09:08
Boas Práticas, Testes e Otimização de Código em Python
02/04/2026 13:46
Visualização Avançada de Dados com Python
02/04/2026 12:03
Automação de Processos e Análises com Python
01/04/2026 14:12
Preparação de Dados com Python: Bibliotecas Essenciais
31/03/2026 14:57
Processamento e Limpeza de Dados em Python
31/03/2026 14:57
Escrevendo Prompts Eficazes
31/03/2026 12:00
Aplicações e Impacto da IA no Mundo Atual
31/03/2026 08:35
Bibliotecas Essenciais de Python para Análise de Dados
30/03/2026 19:57
Panorama da IA e Aplicações no Dia a Dia
30/03/2026 15:29
Transformando Sua Rotina com IA: Tenha o Seu Próprio Assistente de Metas
30/03/2026 15:29
Tratamento de Exceções e Depuração de Código em Python
30/03/2026 12:57
Trabalhando com Arquivos e Dados Externos em Python
28/03/2026 23:56
Programação Orientada a Objetos Aplicada à Análise de Dados
27/03/2026 22:47
Interfaces e Classes Abstratas com Python
27/03/2026 11:59
Conhecendo Polimorfismo em Python
27/03/2026 07:15
Aplicando Encapsulamento em Python
26/03/2026 20:07
Mapa de Oportunidades com IA no seu Dia a Dia
26/03/2026 17:48
Aprendendo o Conceito de Herança com Python
26/03/2026 17:34
Introdução à Programação Orientada a Objetos (POO) com Python
25/03/2026 15:05
Utilizando Copilotos de Desenvolvimento de Software
25/03/2026 00:31
Boas-vindas ao Accenture - Python para Análise e Automação de Dados
24/03/2026 19:39
Introdução ao Bootcamp Almaviva - Java & QA
24/03/2026 18:59
Princípios de Enumeração e Exploração de Vulnerabilidades
19/02/2026 10:19
Conceitos e Técnicas de Varredura de Rede
18/02/2026 23:08
Tópicos em Engenharia Social
18/02/2026 22:33
Introdução à Coleta e Análise de Segurança Cibernética
18/02/2026 21:57
Fundamentos de Testes de Invasão (Pentest)
18/02/2026 15:52
Fundamentos de Cibersegurança
18/02/2026 13:35
Introdução à Deep Web e Anonimato
18/02/2026 10:02
Fundamentos de Redes de Computadores
17/02/2026 22:21
Conceitos e Práticas de Sistemas Operacionais e Máquinas Virtuais
17/02/2026 19:08
Príncipios da Cibersegurança
17/02/2026 18:23
O Essencial Sobre Linux e Máquinas Virtuais
17/02/2026 17:16
Gerenciando Usuários no Linux
17/02/2026 17:01
Manipulando Arquivos no Linux
17/02/2026 00:56
Acesso Remoto a Máquinas Linux
13/02/2026 11:31
Instalando o Linux
13/02/2026 11:14
Bem vindo a Experiência Riachuelo Cibersegurança
12/02/2026 10:28
Introdução ao Sistema Operacional Linux
12/02/2026 10:17
Criando Objetos e Classes em JavaScript
17/01/2026 20:24
Introdução ao Excel e Power BI Dashboards com a Klabin 2026
16/01/2026 12:52
Conhecendo Funções JavaScript
16/01/2026 09:31
Introdução ao Desenvolvimento Low-Code
15/01/2026 13:16
Primeiros Passos Com JavaScript
15/01/2026 11:21
Apresentação da Formação JavaScript Developer
13/01/2026 09:47
Bradesco - GenAI & Dados
13/01/2026 00:13
Acelere seu Aprendizado com IA Generativa
13/01/2026 00:13
Live de Lançamento Bradesco - GenAI & Dados
13/01/2026 00:13
Desafio de Projeto Final — Construa seu Assistente Virtual com IA Generativa
13/01/2026 00:10
Desafio Final: Crie Seu Chatbot Inteligente para o Mercado Financeiro
13/01/2026 00:10
Conversando por Voz Com o ChatGPT Utilizando Whisper (OpenAI) e Python
11/01/2026 18:37
Os Pilares Formais da IA: do Machine Learning à IA Generativa
11/01/2026 18:37
O que são IAs Generativas
11/01/2026 08:17
Visão Computacional
11/01/2026 07:29
Processamento de Linguagem Natural
10/01/2026 21:51
Aprendendo Python e suas Estruturas de Dados
10/01/2026 08:45
Dominando Funções Python
09/01/2026 22:59
Aprendendo a Utilizar Dicionários em Python
09/01/2026 12:08
Explorando Conjuntos em Python
08/01/2026 10:35
Conhecendo Tuplas em Python
08/01/2026 09:57
Trabalhando com Listas em Python
08/01/2026 09:34
Manipulando Strings com Python
07/01/2026 11:44
Estruturas Condicionais e de Repetição em Python
06/01/2026 10:22
Tipos de Operadores com Python
06/01/2026 10:03
Conhecendo a Linguagem de Programação Python
03/01/2026 11:33
Do Excel ao SQL: Domine seus Dados com Inteligência
01/01/2026 09:47
Criando um Processo de ETL com Excel e Power Query
01/01/2026 09:23
Fundamentos de Business Intelligence (BI)
30/12/2025 22:47
Ambiente de Desenvolvimento e Primeiros Passos com Python
30/12/2025 08:51
Utilizando Microsoft Copilot para escrever consultas SQL
27/12/2025 13:12
Introdução a Banco de Dados Relacionais (SQL)
27/12/2025 10:51
Acelere sua Aprendizagem com IA: Explore o Poder do NotebookLM
25/12/2025 17:15
Trabalhando com Microsoft Copilot
22/12/2025 11:25
Introdução ao Excel 365
22/12/2025 09:11
Desafios de Projetos: Crie Um Portfólio Vencedor
21/12/2025 12:17
Aplicações Práticas da Inteligência Artificial
21/12/2025 11:21
Técnicas de Engenharia de Prompt
18/12/2025 22:13
Introdução à Engenharia de Prompts
18/12/2025 09:49
Fundamentos de Modelos de Linguagem de Grande Escala
17/12/2025 22:59
Introdução à Inteligência Artificial
17/12/2025 10:54
Boas-vindas ao Bradesco - GenAI & Dados
16/12/2025 22:00
Introdução Banco de Dados
13/12/2025 10:13
Introdução a Experiência de Lógica de Programação
11/12/2025 22:45
GitHub Copilot - Código na Prática
11/12/2025 21:40
Live de Lançamento: Adotando o GitHub Copilot e o Novo Fluxo de Trabalho
11/12/2025 21:40
Primeiros Passos com o GitHub Copilot: Um Guia Essencial
11/12/2025 21:40
Algoritmos e Aprendizado de Máquina
09/12/2025 11:39
Introdução ao Bootcamp Machine Learning para Iniciantes
08/12/2025 23:02
Calculadora EcoTrip: Simulador de Impacto Ambiental para Viagens
07/12/2025 13:32
GitHub Copilot em Ação: Criando projetos Prontos para o Mercado
07/12/2025 13:32
Copilot, além da IDE
07/12/2025 11:30
Domine a Engenharia de Prompt com o GitHub Copilot
07/12/2025 10:57
Conteúdo Oficial Recomendado do GitHub Copilot
07/12/2025 10:12
Copilot Chat: Como Utilizar?
07/12/2025 09:44
Bases de Prompt Engineering para o GitHub Copilot
06/12/2025 23:12
Configurando e Usando o GitHub Copilot
03/12/2025 07:46
O que é o GitHub Copilot?
02/12/2025 21:52
Aprimorando seu Desenvolvimento com o GitHub Copilot: o Poder de Ter um Copiloto em seu Fluxo de Trabalho
02/12/2025 16:44
Construindo um Sistema de Hospedagem de um Hotel no C#
19/10/2025 18:56
Nuget, Serializar e Atributos no C#
19/10/2025 14:00
Tuplas, Operador Ternário e Desconstrução de um Objeto com C#
17/10/2025 11:20
Exceções e Coleções com C#
16/10/2025 11:51
Manipulando Valores com C#
15/10/2025 10:18
Propriedades, Métodos e Construtores com C#
14/10/2025 09:22
Sintaxe Básica com .NET
11/10/2025 23:10
Desafios de Código: Aperfeiçoe Sua Lógica e Pensamento Computacional
11/10/2025 18:53
Construindo um Sistema para um Estacionamento com C#
10/10/2025 11:26
Array e Listas em C#
09/10/2025 22:44
Conhecendo a Organização de um Programa C#
09/10/2025 10:52
Conhecendo as Estruturas de Repetição em C#
08/10/2025 11:22
Operadores Aritméticos em C#
06/10/2025 10:17
Tipos de Operadores em C#
06/10/2025 07:35
Sintaxe e Tipos de Dados em C#
04/10/2025 11:59
Versionamento de Código com Git e GitHub
03/10/2025 09:46
Introdução as IDEs e Configuração de Ambiente .NET
30/09/2025 13:00
Introdução ao .NET
30/09/2025 11:59
Introdução ao Back-end com .NET e IA com a Avanade
27/09/2025 20:40`;

function inferTagsFromTitle(title) {
    const tags = [];
    const rules = [
        { re: /\bgithub copilot\b/i, tag: 'Copilot' },
        { re: /\bcopilot\b/i, tag: 'Copilot' },
        { re: /\bjavascript\b/i, tag: 'JavaScript' },
        { re: /\bjava\b/i, tag: 'Java' },
        { re: /\bpython\b/i, tag: 'Python' },
        { re: /\bc#\b/i, tag: 'C#' },
        { re: /\b\.net\b/i, tag: '.NET' },
        { re: /\bsql\b/i, tag: 'SQL' },
        { re: /\bexcel\b/i, tag: 'Excel' },
        { re: /power query/i, tag: 'Power Query' },
        { re: /power bi/i, tag: 'Power BI' },
        { re: /machine learning/i, tag: 'Machine Learning' },
        { re: /\bia\b|intelig[eê]ncia artificial|genai/i, tag: 'IA' },
        { re: /vis[oã]o computacional|visao computacional/i, tag: 'Visão Computacional' },
        { re: /pln|processamento de linguagem natural|linguagem natural/i, tag: 'PLN' },
        { re: /linux/i, tag: 'Linux' },
        { re: /ciberseguran[cç]a|pentest|testes de invasão/i, tag: 'Cibersegurança' },
        { re: /git(hub)?/i, tag: 'Git' },
        { re: /prompt/i, tag: 'Prompt Engineering' },
        { re: /dados|business intelligence|bi/i, tag: 'Dados' },
        { re: /etl/i, tag: 'ETL' },
        { re: /low-?code/i, tag: 'Low-Code' },
        { re: /chatbot/i, tag: 'Chatbot' }
    ];

    rules.forEach(({ re, tag }) => {
        if (re.test(title)) tags.push(tag);
    });

    if (tags.length === 0) tags.push('Bootcamp');

    return [...new Set(tags)].slice(0, 6);
}

function inferIssuerFromTitle(title) {
    if (title.includes('Avanade')) return 'DIO / Avanade';
    if (title.includes('Bradesco')) return 'DIO / Bradesco';
    if (title.includes('Accenture')) return 'DIO / Accenture';
    if (title.includes('Almaviva')) return 'DIO / Almaviva';
    if (title.includes('Riachuelo')) return 'DIO / Riachuelo';
    if (title.includes('Klabin')) return 'DIO / Klabin';
    if (title.includes('Microsoft')) return 'Microsoft';
    return 'DIO / Bootcamp';
}

function parseImportedCertificates(rawText) {
    const lines = rawText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const entries = [];
    const dateTimeRegex = /^\d{2}\/\d{2}\/\d{4}\s\d{2}:\d{2}$/;

    for (let i = 0; i < lines.length; i += 2) {
        const title = lines[i];
        const date = lines[i + 1];

        if (!title || !date || !dateTimeRegex.test(date)) {
            continue;
        }

        entries.push({ title, date });
    }

    return entries;
}

const importedCertificates = parseImportedCertificates(importedCertificatesRaw);

const formattedCertificates = importedCertificates.map((cert, index) => ({
    id: 2000 + index,
    title: cert.title,
    issuer: inferIssuerFromTitle(cert.title),
    date: cert.date,
    tags: inferTagsFromTitle(cert.title)
}));

const defaultData = {
    projects: [
        {
            id: 1,
            title: "Gerenciador de Versões de Currículo",
            description: "Ferramenta híbrida (CLI + GUI) em Python para versionamento local de documentos. Organiza o histórico de CVs com tags e notas, eliminando a bagunça de arquivos duplicados.",
            tags: ["Python", "CLI", "GUI", "Automation"],
            image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800",
            repoLink: "https://github.com/SamDevlab/Gerenciador-de-Curriculo"
        },
        {
            id: 2,
            title: "Calculadora EcoTrip",
            description: "Simulador de Impacto Ambiental para Viagens. Calcula a pegada de carbono e sugere compensações.",
            tags: ["Python", "Sustentabilidade", "Lógica"],
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
            repoLink: "https://github.com/SamDevlab/Calculadora-EcoTrip-Simulador-de-Impacto-Ambiental-para-Viagens"
        },
        {
            id: 3,
            title: "Sistema de Hospedagem (Hotel)",
            description: "Sistema completo para gestão de reservas, check-in e cálculo de diárias construído em C#.",
            tags: ["C#", ".NET", "Gestão"],
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
            repoLink: "https://github.com/SamDevlab/sistema-hospedagem-hotel"
        },
        {
            id: 4,
            title: "Sistema para Estacionamento",
            description: "Solução para controle de entrada e saída de veículos com tarifação dinâmica.",
            tags: ["C#", ".NET", "Lógica"],
            image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
            repoLink: "https://github.com/SamDevlab/Estacionamento"
        },
        {
            id: 5,
            title: "Gerenciador de Portfólio",
            description: "Sistema web para gerenciar projetos e certificações com interface moderna. Mais projetos e certificados aqui.",
            tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            repoLink: "#"
        },
        {
            id: 6,
            title: "Processo de ETL com Excel",
            description: "Pipeline completo de ETL (Extração, Transformação e Carga). Limpeza de dados brutos e padronização utilizando Power Query para análise de negócios.",
            tags: ["Excel", "Power Query", "ETL", "Dados"],
            image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
            repoLink: "SEU_LINK_DA_PLANILHA_AQUI", 
            isExcel: true
        }
    ],
    certificates: formattedCertificates
};

// --- 3. LÓGICA DO APP (RESET DE CACHE) ---

// Força o uso dos dados que estão escritos no código
let appData = defaultData;

// Limpa o cache antigo
localStorage.removeItem('portfolioData');

// --- 4. FUNÇÕES DE PESQUISA E RENDERIZAÇÃO ---

function getGroup(cert) {
    if (cert.tags.some(t => t.includes('Copilot'))) return 'GitHub Copilot';
    if (cert.tags.some(t => t.includes('SQL'))) return 'SQL';
    if (cert.tags.some(t => t.includes('C#'))) return 'C#';
    if (cert.tags.some(t => t.includes('Excel'))) return 'Excel';
    if (cert.tags.some(t => t.includes('IA') || t.includes('LLM') || t.includes('GenAI') || t.includes('Generativa') || t.includes('Visão Computacional') || t.includes('PLN') || t.includes('Linguagem Natural'))) return 'Inteligência Artificial';
    if (cert.tags.some(t => t.includes('Python'))) return 'Python';
    if (cert.tags.some(t => t.includes('Git'))) return 'Git & GitHub';
    if (cert.tags.some(t => t.includes('Business') || t.includes('BI'))) return 'Business Intelligence';
    if (cert.tags.some(t => t.includes('Database'))) return 'Banco de Dados';
    if (cert.tags.some(t => t.includes('JavaScript'))) return 'JavaScript';
    return 'Outros';
}

function handleSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchCount = document.getElementById('search-count');
    let totalFound = 0;

    const filteredProjects = appData.projects.filter(p => 
        p.title.toLowerCase().includes(searchTerm) || 
        p.tags.some(t => t.toLowerCase().includes(searchTerm)) ||
        (p.description && p.description.toLowerCase().includes(searchTerm))
    );

    const filteredCertificates = appData.certificates.filter(c => 
        c.title.toLowerCase().includes(searchTerm) || 
        c.tags.some(t => t.toLowerCase().includes(searchTerm)) ||
        c.issuer.toLowerCase().includes(searchTerm)
    );

    const certCount = filteredCertificates.length;

    totalFound = filteredProjects.length + certCount;

    if (searchTerm.length > 0) {
        searchCount.classList.remove('hidden');
        searchCount.textContent = `${totalFound} resultado(s)`;
    } else {
        searchCount.classList.add('hidden');
    }

    document.getElementById('project-count-badge').textContent = filteredProjects.length;
    document.getElementById('cert-count-badge').textContent = certCount;

    renderLists(filteredProjects, filteredCertificates);
}

function renderLists(projects, certificates) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    if (projects.length === 0) {
        document.getElementById('no-projects').classList.remove('hidden');
    } else {
        document.getElementById('no-projects').classList.add('hidden');
        projects.forEach(project => {
            const projectEl = project.repoLink !== "#" ? document.createElement('a') : document.createElement('div');
            if (project.repoLink !== "#") {
                projectEl.href = project.repoLink;
                projectEl.target = '_blank';
            }
            projectEl.className = 'group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white shadow-lg dark:bg-slate-900 dark:shadow-slate-900/50 relative border border-gray-100 dark:border-slate-800 flex flex-col h-full' + (project.repoLink !== "#" ? ' no-underline' : '');
            
            const tagsHtml = project.tags.map(tag => 
                `<span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">${tag}</span>`
            ).join('');

            // LÓGICA DO ÍCONE (Excel vs GitHub)
            let iconName = 'github';
            let buttonText = 'GitHub';
            let hoverColor = 'hover:text-blue-600 dark:hover:text-blue-400';

            // Verifica se é projeto de Excel
            if (project.isExcel) {
                iconName = 'file-spreadsheet'; // Ícone de planilha
                buttonText = 'Ver Planilha';
                hoverColor = 'hover:text-green-600 dark:hover:text-green-400'; // Cor Verde
            }

            projectEl.innerHTML = `
                <div class="relative overflow-hidden h-48 flex-shrink-0">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex flex-wrap gap-2 mb-4">${tagsHtml}</div>
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">${project.title}</h3>
                    <p class="text-sm mb-6 line-clamp-3 text-gray-600 dark:text-slate-400 flex-grow">${project.description}</p>
                    <div class="flex gap-4 mt-auto pt-4 border-t border-gray-700/10">
                        ${project.repoLink !== "#" ? `<div class="flex items-center gap-2 text-sm font-medium transition-colors ${hoverColor}">
                            <i data-lucide="${iconName}" class="w-4 h-4"></i> ${buttonText}
                        </div>` : `<div class="flex items-center gap-2 text-sm font-medium text-gray-400">
                            <i data-lucide="lock" class="w-4 h-4"></i> Em breve
                        </div>`}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectEl);
        });
    }

    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const isSearching = searchTerm.length > 0;

    const certGrid = document.getElementById('certificates-grid');
    certGrid.innerHTML = '';

    if (certificates.length === 0) {
        document.getElementById('no-certificates').classList.remove('hidden');
    } else {
        document.getElementById('no-certificates').classList.add('hidden');
        
        // Por padrão mostramos todos os certificados individualmente (lista detalhada)
        certificates.forEach(cert => {
            const certEl = document.createElement('div');
            certEl.className = 'flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-xl border transition-all hover:shadow-md bg-white border-gray-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-blue-500/30 dark:hover:border-blue-500/30 relative group';

            const tagsHtml = cert.tags ? cert.tags.slice(0, 3).map(tag => 
                `<span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">${tag}</span>`
            ).join('') : '';

            certEl.innerHTML = `
                <div class="p-3 rounded-lg mr-4 flex-shrink-0 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 mb-3 sm:mb-0">
                    <i data-lucide="award" class="w-6 h-6"></i>
                </div>
                <div class="flex-grow min-w-0">
                    <h3 class="text-base font-bold mb-1 pr-8 leading-tight truncate-multiline">${cert.title}</h3>
                    <div class="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-slate-400 mb-2">
                        <span>${cert.issuer}</span>
                        <span>•</span>
                        <span>${cert.date}</span>
                    </div>
                    <div class="flex flex-wrap gap-1">
                        ${tagsHtml}
                        ${cert.tags && cert.tags.length > 3 ? `<span class="text-[10px] px-1 text-gray-400">+${cert.tags.length - 3}</span>` : ''}
                    </div>
                </div>
            `;
            certGrid.appendChild(certEl);
        });
    }
    
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    handleSearch();
});