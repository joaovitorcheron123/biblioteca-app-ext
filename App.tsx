import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import AddBookScreen from './src/screens/AddBookScreen';  // A tela de adicionar livro

// Crie o tipo para as rotas
type RootStackParamList = {
  Home: undefined;
  Cadastrar: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Tela inicial
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Biblioteca Pública Municipal Arno Viuniski</Text>
      
      {/* Imagem ou logo abaixo do título */}
      <Image
        source={require('./assets/icone-educacao.png')} // Caminho da imagem (ajuste conforme a estrutura do seu projeto)
        style={styles.logo}
      />

      {/* Texto descritivo abaixo da imagem */}
      <Text style={styles.description}>
        Encontre uma vasta coleção de livros e registre os que você deseja adicionar à nossa biblioteca digital.
      </Text>

      <Button
        title="Adicionar Livro"
        onPress={() => navigation.navigate('Cadastrar')} // Navega para a tela Cadastrar
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastrar" component={AddBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Distância entre o título e a descrição
    textAlign: 'center', // Centraliza o texto
  },
  logo: {
    width: 150,  // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    marginBottom: 20, // Distância entre a imagem e o texto descritivo
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20, // Distância entre a descrição e o botão
  },
});
