import React from "react";
import {
  NativeBaseProvider,
  Button
} from "native-base";
import { Platform,View,StyleSheet} from "react-native";
import Landing from './src/Landing'
import Search from './src/Search'
var backGround = require('./assets/icons/landing.jpeg')
class App extends React.Component{
  state = {
    currentScreen:'landing'
  }
  switchScreen = (screen)=>{
   this.setState({currentScreen:screen})
  }
  renderScreen = ()=>{
    if(this.state.currentScreen == 'landing'){
      return(
        <Landing switchScreen = {this.switchScreen}/>
      )
    }else if(this.state.currentScreen == 'search'){
  return (
       <Search/>
  )
    }
  }
  render(){
    return (
      <NativeBaseProvider>
    <View style={styles.container}>
      {this.renderScreen()}
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
});
export default App;