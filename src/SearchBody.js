import React from "react"
import {View,StyleSheet, Text, SafeAreaView, ScrollView, Image} from "react-native"

class SearchBody extends React.Component{
    render(){
        var pokeman = this.props.data
        if(!pokeman.id){
             return(
                      
                              <View />
                   
          
          )
        }
           return (
      
    <SafeAreaView style={styles.scrollView}>
      <ScrollView>
        
        <View style={styles.viewStyle}>
            <Text style={styles.header}>
         #{pokeman.id} - {pokeman.name}
        </Text>
  <Image style={styles.img} source={{ uri:pokeman.sprites.front_default }}/>
        </View>
        <View style={styles.info}>
            
        
        </View>
       
      </ScrollView>
    </SafeAreaView>
  )
     
    }
}


const styles = StyleSheet.create({

  scrollView: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 30,
    color:'red',
    alignItems:'center',
  },
  viewStyle:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  img:{
    height:200,
    width:200,
    justifyContent:'center',
    alignItems:'center'
  },
  info:{
    flex:1,
    backgroundColor:'white',
    opacity:0.8
  }
});

export default SearchBody;