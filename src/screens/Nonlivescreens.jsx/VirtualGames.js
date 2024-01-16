import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Navtop from '../../components/Navtop';
import { useNavigation } from '@react-navigation/native';
import { sizes, colors } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
function VirtualGames() {
    const navigation = useNavigation();
    return(
        <>
        <Navtop></Navtop>
        <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </Pressable>
              <Text style={styles.title}>Virtual Games</Text>
             <Text></Text>
          </View>
        <View style={styles.container}>
            <Text style={styles.gameTitle}></Text>
            <View style={styles.gameBox}>
               <View>
                  <Image source={require("../../assets/Logos/crash-aviator.jpg")} style={styles.gameImg}></Image>
               </View>
               <Text style={styles.textCenter}>Crash Aviator</Text>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
  gameBox:{
     width:"35%",
     height:100
  },
  textCenter:{
    textAlign:"center",
    color:colors.text_color,
    fontSize:sizes.size_16,
    fontWeight:"800",
    marginTop:5
  },
   gameImg:{
     width:"100%",
     height:100,
     borderRadius:5
   },
    navTwo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:sizes.size_15,
        backgroundColor:colors.color_white,
        width:"100%",
        paddingHorizontal:sizes.size_10
      },
      badge:{
         width:40,
         height:40,
         borderRadius:35,
         backgroundColor:colors.lighter_white,
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
      },
      title:{
        fontSize:sizes.size_16,
        fontWeight:"800",
        marginRight:sizes.size_30,
        color:colors.text_color
      },
      container:{
        flex:1,
        backgroundColor:colors.lighter_white,
        padding:sizes.size_10
      },
})
export default VirtualGames;