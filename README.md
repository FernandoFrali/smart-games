# Smart Games

Uma loja de jogos online criada na ordem: Figma ➛ Back-end ➛ Front-end.

Loja responsiva e de fácil uso, com os dados dos jogos sendo recebidos via Excel e convertidos para o banco de dados (MySQL), onde encontra-se uma tabela para os que foram comprados e outra para os disponíveis.

**Link com o Figma do projeto ao final do Readme!**

## Pré-requisitos

Como rodar o projeto:

```
- Instalar o Node.js.
- Clonar o repositorio usando git clone
- Ir até a pasta raiz do projeto
- Executar npm install
- Na pasta back-end/database, abra o arquivo database.js e altere os dados para o seu banco de dados local (MySQL)
- Rode o servidor back-end (nodemon index.js ou node index.js)
- OBS: Certifique-se de que não há nomes em conflito tanto no seu banco de dados criado, quanto na sua tabela
- Para rodar a versão web, entre na pasta "front-end/smartgames" e digite o comando: npm run dev;
- Para rodar a versão mobile, entre na pasta "front-end/smartgamesmobile" e digite o comando: yarn start;
- Além disso, caso esteja na versão mobile, certifique-se de estar na mesma rede wifi que o host (o seu aparelho que está rodando o back-end). Ou você pode optar por usar o navegador para rodar a versão mobile, apertando a tecla "w" após ter iniciado o servidor!

```

## Ferramentas usadas

#### **Front-end**

- [TypeScript] Linguagem de programação
- [React] SPA
- [@react-google-maps/api] Pacote para gerenciar API do Google Maps
- [Vite] Tecnologia para criar ambiente de desenvolvimento

#### **Back-end**

- [Express] Framework para construção da API
- [xlsx] Pacote para ler e converter arquivo excel
- [Sequelize] ORM para o banco de dados
- [DBeaver] Ferramenta para administrar o banco de dados

#### **Link para o Figma do projeto**

https://www.figma.com/file/qGQ1Te6E3LXc5ggikAXJYO/Smart-Games---Design?node-id=0%3A1&t=tLcVFAeqDpekhh0W-1

#### **Meus outros projetos**

https://linktr.ee/fernandofrali

### Feito por

- **Fernando Oliveira**
