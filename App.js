import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

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
        <Image
          source={require('./assets/foto.jpg')}
          style={{height: 220, width: 220}}
        />
        <Text style={styles.textoParagrafo}>Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Senac Pernambuco apaixonado pelo mundo do desenvolvimento de software e ansioso para contribuir ativamente em um ambiente profissional.</Text>
        <Text style={styles.textoParagrafo}>Possuo forte interesse no desenvolvimento web com foco especial no back-end e em soluções em nuvem, apesar de também me sentir confortavel no desenvolvimento fullstack. Minha formação sólida em linguagens e tecnologias, como C#, Java, React e Docker, me permitiu adquirir experiência prática no desenvolvimento de aplicações web baseadas em microserviços. Desde a concepção do sistema até a implantação na nuvem, estive envolvido em todas as etapas do processo.</Text>
        <Text style={styles.textoParagrafo}>Além do meu compromisso acadêmico, mantenho ativa a minha busca por aprendizado e crescimento. Contribuir para projetos open-source e me envolver em iniciativas de extensão tecnológica são maneiras pelas quais continuo a aprimorar minhas habilidades e a oferecer valor à comunidade de desenvolvedores.</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function Formacao() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <View>
          <Text style={styles.textoParagrafo}>Técnologo em Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.textoParagrafo}>Faculdade Senac Pernambuco</Text>
          <Text style={styles.textoParagrafo}>Inicio: 2022  Previsão de Conclusão: 2024</Text>
        </View>
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
        <Text style={styles.textoParagrafo}>Aplicativo android que substitui o dinheiro do jogo Banco Imobiliario permitindo que o jogador
use um código QR ou sua cor no jogo para se identificar, substituindo o dinheiro do jogo. Construı́do com Kotlin,
Jetpack Compose e o kit de Machine Learning do Google.</Text>
      </ContainerFrente>
    </ContainerFundo>
  )
}

function MatchInk() {
  return (
    <ContainerFundo>
      <ContainerFrente>
        <Text style={styles.textoParagrafo}>Aplicação web que conecta tatuadores e clientes. Participei do desenvolvimento back-end criando CRUD
para cadastro de usuários e estúdios de tatuagem usando Spring Boot e MongoDB. Ajudei meus colegas na criação
do front-end em Next.JS por meio de revisão de código.</Text>
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
