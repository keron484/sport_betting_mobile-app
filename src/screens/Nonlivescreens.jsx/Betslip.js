import React from "react";
import { Text, TextInput, View, ScrollView, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Navtop from "../../components/Navtop";
import { user_balance, placebetActions } from "../../Redux/Slices/Betslice";
import { useSelector } from "react-redux"
import { selectedList, progress_bonus, slipActions } from "../../Redux/Slices/BetSlipslice";
import Slipitems from "./slipItems";
import { useState } from 'react';
import { colors, sizes } from "../../components/Utils/colors";
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { slides } from "../../Redux/Slices/BetSlipslice";
import PromoBetslip from "./PromoBetslip";
import BonusBetslip from "./BonusBetslip";
import { loggedin } from "../../Redux/Slices/Authslice";
function Betslip(){
     
    const getCurrentTimeAndDate = () => {
        const currentDateTime = new Date();
        const time = currentDateTime.toLocaleTimeString();
        const date = currentDateTime.toLocaleDateString();
        return `${date} ${time}`;
      };
    const [isshowing, setIshowing] = useState(false);
    function toggle() {
        setIshowing(prevalue => !prevalue);
    }
    const [stake, setStake] = useState("");
    const selected_events = useSelector(selectedList);
    const account_balance = useSelector(user_balance);
    const linkState = useSelector(slides);
    const num_events = selected_events.length;
    const bonus = useSelector(progress_bonus);
    const isDecimal = (number) => {
        const numberString = number.toString();
        return numberString.includes(".");
    }
    let totalOdds = 1;
    selected_events.forEach(element => {
        totalOdds *= element.odd
    });
    const rendered_selections = selected_events.map(items => (
        <>
         <Slipitems 
           id={items.id}
           match_name = {items.match_name}
           match_time = {items.match_time}
           match_date = {items.match_date}
           kick_off_time = {items.kick_off_time}
           market_lable = {items.market_lable}
           odd = {items.odd}
           market_category = {items.market_category}
         />
        </>
      ))
      var bonus_calcu = 2 * bonus/100 * totalOdds*stake;
      var potential_wininings = totalOdds*stake;
      const dispatch = useDispatch();
      const Placebet =  () => {
          dispatch(placebetActions.placebet({
            stake,
            bonus_calcu,
            potential_wininings,
            totalOdds,
            date: getCurrentTimeAndDate(),
            bettype: num_events <= 1 ? "Single" : "Accumulator",
            points:num_events <= 1 ? "0" :  "1", 
            selected_events
          }))
      }
      const RemoveAll = () => {
        dispatch(slipActions.removeAllfromslip());
      }
      const betSlip = () => {
        dispatch(slipActions.togglebetslip())
    }
    const promo = () => {
        dispatch(slipActions.togglePromo())
    }
    const linkbonus = () => {
        dispatch(slipActions.toggleBonus())
    }
      const styles = StyleSheet.create({
        betbtn_two:{
           width:"23%",
           paddingVertical:10,
           borderRadius:8,
           flexDirection:'row',
           justifyContent:"center",
           alignItems:"center",
           backgroundColor:colors.color_green
        }, 
        title_two:{
          fontSize:14,
          fontWeight:"800",
          color:colors.text_color
        },
        title_one:{
          fontSize:17,
          color:colors.text_color,
          fontWeight:"700"
        }, 
        text_box:{ 
         alignItems:"center",
         textAlign:"center",
         marginHorizontal:10
        },
        min_box:{
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"space-between",
           paddingHorizontal:10,
          
          paddingVertical:15,
          borderRadius:10
         },
        navtwo:{
            backgroundColor:"#fff",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingHorizontal:10,
            paddingVertical:7
         },
         title:{
            fontSize:18,
            fontWeight:"700",
            color:"#2A4747",
            marginLeft:28
         },
         container:{
            flex:1,
            backgroundColor:colors.lighter_white        
        },
        childone:{
            flex: isshowing ?  8 : 13,
            paddingHorizontal:5,
            paddingVertical:5,
        },
        childtwo:{
            flex: isshowing ? 2 : 19,
            backgroundColor:"#fff",
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            paddingHorizontal:8,
            paddingVertical:5
        },
        box_one:{
            width:"100%",
            backgroundColor:"#fff",
            borderRadius:6,
            paddingHorizontal:10,
            paddingTop:6,
            paddingBottom:6,
            marginTop:2
        },
        box_two:{
            width:"100%",
            backgroundColor:"#f9f9f9",
            borderRadius:10,
            paddingHorizontal:10,
            marginBottom:5,
            paddingBottom:15
        },
        box_three:{
            width:"100%",
            backgroundColor:"#f9F9F9",
            borderRadius:10,
            marginTop:5,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingHorizontal:5,
            paddingVertical:2
        },
        text_white:{
            color:"#2A4747",
            fontSize:16,
            marginHorizontal:2,
            fontWeight:"800"
        },
        text_green:{
            color:colors.color_green,
            fontSize:16,
            marginHorizontal:2,
            fontWeight:"800"
        },
        input_box:{
            width:"73%",
            borderRadius:10,
            marginTop:5,
            borderColor:"#5cb85c",
            borderWidth:1,
            paddingVertical:7,
            paddingHorizontal:10,
            fontSize:18,
            fontWeight:"800",
            color:colors.text_color
        },
        bet_btn:{
            width:"25%",
            backgroundColor:"#5cb85c",
            alignItems:"center",
            paddingVertical:10,
            flexDirection:"row",
            justifyContent:"center",
            borderRadius:10,
    
        },
        progress_box:{
            width:"100%",
            height:"5%",
            backgroundColor:"#E6E6FA",
            borderRadius:50,
            marginTop:2
        },
        lable:{
            width:"100%",
            backgroundColor:"#f9f9f9",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            borderRadius:5,
            paddingHorizontal:5,
            marginTop:5,
            paddingVertical:8
        },
        balance:{
            fontSize:25,
            fontWeight:"900",
            color:"#2A4747",
            marginVertical:2
        },
        items_text:{
            flexDirection:"row",
            justifyContent:"space-between",
        },
        fs_1:{
            fontSize:15,
            marginVertical:1,
            fontWeight:"700",
            color:colors.text_color
        },
        odds:{
            fontSize:15,
            fontWeight:"900",
            marginVertical:1,
            color:colors.text_color
        },
        box_two_dex:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:13
        },
        text_normal:{
            fontSize:14,
            fontWeight:"900",
            color:colors.text_color
         },
        btn_active:{
          width:"33%",
          borderRadius:10,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"#095256",
          paddingVertical:12
        },
        btn_lable:{
            color:"#fff",
            fontSize:14,
            fontWeight:"800"
       },
        btn_inactive:{
            width:"33%",
            paddingVertical:10,
            borderRadius:10,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
        },
        lable_incative:{
            color:"#095256",
            fontSize:14,
            fontWeight:"800"
        },
        input_area:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
        },
        btn_name:{
            fontSize:16,
            fontWeight:"800",
            color:"#fff"
        },
        pot_winings:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        progress:{
            height:"100%",
            borderTopLeftRadius:50,
            borderBottomLeftRadius:50,
            backgroundColor:"#5cb85c",
            width:`${bonus}%`,
            flexDirection:'row',
            alignItems:"center",
            justifyContent:"center"
        },
        progress_lable:{
            position:"relative",
            left:20,
            fontSize:15,
            fontWeight:"700",
            color:"#fff"
        },
        text_range:{
            color:"#2A4747",
            marginTop:5,
            fontWeight:"800",
            fontSize:15
        },
        icon:{
            color:colors.secondary_color,
        },
        dash:{
            width:"15%",
            backgroundColor:"#ccc",
            height:sizes.size_6,
            borderRadius:10,
            marginBottom:6
        },
        text_center:{
            textAlign:"center",
            alignItems:"center"
        },
        boxTwodec:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        textNormal:{
           fontSize:sizes.size_14,
           fontWeight:"800"
        }
    })
    const navigation = useNavigation();
    const loginState = useSelector(loggedin);
    const tologinpage = () => {
         navigation.navigate("Login");
    }
    return(
     <>
      {linkState.betslip && <> 
         <Navtop></Navtop>
        <View style={styles.navtwo}>
                      <Text></Text>
            <Text style={styles.title}>Bet Slip</Text>
            <View>
                <Text>
                    <Pressable onPress={RemoveAll}>
                    <Icon name="trash" size={25}></Icon>
                    </Pressable>
                </Text>
            </View>
      </View>
     <View style={styles.container}>
            <View style={styles.childone}>
                <ScrollView>
                    {rendered_selections}
                </ScrollView>
            </View>
            <View style={styles.childtwo}>
              {!isshowing &&  
                <>
                            <TouchableOpacity style={styles.text_center} onPress={toggle}>
                               <View style={styles.dash}>
                                <Text></Text>
                               </View>
                            </TouchableOpacity>
                 <View style={styles.box_two}>
                           <View>
                           <View style={styles.box_two_dex}>
                               <Text style={styles.text_normal}>Events</Text>
                                <View style={styles.boxTwodec}>
                                <Text style={styles.textNormal}>
                                {selected_events.length}
                                </Text>
                                <Text>
                                <Icon name="layers" size={20} style={styles.icon}></Icon>
                                </Text>
                                </View>
                           </View>
                           <View style={styles.box_two_dex}>
                               <Text style={styles.text_normal}>Odds</Text>
                               <Text style={styles.text_normal}>{totalOdds.toFixed(2)}</Text>
                           </View>
                           </View>
                       </View>
                       <View style={styles.box_three}>
                           <Pressable style={styles.btn_active} onPress={betSlip}>
                               <Text style={styles.btn_lable}>
                                   Current Account
                               </Text>
                           </Pressable>
                            <Pressable style={styles.btn_inactive} onPress={promo} >
                               <Text style={styles.lable_incative}>
                                   Promocode
                               </Text>
                            </Pressable>
                            <Pressable style={styles.btn_inactive} onPress={linkbonus}>
                               <Text style={styles.lable_incative}>
                                   Bonus Account
                               </Text>
                            </Pressable>
                       </View>
               
                       <Text style={styles.balance}>{isDecimal(account_balance) ? account_balance.toFixed(2) : account_balance} ₣</Text>
                        <View style={styles.input_area}>
                        <TextInput 
                       style={styles.input_box} 
                       placeholder="Enter the Amount"
                        keyboardType="numeric"
                        onChangeText={(newvalue) => setStake(newvalue)}
                        value={stake}
                       ></TextInput>
                        <TouchableOpacity style={styles.bet_btn} onPress={loginState ? Placebet :  tologinpage }>
                        <View >
                           <Text style={styles.btn_name}>Place Bet</Text>
                       </View>
                        </TouchableOpacity>
                        </View>
                       <Text style={styles.text_range}>Range 1 ₣ - 1000000 ₣</Text>
                       <View style={styles.pot_winings}>
                       <Text style={styles.text_white}>Potentail winnings</Text>
                       <Text style={potential_wininings > 0 ? styles.text_green : styles.text_white}> {potential_wininings.toFixed(2)} ₣</Text>
                       </View>
                       <View style={styles.pot_winings}>
                       <Text style={styles.text_white}>Bonus</Text>
                       <Text style={potential_wininings > 0 ? styles.text_green : styles.text_white}>{bonus_calcu.toFixed(2)} ₣</Text>
                       </View>
                       <View style={styles.pot_winings}>
                       <Text style={styles.text_white}>Bonus Percentage</Text>
                       <Text style={styles.text_white}>{`${bonus}%`}</Text>
                       </View>
                       <View style={styles.progress_box}>
                           <View style={styles.progress}>
                               <Text style={styles.progress_lable}>
                               {`${bonus}%`}
                               </Text>
                           </View>
                       </View>
                </>
              }
              {isshowing && <>
                 <View style={styles.min_box}>
                    <View style={styles.text_box}>
                        <Text style={styles.title_one}>Events</Text>
                        <Text style={styles.title_two}>{selected_events.length}</Text>
                    </View>
                    <View style={styles.text_box}>
                        <Text style={styles.title_one}>Odds</Text>
                        <Text style={styles.title_two}>{totalOdds.toFixed(2)}</Text>
                    </View>
                    <Pressable style={styles.betbtn_two} onPress={toggle}>
                        <Text style={styles.btn_name}>
                            Bet
                        </Text>
                    </Pressable>
                 </View>
              </>}
            </View>
     </View>
      </>}
      {linkState.bonus && <> 
        <BonusBetslip></BonusBetslip>
      </>}
      {linkState.promoslip && <> 
        <PromoBetslip></PromoBetslip>
      </>}
     </>  
    
    )
}
export default Betslip;
