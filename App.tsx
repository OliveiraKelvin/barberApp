import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerLocal}>
          <Image source={require('./assets/face.png')} style={styles.imgLocal}/>
          <Image source={require('./assets/insta.png')} style={styles.imgLocal}/>
          <Text style={styles.textArea}>Agende seu horário</Text>
        </View>

        <View>
          <Image source={require('./assets/barber.png')} style={styles.logoArea}/>
          <Text style={styles.textBarber}>
            ESTILO É UM REFLEXO DE SUA ATITUDE E PERSONALIDE
          </Text>
          <Text style={styles.textFun}>Horario de funcionamento: 09:00 às 19:00</Text>
        </View> 

        <View>
          <Image source={require('./assets/images.png')} style={styles.imageCenter}/>
          <Text style={styles.textSob}>SOBRE</Text>
          <Text style={styles.textLoren}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arquiteto beatae vitae dicta sunt explicabo.</Text>
        </View>

        <View style={styles.serviceLocal}>
          <Text style={styles.textServ}>SERVIÇOS</Text>
          <Text style={styles.textAbout}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arquiteto beatae vitae dicta sunt explicabo.</Text>
        </View>

        <View >
            <Image source={require('./assets/img1.png')}style={styles.imgCorte}/>
            <Image source={require('./assets/img2.png')}style={styles.imgCorte}/>
            <Image source={require('./assets/img3.png')}style={styles.imgCorte}/>
        </View>

        <View style={styles.areaCon}>
          <Text style={styles.textCon}>VENHA CONHECER</Text>
          <Image source={require('./assets/map.png')} style={styles.imgCon}/>
        </View>

        <View>
          <Image source={require('./assets/barber.png')} style={styles.footer}/>
          <Text style={styles.textFooter}>Dev Barbearia | Todos os direitos reservados</Text>
          <Image source={require('./assets/wpp.png')} style={styles.imgWpp}/> 
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    backgroundColor: '#0c2135',
  },
  headerLocal: {
    padding: 25,
    flexDirection: 'row',
    gap: 12
  },
  textArea: {
    color: '#fefbff',
    fontSize: 15,
    alignSelf: 'flex-end',
    marginLeft: 140,
    borderWidth: 1,
    borderColor: '#fefbff',
    padding: 5
  },
  imgLocal: {
    width: 22,
    height: 22,
  },

  logoArea: {
   alignSelf: 'center',
   marginTop: 20,
   padding: 15,
   width: 90,
   height: 100
  },

  textBarber: {
    color: '#fefbff',
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  textFun: {
    color: '#fefbff',
    fontSize: 12,
    textAlign: 'center'
  },

  imageCenter: {
    width: 300,
    height: 250,
    marginTop: 30,
    alignSelf: 'center'
  },

  textLoren: {
    color: '#fefbff',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 18
  },

  textSob: {
    color: '#fefbff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    marginBottom: 10
  }, 

  serviceLocal: {
    backgroundColor: '#FFF',
    height: 200
  },
  
  textServ: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  },

  textAbout:{
    color: '#06090c',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10
  },

  imgCorte: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  areaCon: {
    backgroundColor: '#fff'
  },

  textCon: {
    color: '#06090c',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },

  imgCon: {
    height: 180,
    width: 300,
    alignSelf: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'red',
  },

  footer: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 10
  },

  textFooter: {
    color: '#fefbff',
    fontSize: 12,
    alignSelf: 'center',
    padding: 5,
  },

  imgWpp: {
    width: 50,
    height: 50,
    paddingTop: 10,
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 5,
    alignSelf: 'center'
  }

});
