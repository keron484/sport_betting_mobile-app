import React from 'react-native';
import {View, Text,  StyleSheet, Pressable, Image} from "react-native";
import { colors, sizes } from './Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export const Bethistorybox =  (props) => {
  // creating a route by importing the usenavigation hook
  const navigation = useNavigation();
  const betdetails = () => {
    navigation.navigate("betdetails", )
  }
    return(
        <>
         <Pressable onPress={betdetails}>
         <View style={styles.bet_container}>
                 <View style={styles.bet_desc}>
                   <View style={styles.desc_items}>
                      <View style={styles.badge_lg}>
                        <Icon name='ticket-outline' size={35} style={styles.icon_color}></Icon>
                      </View>
                      <View>
                      <Text style={styles.deslable_one}>ID:{props.betid}</Text>
                      <Text style={styles.deslable_three}>Date: {props.date} {props.time} </Text>
                      <Text style={styles.deslable_four}>{props.bettype}</Text>
                      </View>
                   </View>
                   <View style={styles.icon_group}>
                   <View style={styles.badge_icon}>
                    <Text>
                    <Icon name='ellipsis-horizontal' size={25} style={styles.icon_color}></Icon>
                    </Text>
                   </View>
                   </View>
                 </View>
             <View style={styles.betdetails}>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Odds</Text>
                <Text style={styles.details_item}>{props.totalOdds}</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Stake</Text>
                <Text style={styles.details_item}>{props.stake} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Potential winnings</Text>
                <Text style={styles.details_item}>{props.potential_wininings} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Bonus</Text>
                <Text style={styles.details_item}>{props.bonus_calcu} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Status</Text>
                <Text style={styles.details_item}>Accepted</Text>
               </View>
             </View>
             </View>
             <View>
              
             </View>
         </Pressable>
        </>
    )
}
const styles = StyleSheet.create({
    input_box:{
        width:"73%",
        borderRadius:10,
        marginTop:5,
        borderColor:"#5cb85c",
        borderWidth:1,
        paddingVertical:7,
        paddingHorizontal:10
    },
          details_item:{
            marginVertical:3,
            fontSize:16,
            fontWeight:"900",
            color:colors.text_color
          },
          betdetails:{
           marginTop:5,
           paddingHorizontal:4,
           color:colors.text_color
         },
         details_lable:{
           flexDirection:"row",
           justifyContent:"space-between"
         },
         deslable_one:{
           fontSize:12,
           fontWeight:"600",
           color:colors.text_color
         },
         deslable_three:{
           fontSize:12,
           fontWeight:"600",
           color:colors.text_color
         },
         deslable_four:{
            fontSize:14,
            fontWeight:"bold",
            color:colors.text_color
         },
         icon_group:{
            flexDirection:"row",
            alignItems:"center"
         },
         bet_desc:{
          flexDirection:"row",
          justifyContent:"space-between",
          marginTop:5,
          borderBottomWidth:2,
          borderColor:colors.lighter_white,
          paddingBottom:4      
         },
         badge_icon:{
          width:50,
          height:50,
          backgroundColor:"#f9f9f9",
          borderRadius:50,
          alignItems:"center",
          justifyContent:"center",
          marginHorizontal:5
         },
         desc_items:{
          flexDirection:"row",
          alignItems:"center"
        },
        badge_lg:{
           width:50,
           height:50,
           backgroundColor:"#f9f9f9",
           borderRadius:50,
           alignItems:"center",
           justifyContent:"center",
           marginRight:5
        },
        bet_container:{
             width:"100%",
             backgroundColor:"#fff",
             borderRadius:10,
             paddingHorizontal:10,
             paddingVertical:8,
             marginBottom:sizes.size_5
        },
  
})
export const Bonusbethistorybox = (props) =>{
    return(
        <>
                <View style={styles.bet_container}>
                 <View style={styles.bet_desc}>
                   <View style={styles.desc_items}>
                      <View style={styles.badge_lg}>
                        <Icon name='ticket-outline' size={35} style={styles.icon_color}></Icon>
                      </View>
                      <View>
                      <Text style={styles.deslable_one}>ID:{props.betid}</Text>
                      <Text style={styles.deslable_three}>Date: {props.date} {props.time} </Text>
                      <Text style={styles.deslable_four}>{props.bettype}</Text>
                      </View>
                   </View>
                   <View style={styles.icon_group}>
                   <View style={styles.badge_icon}>
                    <Text>
                    <Icon name='ellipsis-horizontal' size={25} style={styles.icon_color}></Icon>
                    </Text>
                   </View>
                   </View>
                 </View>
             <View style={styles.betdetails}>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Odds</Text>
                <Text style={styles.details_item}>{props.totalOdds}</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Stake</Text>
                <Text style={styles.details_item}>{props.stake} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Potential winnings</Text>
                <Text style={styles.details_item}>{props.potential_wininings} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Status</Text>
                <Text style={styles.details_item}>Accepted</Text>
               </View>
             </View>
             </View>
             <View>
              
             </View>
        </>
    )
}
export const Bethistoryitems = () => {
  const styles = {
    marginBox:{
      width:"100%",
      paddingVertical:sizes.size_30,
      backgroundColor:colors.lighter_white,
      marginBottom:sizes.size_10
    },
  lablestatus:{
      fontWeight:"bold",
      fontSize:sizes.size_16,
      color:"steelblue"
  },
  itemLableTwo:{
      fontWeight:"bold",
      color:colors.text_color,
      fontSize:sizes.size_16,
  },
  itemLableOne:{
     fontSize:sizes.size_16,
     fontWeight:"700" 
  },
  logo:{
      width:"75%",
      height:"75%"
  },
  lableLarge:{
      fontSize:25,
      fontWeight:"bold",
      color:colors.text_color
  },
  htname:{
      marginEnd:sizes.size_10,
      fontSize:sizes.size_13,
      fontWeight:"600",
      color:colors.text_color
  },
  awteamname:{
      marginStart:sizes.size_10,
      fontSize:sizes.size_13,
      fontWeight:"600",
      color:colors.text_color
  },
  scoreBox:{
      marginHorizontal:sizes.size_10,
      
  },
  justifySpace:{
    justifyContent:"space-between",
    flexDirection:"row"
  },
  TeamBox:{
      flexDirection:"row",
      alignItems:"center"
  },
  circleTwo:{
      width: 55,
      height: 55,
      backgroundColor:colors.color_white,
      borderRadius:50,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
  },
  circleOne:{
      width:70,
      height:70,
      backgroundColor:colors.lighter_white,
      borderRadius:60,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
  },
  itemChildone:{
    width:"100%",
    borderTopWidth:sizes.size_1,
    paddingTop:sizes.size_5,
    borderColor:"#dddd"
  },
  justifyBetween:{
      justifyContent:"center",
      flexDirection:"row",
      alignItems:"center",
      paddingBottom:sizes.size_10,
      paddingTop:sizes.size_10
  },
  itemBox:{
    width:"100%",
    backgroundColor:colors.color_white,
    paddingHorizontal:sizes.size_10,
    paddingVertical:sizes.size_10,
    borderRadius:sizes.size_10,
    marginBottom:sizes.size_4
  },
  lableend:{
   fontWeight:"900",
   color:colors.text_color,
   fontSize:sizes.size_16
  },
  }
    return(
        <>
        <View style={styles.itemBox}>
                     <View style={styles.justifyBetween}>
                     <View style={styles.TeamBox}>
                        <Text style={styles.htname}>Team Name</Text>
                        <View style={styles.circleOne}>
                            <View style={styles.circleTwo}>
                            <Image style={styles.logo} source={require('../assets/Logos/man_city.png')}></Image>
                            </View>
                        </View>
                     </View>
                     <View style={styles.scoreBox}>
                        <Text style={styles.lableLarge}>VS</Text>
                     </View>
                     <View style={styles.TeamBox}>
                         <View style={styles.circleOne}>
                            <View style={styles.circleTwo}>
                            <Image style={styles.logo} source={require('../assets/Logos/chelsea.png')}></Image>
                            </View>
                        </View>
                         <Text style={styles.awteamname}>Team Name</Text>
                     </View>
                     </View>
                     <View style={styles.itemChildone}>
                         <View style={styles.justifySpace}>
                            <Text style={styles.itemLableOne}>1X2: W1</Text>
                            <Text style={styles.itemLableTwo}>2.00</Text>
                         </View>
                         <View style={styles.justifySpace}>
                            <Text style={styles.itemLableOne}>Status</Text>
                            <Text style={styles.lablestatus}>Accepted</Text>
                         </View>
                     </View>
                 </View>
        </>
    )
}

