import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ffa500',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    viewTitulo: {
      width:'40%',
      height:'10%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewFeed: {
      width:'90%',
      height:'90%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    viewLista:{
      width:'65%',
      height:'15%',
      borderColor:'black',
      borderWidth:1,
      justifyContent:'space-between',
      flexDirection:'column',
      padding:5,
      borderRadius:5,

    },
    viewCimaLista: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding:5,
      
    },
    viewBaixoLista: {
      justifyContent:'space-around',
      flexDirection:'row',
      padding:5,
    },
    body:{
      width:'85%',
      height:'80%',
      backgroundColor:'white',
      borderColor:'black',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      marginTop:50,


    },
    textTitle:{
      fontSize:20,
  
    },
    
  });