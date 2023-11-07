import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#173265',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
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
      marginTop:100,
    },
    cima:{
      width:'100%',
      height: '20%',
      alignItems:'center',
      justifyContent:'center',
    },
    textoTitulo:{
      fontSize:25,
    },
    meio:{
      width:'100%',
      height: '60%',
      alignItems:'flex-start',
      justifyContent:'space-around',
      flexDirection:'row',
    },
    viewNomeInput:{
      alignItems:'center',
      justifyContent:'center',
      gap:38,
      width:'25%',
      height:'100%',
      marginTop:10,
    },
    viewInput:{
      alignItems:'center',
      justifyContent:'center',
      width:'75%',
      height:'100%',
    },
    input:{
      width:'80%',
      height: '10%',
      textAlign:'center',
      borderBottomWidth:0.5,
      margin:5,
    },
    baixo:{
      width:'100%',
      height: '20%',
      alignItems:'center',
      justifyContent:'space-evenly',
      flexDirection:'column',
    },
    botaoAdd:{
      height:'25%',
      width:'30%',
      borderWidth:1,
      borderRadius:10,
      backgroundColor:'#f5f5dc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoTrc:{
      height:'25%',
      width:'30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer:{
      width:'100%',
      height:'15%',
    },
    textoH1:{
      fontSize:20,
    },
  });