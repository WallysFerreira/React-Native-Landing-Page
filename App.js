import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const ContainerFundo = props => {
  return (
    <View style={styles.containerFundo}>
      {props.children}
    </View>
  )
}

const ContainerFrente = props => {
  return (
    <View style={styles.containerFrente}>
      {props.children}
    </View>
  )
}

// Telas principais
function Home({ navigation }) {
  return (
    <ContainerFundo>
      <ContainerFrente>
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
      </ContainerFrente>
    </ContainerFundo>
  )
}

function Sobre() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text>Sobre</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function Formacao() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text>Formação</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function Projetos({ navigation }) {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Pressable
          title="Desfile Tech"
          onPress={() => navigation.navigate('DesfileTech')}
        >
          <Text>Desfile Tech Rec'n'Play</Text>
        </Pressable>

        <Pressable
          title="Banco Imobiliario"
          onPress={() => navigation.navigate('BancoImobiliario')}
        >
          <Text>Banco Imobiliario</Text>
        </Pressable>

        <Pressable
          title="MatchInk"
          onPress={() => navigation.navigate('MatchInk')}
        >
          <Text>MatchInk</Text>
        </Pressable>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function Habilidades() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text>Habilidades</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

// Telas dos projetos
function DesfileTech() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text style={styles.textoParagrafo}>Projeto que integra tecnologia e moda, usando Arduino para construir adereços para roupas e decorações
para passarela que permitem que os espectadores interajam com o desfile e que as modelos vivam uma experiência
diferenciada. Usado no festival Rec’n’Play 2022 e 2023</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function BancoImobiliario() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text style={styles.textoParagrafo}>Banco Imobiliario</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function MatchInk() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text style={styles.textoParagrafo}>MatchInk</Text>
      </ContainerFrente>
    </ContainerFundo>
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

        <Stack.Screen name="DesfileTech" component={DesfileTech}></Stack.Screen>
        <Stack.Screen name="BancoImobiliario" component={BancoImobiliario}></Stack.Screen>
        <Stack.Screen name="MatchInk" component={MatchInk}></Stack.Screen>
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
  },

  textoParagrafo: {
    color: 'white',
  }
});
