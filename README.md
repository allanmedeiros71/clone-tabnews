# clone-tabnews

Implementação do https://www.tabnews.com.br para o https://curso.dev
[Link do App na Vercel](https://allanmedeiros71.vercel.app/)

# Notas de Aula

## Ambiente

```
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

## Dia 3 - (Node.js, Next.js, React e React DOM)

### A fundação

```bash
git clone git@github.com:allanmedeiros71/clone-tabnews.git
node -v
docker -v
docker compose
nvm ls                          # Lista as versões disponíveis do nvm
nvm install lts/hydrogen        # Instala a versão hydrogen do nvm
nvm alias default lts/hydrogen  # Define a versão padrão do nvm
nvm --help
```

### A primeira parede

```bash
npm init
npm install next@13.1.6         # Instala a versão 13.1.6 do next
npm install react@18.2.0        # Instala a versão 18.2.0 do react
npm audit
# react-dom é o pacote que fornece métodos específicos para interagir
# com o DOM (Document Object Model) no navegador, sendo essencial para
# renderizar componentes React na web.
npm install react-dom@18.2.0    # Instala a versão 18.2.0 do react-dom
```

## Dia 5 - Git

```bash
git log             # mostra todos os commits
git log --stat      # mostra todos os commits com estatísticas
git log --oneline   # mostra todos os commits em uma linha
git status          # mostra o status do repositório
git add             # adiciona arquivos para o próximo commit
git commit          # cria um commit
git commit --amend  # altera o último commit
git diff            # mostra as diferenças entre as alterações
```

## Dia 6 - Git

```bash
git commit -m "mensagem"  # atalho para fazer novos commits.
git push                  # empurrar alterações locais para o origin.
git push --force          # empurrar de forma forçada alterações locais para o origin.
git push -f               # a forma comprimida do comando anterior.
git branch                # mostra as branches
```

## Dia 9

> Fazer `muito com pouco` e não `pouco com muito`... esse é um dos segredos que eu percebi quando o assunto é organização de tarefas.

- Nível 1: Ser lembrado individualmente
  Menor custo de produção (energia para registrar o que precisa ser feito) e menor tempo de aquecimento (quanto tempo demora pra se ver o que precisa ser feito).
- Nível 2: Ser lembrado em grupo
- Nível 3: Expandir conhecimento (Trello ou github)
- Nível 4: Gerar métricas

## Dia 10 - Configurar o Prettier

```bash
npm install --save-dev prettier # Instala o prettier
npm run lint:check              # Verifica se há erros de formatação
npm run lint:fix                # Corrige os erros de formatação
# Para instalar todos os pacotes do package.json (em um outro PC, por exemplo, ou após clonar o repositório)
npm install
```
