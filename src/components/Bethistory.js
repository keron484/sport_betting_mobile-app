import React from 'react-native';
import {View, Text,  StyleSheet, Pressable, Image} from "react-native";
import { colors, sizes } from './Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BethistoryIcon from '../assets/icons/custom-icon';
export const Bethistorybox =  (props) => {
  // creating a route by importing the usenavigation hook
  //geting the id 
  const id = props.id
  const navigation = useNavigation();
  const betdetails = () => {
    navigation.navigate("betdetails", {id:id})
  }
  const stakeAmount = props.stake;
  const bonus = props.bonus_calcu;
  const odds = props.totalOdds;
  const potWinings = props.potential_wininings;
  const isDecimal = (number) => {
     const numberString = number.toString();
     return numberString.includes(".");
  }
  const toSettings = () => {
    navigation.navigate("betsettings", {id:id})
  }
  const betStatus = props.winStatus;
  const WinItem = () => {
    return(
      <>
       <View style={styles.winItem}>
         <Text style={styles.textGreen}>Paid Out</Text>
         <Text>
           <Icon name='checkmark-circle' size={25} style={styles.colorGreen}></Icon>
         </Text>
       </View>
      </>
    )
  }
    return(
        <>
         <Pressable onPress={betdetails}>
         <View style={styles.bet_container}>
                 <View style={styles.bet_desc}>
                   <View style={styles.desc_items}>
                      <View style={styles.badge_lg}>
                         <BethistoryIcon betStatus={betStatus}/>
                      </View>
                      <View>
                      <Text style={styles.deslable_one}>ID:STNKCQKDNUST{props.id}</Text>
                      <Text style={styles.deslable_three}>Date: {props.date} {props.time} </Text>
                       <View style={styles.pill}>
                       <Text style={styles.pillLable}>{props.bettype}</Text>
                       </View>
                      </View>
                   </View>
                   <View style={styles.icon_group}>
                    <Pressable onPress={toSettings}>
                    <View style={styles.badge_icon}>
                    <Text>
                    <Icon name='settings-outline' size={25} style={styles.icon_color}></Icon>
                    </Text>
                   </View>
                    </Pressable>
                   </View>
                 </View>
             <View style={styles.betdetails}>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Odds</Text>
                <Text style={styles.details_item}>{isDecimal(odds) ? odds.toFixed(2) : odds}</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Stake</Text>
                <Text style={styles.details_item}>{isDecimal(stakeAmount) ? stakeAmount.toFixed(2) : stakeAmount} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Potential winnings</Text>
                <Text style={betStatus ? styles.validate  : styles.details_item}>{isDecimal(potWinings) ? potWinings.toFixed(2) : potWinings} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Bonus</Text>
                <Text style={betStatus ? styles.validate  : styles.details_item}>{isDecimal(bonus) ? bonus.toFixed(2) : bonus} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Status</Text>
                {betStatus ? <WinItem />  :  <Text style={styles.statusValue}>Accepted</Text>}
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
    colorGreen:{
      color:colors.color_green,
      marginHorizontal:5
    },
    textGreen:{
      color:colors.color_green,
      fontSize:18,
      fontWeight:"900"
    },
    winItem:{
      flexDirection:"row",
      alignItems:"center"
    },
    statusValue:{
       marginVertical:3,
       fontSize:16,
       fontWeight:"900",
       color:"#4682b4"
    },
    pill:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#4682b4",
      borderRadius:sizes.size_20,
      width:"auto",
      maxWidth:90
    }, 
    pillLable:{
      fontSize:sizes.size_13,
      fontWeight:"600",
      color:colors.color_white
    },
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
          validate:{
            marginVertical:3,
            fontSize:16,
            fontWeight:"900",
            color:colors.color_green
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
  const id = props.id;
  const stakeAmount = props.stake;
  const odds = props.totalOdds;
  const potWinings = props.potential_wininings;
  const isDecimal = (number) => {
    const numberString = number.toString();
    return numberString.includes(".");
 }
 const navigation = useNavigation();
 const betdetailsBonus = () => {
    navigation.navigate("betdetailsbonus", {id:id})
 }
    return(
        <>
           <Pressable onPress={betdetailsBonus}>
           <View style={styles.bet_container}>
                 <View style={styles.bet_desc}>
                   <View style={styles.desc_items}>
                      <View style={styles.badge_lg}>
                        <BethistoryIcon />
                      </View>
                      <View>
                      <Text style={styles.deslable_one}>ID:STNKCQKDNUST{props.id}</Text>
                      <Text style={styles.deslable_three}>Date: {props.date} {props.time} </Text>
                      <View style={styles.pill}>
                       <Text style={styles.pillLable}>{props.bettype}</Text>
                       </View>
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
                <Text style={styles.details_item}>{isDecimal(odds) ? odds.toFixed(2) : odds}</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Stake</Text>
                <Text style={styles.details_item}>{isDecimal(stakeAmount) ? stakeAmount.toFixed(2) : stakeAmount} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Potential winnings</Text>
                <Text style={styles.details_item}>{isDecimal(potWinings) ? potWinings.toFixed(2) : potWinings} ₣</Text>
               </View>
               <View style={styles.details_lable}>
                <Text style={styles.details_item}>Status</Text>
                <Text style={styles.statusValue}>Accepted</Text>
               </View>
             </View>
             </View>
             <View>
              
             </View>
           </Pressable>
        </>
    )
}
export const Bethistoryitems = (props) => {
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
      fontWeight:"900",
      color:colors.text_color,
      fontSize:sizes.size_15,
  },
  itemLableOne:{
     fontSize:sizes.size_15,
     fontWeight:"900",
    color:colors.text_color
  },
  logo:{
      width:"70%",
      height:"70%",
      objectFit:"contain"
  },
  lableLarge:{
      fontSize:25,
      fontWeight:"bold",
      color:colors.text_color
  },
  htname:{
      marginEnd:sizes.size_10,
      fontSize:sizes.size_13,
      fontWeight:"700",
      color:colors.text_color
  },
  awteamname:{
      marginStart:sizes.size_10,
      fontSize:sizes.size_13,
      fontWeight:"700",
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
  textLength:{
     width:90,
  }
  }
    return(
        <>
        <View style={styles.itemBox}>
                     <View style={styles.justifyBetween}>
                     <View style={styles.TeamBox}>
                        <View style={styles.textLength}>
                        <Text style={styles.htname}>{props.htname}</Text>
                        </View>
                        <View style={styles.circleOne}>
                            <View style={styles.circleTwo}>
                            <Image style={styles.logo} source={props.htlogo}></Image>
                            </View>
                        </View>
                     </View>
                     <View style={styles.scoreBox}>
                        <Text style={styles.lableLarge}>VS</Text>
                     </View>
                     <View style={styles.TeamBox}>
                         <View style={styles.circleOne}>
                            <View style={styles.circleTwo}>
                            <Image style={styles.logo} source={props.atlogo}></Image>
                            </View>
                        </View>
                        <View style={styles.textLength}>
                         <Text style={styles.awteamname}>{props.awname}</Text>
                        </View>
                     </View>
                     </View>
                     <View style={styles.itemChildone}>
                         <View style={styles.justifySpace}>
                            <Text style={styles.itemLableOne}>Bet: {props.market_lable}</Text>
                            <Text style={styles.itemLableTwo}>{props.odd}</Text>
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

