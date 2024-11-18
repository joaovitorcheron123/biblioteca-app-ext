import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BookListScreen() {
  const [books, setBooks] = useState<string[]>([]);

  // Carregar livros ao iniciar a tela
  useEffect(() => {
    loadBooks();
  }, []);

  // Função para carregar livros do AsyncStorage
  const loadBooks = async () => {
    try {
      const savedBooks = await AsyncStorage.getItem('@books');
      if (savedBooks) {
        setBooks(JSON.parse(savedBooks)); // Atualiza o estado com os livros carregados
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os livros.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>

      {/* Exibir livros ou mensagem caso não haja nenhum */}
      {books.length > 0 ? (
        <FlatList
          data={books}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.bookItem}>{item}</Text>}
        />
      ) : (
        <Text style={styles.noBooksText}>Nenhum livro encontrado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  noBooksText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});
