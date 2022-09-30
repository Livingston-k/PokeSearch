import React from "react"
import {View,Text,StyleSheet} from 'react-native'
import {
  NativeBaseProvider,
  Button,
  Icon,
  IconButton,
  HStack,
  StatusBar,
  Box,
  Divider,
  Input
} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from 'axios'

class Search extends React.Component{
    state = {
        pokesearch:"",
        onCall:false,
        data:{}
    }
    searchPoke =()=>{
      this.setState({onCall:true})
      var self = this
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokesearch.toLowerCase()}`).then((response)=>{
     self.setState({onCall:false})
     self.setState({data:response.data})
      }).catch((error)=>{
   console.log(error)
      })

    }
    renderBody = ()=>{
     if(this.state.onCall){
  return (
   <PokeLoader/>
  )
     }else{
 return (

   <SearchBody data={this.state.data}/>
  )
     }
    }

    render(){
        return (
            <NativeBaseProvider>
            <View>
      <HStack style={styles.header} bg="violet" px="1" py="0" justifyContent="space-between" alignItems="center" w="100%">
        <HStack>
          <IconButton onPress={this.searchPoke}  icon={<Icon as={Ionicons} name="search" size="sm" color="black" />} />
         <Input 
         w="90%" 
         placeholder="Search pokemon" 
         onChangeText={(pokesearch)=>this.setState({pokesearch:pokesearch})}
         value={this.state.pokesearch}
         />
        </HStack>
        
      </HStack>
         <Divider my="1" _light={{
        bg: "muted.200"
      }} _dark={{
        bg: "muted.50"
      }} />
      {this.renderBody()}
            </View>
            </NativeBaseProvider>
        )
    }
}
const styles = StyleSheet.create({
  header: {
    marginTop:Platform.OS == 'android'?10:5
  },
});
export default Search;