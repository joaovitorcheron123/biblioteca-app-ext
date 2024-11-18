import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack'; // Importando o tipo de navegação

// Defina o tipo para o parâmetro do Stack Navigator
type RootStackParamList = {
  AddBook: undefined;
  BookList: undefined;
};

type AddBookScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddBook'>;

interface Props {
  navigation: AddBookScreenNavigationProp;
}

interface Book {
  title: string;
  author: string;
  publisher: string;  // Campo para a editora
}

const AddBookScreen: React.FC<Props> = ({ navigation }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookPublisher, setBookPublisher] = useState('');  // Estado para a editora
  const [books, setBooks] = useState<Book[]>([]);

  // Carregar livros ao iniciar o componente
  useEffect(() => {
    loadBooks();
  }, []);

  // Função para salvar livros no AsyncStorage
  const saveBooks = async (newBooks: Book[]) => {
    try {
      // Ordenando os livros por título (ordem alfabética)
      const sortedBooks = newBooks.sort((a, b) => a.title.localeCompare(b.title));
      await AsyncStorage.setItem('@books', JSON.stringify(sortedBooks));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os livros.');
    }
  };

  // Função para carregar livros do AsyncStorage
  const loadBooks = async () => {
    try {
      const savedBooks = await AsyncStorage.getItem('@books');
      if (savedBooks) {
        const booksArray = JSON.parse(savedBooks);
        // Ordenando os livros ao carregar
        const sortedBooks = booksArray.sort((a: Book, b: Book) => a.title.localeCompare(b.title));
        setBooks(sortedBooks);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os livros.');
    }
  };

  // Adicionar um novo livro
  const addBook = () => {
    if (bookTitle.trim() === '' || bookAuthor.trim() === '' || bookPublisher.trim() === '') {
      Alert.alert('Erro', 'Todos os campos (título, autor e editora) devem ser preenchidos.');
      return;
    }

    const newBook: Book = {
      title: bookTitle,
      author: bookAuthor,
      publisher: bookPublisher,  // Adicionando a editora
    };

    const newBooks = [...books, newBook];
    saveBooks(newBooks);

    // Atualizar a lista de livros
    setBookTitle('');
    setBookAuthor('');
    setBookPublisher('');  // Limpando o campo de editora
  };

  // Remover um livro da lista
  const removeBook = (bookToRemove: Book) => {
    const updatedBooks = books.filter(book => book !== bookToRemove);
    saveBooks(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Livro ao Registro</Text>

      {/* Texto descritivo abaixo do título */}
      <Text style={styles.description}>Digite o título, autor e editora do livro para adicioná-lo à biblioteca.</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título do livro"
        value={bookTitle}
        onChangeText={setBookTitle}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do autor"
        value={bookAuthor}
        onChangeText={setBookAuthor}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da editora"
        value={bookPublisher}
        onChangeText={setBookPublisher}
      />

      <Button title="Adicionar" onPress={addBook} />

      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItemContainer}>
            <Text style={styles.bookItem}>
              {item.title} - {item.author} - {item.publisher}
            </Text>
            <TouchableOpacity onPress={() => removeBook(item)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20, // Diminuído o tamanho da fonte do título
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    bookItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    bookItem: {
      fontSize: 15,
      flex: 1, // Faz com que o título do livro ocupe o espaço restante
    },
    removeButton: {
      backgroundColor: '#f44336', // Cor de fundo vermelha para o botão
      padding: 5,
      borderRadius: 5,
    },
    removeButtonText: {
      color: '#fff',
      fontSize: 14,
    },
  });  

export default AddBookScreen;
