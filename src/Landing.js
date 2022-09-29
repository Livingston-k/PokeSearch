import React from "react";
import {
  NativeBaseProvider,
  Button
} from "native-base";
import {ImageBackground, Platform,View,StyleSheet,Image,Text} from "react-native";

var backGround = require('../assets/icons/landing.jpeg')
class Landing extends React.Component{
  render(){
    return (
      <NativeBaseProvider>
    <View style={styles.container}>
   <ImageBackground style={styles.image} source={backGround}  resizeMode="cover">
<View style={styles.viewText}>
 <Text style={styles.titleStyle}>Welcome To Pokesearch</Text>
 <Button
 block={true}
 style={styles.buttonStyle}
 onPress={()=>{this.props.switchScreen('search')}}
 ><Text style={styles.buttonTextStyle}>Start Serching</Text></Button>
</View>
</ImageBackground>
    </View>
      </NativeBaseProvider>
     
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS == 'android'?24:40
  },
   image: {
    flex: 1,
    justifyContent: "center"
  },
  viewText:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',

  },
  titleStyle:{
    fontSize:30,
    color:'blue',
    alignItems:'center'
  },
  buttonStyle:{
margin:10,
  },
buttonTextStyle:{
  color:'white'
}
});
export default Landing;