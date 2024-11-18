# Biblioteca Pública - Gerenciamento de Livros

Este é um protótipo de aplicativo de gerenciamento de uma **Biblioteca Pública**. O app permite o cadastro de livros, organização das informações dos livros e acompanhamento de seu status, como se está disponível ou reservado, além de informações sobre a data de reserva e a data de devolução. 

### Funcionalidades
1. **Cadastro de Livros**: É possível cadastrar livros fornecendo o título, autor e editora.
2. **Exibição da Lista de Livros**: Todos os livros cadastrados são exibidos em uma lista.
3. **Remoção de Livros**: Os livros cadastrados podem ser removidos.
4. **Ordenação Alfabética**: Os livros são organizados em ordem alfabética, para fácil visualização.

### Tecnologias Utilizadas
- **React Native**: Framework utilizado para o desenvolvimento do aplicativo.
- **Expo**: Plataforma que facilita o desenvolvimento de aplicativos móveis usando React Native.
- **React Navigation**: Biblioteca para navegação entre as telas do aplicativo.
- **AsyncStorage**: Armazenamento local para salvar os dados dos livros de forma persistente.
- **TypeScript**: Linguagem de programação com tipagem estática que melhora a robustez e a manutenção do código.

### Como Rodar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/biblioteca-app.git
   ```

2. **Instale as Dependências**:
   No diretório do projeto, execute:
   ```bash
   npm install
   ```

3. **Executando o Projeto**:
   Para rodar o aplicativo, execute:
   ```bash
   npx react-native run-android   # Para Android
   npx react-native run-ios       # Para iOS (necessário Xcode)
   ```

### Funcionalidade da Tela
#### **Tela Principal (Home Screen)**
- Exibe uma lista com todos os livros cadastrados, organizados em ordem alfabética.
- Um botão para adicionar novos livros.
  
#### **Tela de Adicionar Livro (AddBookScreen)**
- Formulários de entrada para título, autor e editora do livro.
- Ao pressionar o botão "Adicionar", os livros são salvos localmente e exibidos na lista.
  
#### **Tela de Remoção de Livro**
- Um botão de remoção ao lado de cada livro listado permite que o livro seja removido da lista e do armazenamento local.

### Estrutura do Projeto
- **src/screens**: Contém as telas do aplicativo, como a tela principal (`HomeScreen`), a tela de adicionar livro (`AddBookScreen`), e a tela de detalhes do livro (`BookDetailScreen`).
- **src/components**: Componentes reutilizáveis, se necessário, podem ser colocados aqui.
- **src/styles**: Arquivo de estilos globais, onde os estilos do aplicativo podem ser centralizados.
  
### Exemplo de Uso
1. **Adicionar um livro**: Vá para a tela principal, clique em "Adicionar Livro", insira o título, autor e editora, e clique em "Adicionar". O livro será adicionado à lista.
2. **Visualizar detalhes do livro**: Clique em um livro da lista para ver mais detalhes e editar informações como status, nome do responsável e datas de reserva/devolução.
3. **Remover livro**: Para remover um livro, clique no botão "Remover" ao lado do título do livro.

### Melhorias Futuras
- **Tela de Login/Autenticação**: Permitir que diferentes usuários acessem o sistema de gerenciamento de livros com permissões diferentes.
- **Banco de Dados Remoto**: Substituir o `AsyncStorage` por um banco de dados remoto, permitindo maior escalabilidade.
- **Tela de Detalhes do Livro** Exibe os detalhes de cada livro, e permite editar as informações de status do livro (Disponível ou Reservado), nome do responsável, data de reserva e data de devolução.
- **Filtros e Busca**: Adicionar filtros por disponibilidade, autor ou título, e uma barra de pesquisa para facilitar a busca de livros.
- **Funcionalidade de Empréstimos**: Adicionar um sistema para gerenciar empréstimos de livros.

### Contribuindo
1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature-nome-da-sua-feature`).
3. Faça as alterações e envie um pull request.

### Licença
Este projeto é de código aberto sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.