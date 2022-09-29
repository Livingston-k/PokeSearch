import React from "react"
import {View,StyleSheet,Imager} from "react-native"

var backGround = require('../assets/icons/loader.gif')
class PokeLoader extends React.Component{
    render(){
        return (
            <View>
               <Image style={styles.img} source={backGround}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  img: {
   width:400,
   height:400,
   justifyContent:'center',
   alignItems:'center'
  },
});

export default PokeLoader;