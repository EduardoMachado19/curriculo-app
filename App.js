import { Text, View, SafeAreaView, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#0077B5" />
        <Image source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
        }}
          style={styles.myImage}
        />
        <Text style={styles.myName}>Eduardo Machado</Text>
        <Text style={styles.myPosition}>Desenvolvedor de Software</Text>

        <Text style={styles.title}>Contato</Text>
        <View style={styles.separator} />

        <View style={styles.row}>
          <MaterialCommunityIcons name='email-outline' size={30} color='#0077B5' />
          <Text>machado.eduardo2001@gmail.com</Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name='phone-outline' size={30} color='#0077B5' />
          <Text>(47) 99781-9629 </Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name='linkedin' size={30} color='#0077B5' />
          <Text>linkedin@link</Text>
        </View>

        <Text style={[styles.title, { marginTop: 10 }]}>Resumo</Text>
        <View style={styles.separator} />

        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

        <Text style={[styles.title, { marginTop: 10 }]}>Experiência</Text>
        <View style={styles.separator} />

        <Text style={{ color: '#0077B5', fontSize: 16 }}>Desenvolvedor Junior</Text>
        <Text style={{ color: '#000000', fontSize: 14 }}>Empresa ABC</Text>
        <Text style={{ color: '#CCC', fontSize: 12 }}>Jan 2015 - 2020</Text>
        <Text> - Desenvolvi aplicativos usando React Native.</Text>
        <Text style={{ marginBottom: 10 }}> - Liderança da equipe de 5 desenvolvedores.</Text>

        <Text style={{ color: '#0077B5', fontSize: 16 }}>Desenvolvedor Sênior</Text>
        <Text style={{ color: '#000000', fontSize: 14 }}>Empresa XYZ</Text>
        <Text style={{ color: '#CCC', fontSize: 12 }}>Jan 2020 - 2024</Text>
        <Text> - Desenvolvi aplicativos usando React Native.</Text>
        <Text style={{ marginBottom: 10 }}> - Liderança da equipe de 5 desenvolvedores.</Text>
        
        <Text style={{ color: '#0077B5', fontSize: 16 }}>Desenvolvedor Pleno - FullStack</Text>
        <Text style={{ color: '#000000', fontSize: 14 }}>Empresa ABC</Text>
        <Text style={{ color: '#CCC', fontSize: 12 }}>Jan 2024 - Presente</Text>
        <Text> - Desenvolvi aplicativos usando React Native.</Text>
        <Text> - Liderança da equipe de 5 desenvolvedores.</Text>

        <Text style={[styles.title, { marginTop: 10 }]}>Educação</Text>
        <View style={styles.separator} />
        <Text style={{ color: '#0077B5', fontSize: 16 }}>Bacharel em Ciência da Computação</Text>
        <Text>Universidade Federal</Text>
        <Text style={{ color: '#CCC', fontSize: 12 }}>2013-2017</Text>

        <Text style={[styles.title, { marginTop: 10 }]}>Habilidades</Text>
        <View style={styles.separator} />

        <View style={styles.list}>

          <View>
            <Text style={styles.badge}>HTML</Text>
          </View>

          <View>
            <Text style={styles.badge}>CSS</Text>
          </View>

          <View>
            <Text style={styles.badge}>JavaScript</Text>
          </View>

          <View>
            <Text style={styles.badge}>Python</Text>
          </View>

          <View>
            <Text style={styles.badge}>Ruby</Text>
          </View>

          <View>
            <Text style={styles.badge}>MySQL</Text>
          </View>

          <View>
            <Text style={styles.badge}>Docker</Text>
          </View>

          <View>
            <Text style={styles.badge}>TypeScript</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  myImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 5
  },
  container: {
    padding: 20,
    flex: 1
  },
  myName: {
    color: '#0077B5',
    fontSize: 24,
    textAlign: 'center'
  },
  myPosition: {
    color: '#CCC',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20
  },
  title: {
    color: '#0077B5',
    fontSize: 18,
  },
  separator: {
    backgroundColor: '#0077B5',
    width: '100%',
    height: 1,
    marginVertical: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  list: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap'

  },
  badge: {
    backgroundColor: '#0077B5',
    padding: 5,
    borderRadius: 5,
    opacity: 0.7
  },
})