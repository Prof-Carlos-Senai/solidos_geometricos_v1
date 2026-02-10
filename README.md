# 📏 Sistema de Cálculo de Sólidos Geométricos

Sistema web desenvolvido em JavaScript para calcular a área da base e o volume de sólidos geométricos (Cilindros e Cones), utilizando Programação Orientada a Objetos (POO) e Testes Unitários.

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6+):** Lógica e manipulação de DOM.
* **Jest:** Framework de testes unitários.
* **Babel:** Transpilação de código para compatibilidade de módulos.
* **HTML5/CSS3:** Interface e estilização.

## 📁 Estrutura do Projeto

```text
.
├── __tests__/           # Testes automatizados (Jest)
├── css/                 # Estilização (CSS)
├── models/              # Classes de lógica matemática (POO)
├── index.html           # Interface do usuário
├── index.js             # Integração entre Front-end e Classes
├── babel.config.cjs     # Configuração do Babel
├── jest.config.mjs      # Configuração do Jest para Módulos
└── package.json         # Dependências e scripts do projeto

```

### 🧪 Como rodar os Testes
Para garantir que as fórmulas matemáticas estão corretas (usando a precisão de toBeCloseTo), siga os passos:

1. Instale as dependências:
npm install

2. Execute os testes:
npm run test

### 📐 Fórmulas Aplicadas
Cilindro: 
    Área da Base: A = π . r² 
    Volume: V = A . h

Cone:
    Área da Base: A = π . r² 
    Volume: V = (1/3) . A . h

### 💻 Como executar o projeto
Como o projeto utiliza ES6 Modules, ele não deve ser aberto clicando diretamente no arquivo .html. Utilize a extensão Live Server no VS Code

### Desenvolvido por: Carlos Roberto da Silva Filho


