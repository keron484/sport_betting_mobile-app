import React from 'react';
import { View, Text, StyleSheet, ScrollView,  Pressable } from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Navtop from '../../components/Navtop';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Bethistoryitems } from '../../components/Bethistory';
import BethistoryIcon from '../../assets/icons/custom-icon';
import { bonus_bet_list } from '../../Redux/Slices/Betslice';
function BonusbetHistoryDetails({route}){
    const {id} = route.params;
    const navigation = useNavigation();
    const back = () => {
      navigation.goBack();
    }
    const arryOne = useSelector(bonus_bet_list);
    // calling the use navigation function;
    const new_array =  arryOne.filter((items) =>  Number(id) === items.id );
    const details_list = new_array[0].selected_events;
    const betdetailsitems = details_list.map((items) => {
        return(
           <>
            <Bethistoryitems 
              key={items.id}
              htname = {items.htname}
              awname = {items.awname}
              htlogo = {items.htlogo}
              atlogo = {items.atlogo}  
              market_lable = {items.market_lable}
              odd = {items.odd}
              match_date = {items.match_date}
              htscore = {items.htscore}
              atscore = {items.atscore}
              timelable = {items.timelable}
              scoreshalf = {items.scoreshalf}
            />
           </>
        )
      })
    return(
        <>
           <Navtop></Navtop>
           <View style={styles.container}>
        {new_array.map((item) => {
          const oddsTotal = item.totalOdds;
          const stakeAmount = item.stake;
          const potWinings = item.potential_wininings;
          const isDecimal = (number) => {
              const numberString = number.toString();
              return numberString.includes(".");
          }
          return(
            <>
              <View style={styles.childOne}>
           <View style={styles.boxOne}>
               <View style={styles.titleBox}>
                   <Pressable onPress={back}>
                   <Text>
                     <Icon name='chevron-back' style={styles.icon} size={28}></Icon>
                   </Text>
                   </Pressable>
                   <Text style={styles.title}>Bet Details </Text>
                   <Text></Text>
               </View>
               <View style={styles.BoxTwo}>
                 <View style={styles.BadgeSm}>
                    <BethistoryIcon />
                 </View>
                 <View>
                     <Text style={styles.lableone}>ID: {item.id}STJSDAJDKJIORWE</Text>
                     <Text style={styles.lableone}>Bet Type: <Text style={styles.pill}>{item.bettype}</Text></Text>
                     <Text style={styles.lableone}>Date: <Text>{item.date}</Text> </Text>
                 </View>
               </View>
               <View style={styles.desBox}>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Odds</Text>
                      <Text style={styles.lableend}>{isDecimal(oddsTotal) ? oddsTotal.toFixed(2) : oddsTotal}</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Stake</Text>
                      <Text style={styles.lableend}>{isDecimal(stakeAmount) ? stakeAmount.toFixed(2) : stakeAmount} ₣</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Potential Winings</Text>
                      <Text style={styles.lableend}>{isDecimal(potWinings) ? potWinings.toFixed(2) : potWinings}  ₣</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lableStat}>Status</Text>
                      <Text style={styles.status}>Accepted</Text>
                   </View>
               </View>
           </View>
        </View> 
            </>
          )
        })}
        <View style={styles.childTwo}>
            <ScrollView style={styles.scroll}>
                 {betdetailsitems}
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
       </View>
       </>
    )
}
const styles = StyleSheet.create({
    scroll:{
        width:"100%",
        paddingHorizontal:sizes.size_5
    },
   lableend:{
    fontWeight:"900",
    color:colors.text_color,
    fontSize:sizes.size_16
   },
   desBox:{
     paddingHorizontal:sizes.size_5
   },
   lableone:{
     marginStart:sizes.size_5,
     fontSize:sizes.size_13,
     fontWeight:"700",
     color:colors.text_color
   },
    BadgeSm:{
        width:60,
        height:60,
        alignItems:"center",
        backgroundColor:colors.lighter_white,
        borderRadius:50
    },
    BoxTwo:{
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
      borderBottomWidth:sizes.size_1,
      borderColor:"#ddd",
      paddingBottom:sizes.size_5
    },
    status:{
      fontSize:sizes.size_16,
      fontWeight:"700",
      color:"steelblue"
    },
    title:{
      fontSize:sizes.size_16,
      marginEnd:sizes.size_13,
      fontWeight:"700",
      color:colors.text_color
    },
    icon:{
      color:colors.secondary_color,
 
    },
    lable:{
        fontSize:sizes.size_16,
        fontWeight:"800",
        color:colors.text_color
    },
    lableStat:{
         fontSize:sizes.size_16,
         fontWeight:"700",
         color:colors.text_color
    },
    desItemOne:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:sizes.size_3
    },
    titleBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:sizes.size_8
    },
    boxOne:{
      width:"100%",
      backgroundColor:colors.color_white,
      paddingHorizontal:sizes.size_10,
      paddingTop:sizes.size_5,
      paddingVertical:sizes.size_16,
      borderRadius:sizes.size_10,
      
    },
    container:{
        flex:1,
        backgroundColor:"#f9f9fb"
    }, 
    childOne:{
        flex:5,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:sizes.size_5,
        marginTop:sizes.size_2
    },
    childTwo:{
        flex:10,
        alignItems:"center"
    }
})
export default BonusbetHistoryDetails;