Customer Management System

Este é um projeto de sistema de gerenciamento de clientes desenvolvido com Node.js e PostgreSQL. O sistema permite criar, visualizar e otimizar rotas de atendimento aos clientes cadastrados.

Funcionalidades Principais:

Cadastro de Clientes: Permite adicionar novos clientes ao sistema, incluindo informações como nome, email, telefone e coordenadas geográficas.
Visualização de Clientes: Lista todos os clientes cadastrados no sistema e possibilita filtrá-los com base em diversos critérios, como nome, email, telefone e coordenadas geográficas.
Otimização de Rotas: Calcula a rota mais eficiente para atender todos os clientes cadastrados, minimizando a distância percorrida.
Desacoplamento de Rotas e Inversão de Dependência:
As rotas da API foram desacopladas dos detalhes de implementação dos controladores e serviços, seguindo o princípio de inversão de dependência. Isso permite uma maior flexibilidade e facilidade de manutenção do código, uma vez que as camadas da aplicação estão separadas e cada uma tem responsabilidades bem definidas.

Principais Arquivos e Diretórios:

/src/routes: Contém as definições das rotas da API, separadas por funcionalidade.
/src/controllers: Implementações dos controladores que lidam com as requisições HTTP, sem conter lógica de negócios.
/src/services: Implementações dos casos de uso da aplicação, que encapsulam a lógica de negócios.
/src/repositories: Implementações dos repositórios de dados que abstraem o acesso ao banco de dados.
Executando o Projeto:


Dockerização da Aplicação:
Este projeto foi dockerizado para facilitar a sua execução em diferentes ambientes de desenvolvimento e produção. Utilizando o Docker Compose, é possível configurar e executar rapidamente todos os serviços necessários para o funcionamento da aplicação, incluindo o banco de dados PostgreSQL e a API Node.js. Isso garante consistência e isolamento do ambiente, além de simplificar o processo de implantação em diferentes plataformas.

Certifique-se de ter o Docker instalado em seu ambiente.
Execute o comando docker-compose up na raiz do projeto para iniciar os containers do PostgreSQL e da API.
Acesse http://localhost:3000 para interagir com a API.
Tecnologias Utilizadas:

Node.js
Express.js
PostgreSQL
Docker
