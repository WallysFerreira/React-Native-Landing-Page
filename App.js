import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.containerFundo}>
      <View style={styles.containerFrente}>
        <Text style={styles.textoTitulo}>Wallys Ferreira</Text>
        <Pressable
          title="Sobre"
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text>Sobre</Text>
        </Pressable>
        <Pressable
          title="Formação"
          onPress={() => navigation.navigate('Formacao')}
        >
          <Text>Formação</Text>
        </Pressable>
        <Pressable
          title="Projetos"
          onPress={() => navigation.navigate('Projetos')}
        >
          <Text>Projetos</Text>
        </Pressable>
        <Pressable
          title="Habilidades"
          onPress={() => navigation.navigate('Habilidades')}
        >
          <Text>Habilidades</Text>
        </Pressable>
      </View>
    </View>
  )
}

function Sobre() {
  return (
    <View>
      <Text>Sobre</Text>
    </View>
  )
}

function Formacao() {
  return (
    <View>
      <Text>Formação</Text>
    </View>
  )
}

function Projetos() {
  return (
    <View>
      <Text>Projetos</Text>
    </View>
  )
}

function Habilidades() {
  return (
    <View>
      <Text>Habilidades</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Sobre" component={Sobre}></Stack.Screen>
        <Stack.Screen name="Formacao" component={Formacao}></Stack.Screen>
        <Stack.Screen name="Projetos" component={Projetos}></Stack.Screen>
        <Stack.Screen name="Habilidades" component={Habilidades}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerFundo: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerFrente: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: '80%',
    backgroundColor: '#063D9D',
  },

  textoTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
  }
});
