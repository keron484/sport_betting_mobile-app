import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Navtop from '../../components/Navtop';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
function Menu()
{
   const navigation = useNavigation();
   return(
    <>
       <Navtop></Navtop>
       <View style={styles.container}>
       <View style={styles.navTwo}>
          <Text style={styles.title}>Menu</Text>
       </View>
       <ScrollView alwaysBounceVertical={true}>
       <Pressable style={styles.box} 
            onPress={() => navigation.navigate("deposit")}
       >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='cash-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Deposite</Text>
                 <Text >Make account deposits</Text>
               </View>
            </View>
            <View>
               <Icon name='add-circle' size={35} style={styles.colorGreen}></Icon>
            </View>
         </Pressable>
         <Pressable style={styles.box}
             onPress={() => navigation.navigate("Tournaments")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='barcode-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Pre Matches</Text>
                 <Text >Bet on upcoming matches</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
            onPress={() => navigation.navigate("Tournaments")}
          >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='barcode-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Live Matches</Text>
                 <Text >Bet on live matches</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
           onPress={() => navigation.navigate("bethistory")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='time-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Bet History</Text>
                 <Text >Check your the bets placed</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
           onPress={() => navigation.navigate("virtualgames")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='game-controller-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Virtual Games</Text>
                 <Text >Play and win vitual games</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box} 
            onPress={() => navigation.navigate("messages")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='chatbubbles-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Messages</Text>
                 <Text >Check messages</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
           onPress={() => navigation.navigate("useraccount")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='person-circle-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>My Account</Text>
                 <Text >Manage and change account settings</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
           onPress={() => navigation.navigate("customersupport")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='information-circle-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Customer Support</Text>
                 <Text >contact customer support</Text>
               </View>
            </View>
         </Pressable>
         <Pressable style={styles.box}
           onPress={() => navigation.navigate("withdraw")}
         >
            <View style={styles.boxTwo}>
                <View style={styles.badge}>
                  <Text>
                     <Icon name='cash-outline' size={30} style={styles.icon}></Icon>
                  </Text>
                </View>
               <View style={styles.desBox}>
                 <Text style={styles.title}>Cash Out</Text>
                 <Text >Withdraw from account</Text>
               </View>
            </View>
            <View>
               <Icon name='arrow-redo-circle-outline' size={35} style={styles.colorGreen}></Icon>
            </View>
         </Pressable>
         <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
       </ScrollView>
       </View>
    </>
   )

}
const styles  = StyleSheet.create({
   marginBox:{
      width:"100%",
      paddingVertical:sizes.size_30,
      backgroundColor:colors.lighter_white,
      marginBottom:sizes.size_10
    },
   navTwo:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:sizes.size_2,
    backgroundColor:colors.color_white,
    paddingVertical:sizes.size_15,
    marginBottom:sizes.size_10
   },
   colorRed:{
     color:colors.color_danger
   },
   colorGreen:{
      color:colors.color_green
   },
   icon:{
      color:colors.secondary_color
   },
   title:{
    fontSize:sizes.size_18,
    fontWeight:"600"
   },
   desBox:{
       marginLeft:10
    },
   boxTwo:{
      flexDirection:"row",
       alignItems:"center"
   },
  badge:{
     width:45,
     height:45,
     borderRadius:50,
     backgroundColor:colors.lighter_white,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"center"
  },
  container:{
   paddingHorizontal:10,
   backgroundColor:"#fafafb",
   flex:1
  },
  box:{
   width:"100%",
   paddingVertical:12,
   borderRadius:5,
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   backgroundColor:"#fff",
   paddingHorizontal:10,
   marginBottom:sizes.size_5,
   elevation:sizes.size_2
  }
})
export default Menu;