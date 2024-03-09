# Sistema de Gerenciamento de Clientes

Este é um projeto de sistema de gerenciamento de clientes desenvolvido com Node.js e PostgreSQL. A aplicação permite criar, visualizar e otimizar rotas de atendimento aos clientes cadastrados.

## Funcionalidades Principais

- **Cadastro de Clientes:** Permite adicionar novos clientes ao sistema, incluindo informações como nome, email, telefone e coordenadas geográficas.
  
- **Visualização de Clientes:** Lista todos os clientes cadastrados no sistema e possibilita filtrá-los com base em diversos critérios, como nome, email, telefone e coordenadas geográficas.
  
- **Otimização de Rotas:** Calcula a rota mais eficiente para atender todos os clientes cadastrados, minimizando a distância percorrida.

## Desacoplamento de Rotas e Inversão de Dependência

As rotas da API foram desacopladas dos detalhes de implementação dos controladores e serviços, seguindo o princípio de inversão de dependência. Isso permite uma maior flexibilidade e facilidade de manutenção do código, uma vez que as camadas da aplicação estão separadas e cada uma tem responsabilidades bem definidas.

## Dockerização da Aplicação

Este projeto foi dockerizado para facilitar a sua execução em diferentes ambientes de desenvolvimento e produção. Utilizando o Docker Compose, é possível configurar e executar rapidamente todos os serviços necessários para o funcionamento da aplicação, incluindo o banco de dados PostgreSQL e a API Node.js. Isso garante consistência e isolamento do ambiente, além de simplificar o processo de implantação em diferentes plataformas.

## Executando o Projeto

1. Certifique-se de ter o Docker instalado em seu ambiente.
2. Execute o comando `docker-compose up` na raiz do projeto para iniciar os containers do PostgreSQL e da API.
3. Acesse http://localhost:3000 para interagir com a API.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Docker

---

Este projeto foi desenvolvido com foco em praticar boas práticas de desenvolvimento de software, como desacoplamento de código, inversão de dependência e dockerização da aplicação. Se houver algum feedback ou sugestão para melhorias, sinta-se à vontade para entrar em contato.
