import React from 'react'
import { View, Text, ScrollView, Pressable,  } from 'react-native'
import { StyleSheet } from 'react-native'
import Navtop from '../../components/Navtop'
import Icon from 'react-native-vector-icons/Ionicons'
import { tournament } from '../../Data/tournaments'
import Tournamentitem from '../../components/Tournamentitem';
import { useNavigation } from '@react-navigation/native';
import { colors, sizes } from '../../components/Utils/colors';
const Tournaments = () => {
   const navigation = useNavigation(); 
  return (
   <>
         <Navtop></Navtop>
      <View style={styles.navtwo}>
            <Text style={styles.title}>Tournaments</Text>
            <View style={styles.btn_group}>
               <View style={styles.btn_active}>
                  <Text style={styles.active_lable}>Prematch</Text>
               </View>
               <Pressable onPress={() => navigation.navigate('TournamentsLive')}>
               <View style={styles.btn_inactive}>
                  <Text style={styles.inactive_lable}>Live</Text>
               </View>
               </Pressable>
            </View>
      </View>
      <View>
      </View>
      <View style={styles.container}>
         <View style={styles.group}>
         <Icon name='football' size={25}></Icon>
         <Text style={styles.lable_text}> Football</Text>
         </View>
          <ScrollView>
            {tournament.map((items) => {
               return(
                  <>
                   <Tournamentitem 
                     id={items.id}
                     title={items.title}
                     leagues={items.leagues}
                     link={items.link}
                     flag={items.flag}
                     league_name={items.league_name}
                     league_title={items.league_title}
                   /> 
                  </>
               )
            })}
           <View style={styles.marginBox}>

           </View>
           <View style={styles.marginBox}>

           </View>
           <View style={styles.marginBox}>

           </View>
           <View style={styles.marginBox}>

           </View>
          </ScrollView>
         
      </View>
   </>
  )
}
const styles = StyleSheet.create({
  
   marginBox:{
      width:"100%",
      paddingVertical:sizes.size_30,
      backgroundColor:colors.lighter_white,
      marginBottom:sizes.size_10
    },
   group:{
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center"
   },
   active_lable:{
     fontSize:14,
     fontWeight:"600",
     color:"#ffff"
   },
   inactive_lable:{
      fontSize:14,
      fontWeight:"600",
      color:"#095256"
   },
   btn_active:{
      width:"48%",
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#095256",
      marginVertical:5,
      paddingVertical:11,
   },
   btn_inactive:{
      width:"48%",
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginVertical:5,
      paddingVertical:11
   },
   btn_group:{
     width:"65%",
     flexDirection:"row",
     justifyContent:"space-between",
     marginTop:5,
     backgroundColor:"#f9f9f9",
     paddingHorizontal:5,
     borderRadius:10,
     marginBottom:5
   },
  container:{
     flex:1,
     paddingHorizontal:8,
     paddingTop:5,
     backgroundColor:"#f9f9f9"
  },
  navtwo:{
     backgroundColor:"#fff",
     alignItems:"center",
     paddingHorizontal:10,
  },
  title:{
    marginTop:5,
     fontSize:18,
     fontWeight:"700",
     color:colors.text_color
  },
  lable_text:{
   marginStart:2,
   fontSize:18,
   fontWeight:"700",
   marginVertical:10,
   color:colors.text_color
  }
})
export default Tournaments;

