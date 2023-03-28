# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

  ## Persona 1

  <p>
    Ariel tem dívidas acumuladas, e uma de suas principais metas é quitar essas dívidas e se livrar das preocupações financeiras associadas a elas. Ariel pode ter como objetivo construir uma estabilidade financeira para si mesmo, uma aposentadoria, criando uma reserva de emergência, estabelecendo um orçamento e economizando regularmente. Ela pode ter sonhos e projetos que requerem recursos financeiros, como viajar, comprar uma casa ou um carro, e ele pode estar determinado a trabalhar para tornar esses sonhos realidade. Ariel está sentindo a pressão da sociedade para alcançar certos marcos financeiros, como ter uma família, ter um carro ou uma casa própria, o que pode dificultar seu planejamento financeiro e gerar mais estresse e preocupação.
    Ela tem dificuldades para manter o controle financeiro e ceder a impulsos de compra ou gastos desnecessários, o que pode afetar sua capacidade de alcançar suas metas financeiras. Ela é curiosa e tem interesse em aprender mais sobre finanças pessoais e investimentos para alcançar seus objetivos. Ariel está disposta a enfrentar desafios e a trabalhar duro para alcançar suas metas financeiras, mesmo que isso signifique fazer sacrifícios no curto prazo.
  </p>

  ![Persona 1](/docs/img/personas/1.png "Persona 1")

  ## Persona 2

  <p>
    Lucas tem dificuldades em gerenciar suas despesas e precisa de ajuda para se organizar e criar um orçamento. Ele tem algumas dívidas do passado que quer quitar para melhorar sua situação financeira e ter acesso a crédito no futuro. Ele está determinado a alcançar a independência financeira e não depender mais dos pais ou de terceiros para seus gastos.
    Embora tenha alguma familiaridade com o assunto, Lucas reconhece que precisa de mais conhecimento para gerenciar suas finanças de forma mais eficiente. Ele tem um objetivo de longo prazo de comprar um imóvel e precisa de ajuda para se preparar financeiramente e economizar para alcançar essa meta.
    Lucas sente-se sobrecarregado ao tentar criar um orçamento ou acompanhar seus gastos e pode não saber por onde começar. As dívidas é uma fonte de ansiedade e estresse, e o frusta por não ter uma solução clara para esse problema. Ele tem metas claras e está disposto a trabalhar duro para alcançá-las. Pensar em não conseguir o deixa preocupado. Lucas está disposta a utilizar tecnologia para gerenciar suas finanças e pode estar interessada em soluções digitais que facilitem esse processo.
  </p>

  ![Persona 2](/docs/img/personas/2.png "Persona 2")

  ## Persona 3

  <p>
    Carolina tem conhecimento intermediário em finanças pessoais, já que estudou algumas disciplinas relacionadas na faculdade e tem o hábito de ler sobre o assunto em blogs e sites especializados. É muito familiarizada com tecnologia e usa seu smartphone e laptop com frequência, tanto para fins pessoais quanto profissionais. Carolina gosta de ler, praticar yoga e viajar. Ela também é uma entusiasta da gastronomia e gosta de experimentar novos restaurantes e receitas. Carolina tem como meta crescer em sua carreira na área de Recursos Humanos, buscando se especializar e se destacar em sua área de atuação. Carolina tem o objetivo de comprar um imóvel para sua mãe, mas sabe que precisa organizar suas finanças e poupar dinheiro para conseguir realizar esse sonho. Ela também deseja fazer uma viagem internacional de lazer e conhecer outras culturas, mas sabe que precisa poupar dinheiro e planejar essa viagem com antecedência para que seja possível realizá-la.
  </p>

  ![Persona 3](/docs/img/personas/3.png "Persona 3")

  
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
