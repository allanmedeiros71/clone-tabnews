# clone-tabnews
Implementação do https://www.tabnews.com.br para o https://curso.dev

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
