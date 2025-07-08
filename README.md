PASSO A PASSO PARA TESTAR O SITE 






# Projeto Ford Dashboard

Este projeto contém a API em Node.js e o frontend em Angular para o dashboard Ford.

---

## Como rodar o projeto após clonar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências
O projeto tem 2 partes principais:

API (Node.js)

Frontend (Angular)

Instale as dependências de cada uma.

Para a API
cd api_ford
npm install


Para o frontend Angular
cd ford-dashboard
npm install



3. Configurar variáveis de ambiente
Crie um arquivo .env na pasta da API (api_ford) com as variáveis necessárias, por exemplo:

PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASS=senha
JWT_SECRET=seu_segredo

(O arquivo .env não está no repositório por segurança.)

4. Rodar o projeto
Rodar a API
cd api_ford
npm start


Rodar o frontend Angular
Em outro terminal:
cd ford-dashboard
ng serve
O frontend estará disponível em http://localhost:4200.

5. Build para produção (opcional)
cd ford-dashboard
ng build --prod



6. Problemas comuns
Se der erro de dependência, rode npm install novamente.

Verifique se a API está rodando antes de abrir o frontend.
