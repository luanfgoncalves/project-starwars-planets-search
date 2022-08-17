Este arquivo contém todo tipo de auxilo ao desenvolvimento deste projeto.

-- Repositórios remotos --

  https://github.com/tryber/sd-022-b-project-starwars-planets-search
  https://github.com/tryber/sd-022-b-project-starwars-planets-search/pull/?? 

-- Linter --

  npm run lint
  npm run lint:styles
  
-- Cypress --

  npm run cy
  npm run cy:open
  
-- Cobertura de testes --

  npm run test-coverage
  npm run test-coverage -- --collectCoverageFrom=src/pages/Login.js
  
-- Comandos Git --

  git branch  (mostra as branch no repo local)
  git checkout -b nome-da-branch
  git status (mostra os commits no stage)
  git add .  (adiciona todos os arquivos ao stage)
  git commit -m ''
  git commit -am '' (realiza o add . e commit)
  git reset HEAD~ (desfaz o ultimo commit local)
  git reset --hard origin/nome-da-branch

  git push -u origin nome-da-branch-mãe
  git push
  git pull
  git branch -d nome-da-branch (exclui a branch local)
  git merge nome-da-branch-filha (faz o merge da mãe com a branch filha)
 
-- Padronização de commits --

  Build: Alterações do sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
  Docs: Inclusão ou alteração somente de arquivos de documentação.
  Feat: Adições de novas funcionalidades ou de quaisquer outras novas implantações ao código
  Fix: Tratamento de correções de bugs.
  Refactor: Quaisquer mudanças no código que não alterem a funcionalidade final da tarefa impactada.
  Perf: Alteração de código que melhora o desempenho.
  Style: Formatações na apresentação ou estilo do código que não afetam o significado do código.
  Test: Inclusão de testes ausentes ou corrigindo testes existentes nos processos TDD.
  Chore: Mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção
  Env: Modificações ou adições em arquivos de configuração em processos e métodos de integração contínua
  Ci: Mudanças nas configurações de arquivos e scripts referentes a integração continua.
  Improvement: Melhoras que não adicionam recursos nem consertam bugs.

-- React Snippet --
  
  rce  (cria um componente de classe com export defaul ao final)
  rcep  (cria um componente de classe com props com export default ao final)
  desc  (cria o describe a um teste)
  test  (cria um test a um teste)

  imr→  (import React from 'react')
  imrd→  (import ReactDOM from 'react-dom')

-- Convenção de nomeação de diretórios --

/wireframes  (imagens e referencias para desenvolvimento do produto)
/mocks  (mocks de funções utilizados no testes)
/tests  (testes da aplicação)
/src  (Arquivos funcionais do projeto)
   ./pages  (paginas a serem renderizadas)
   ./services  (funções externas que serão utilizadas, por exemplo chamadas de API)
   ./components  (componentes que seram renderizados no App)
              ./subcomponents  (componentes que seram renderizados dentro de outros componentes)
   ./style  (arquivos de css)
   ./imgs  (arquivos de imagens utilizados na aplicação)
   
