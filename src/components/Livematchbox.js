import React, { Pressable } from "react-native";
import {View, Text, StyleSheet, Image} from "react-native"
import { Livedata } from "../Data/Livedata";
import { colors, sizes} from "./Utils/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { Market_btn } from "./buttons/buttons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
function Livematchbox() {
  const navigation = useNavigation();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time < 90 * 60) {
        setTime(time + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
    return(
        <>
        {Livedata.map((items) => {
            return(
                <>
                   <Pressable onPress={() => {navigation.navigate('matchdetailslive', {id:items.id})}} key={items.id}>
                   <View style={styles.matchbox}>
          <View style={styles.match_lable}>
            <View style={styles.lable_two}>
              <View style={styles.bagde_sm}>
                <Icon name='football' size={25} style={styles.icon_color}></Icon>
              </View>
              <Text style={styles.text_lable}>{items.Eventtitle}</Text>
            </View>
            <View style={styles.bagde_list}>
              <View style={styles.bagde_sm}>
              <Icon name='pulse' size={18}  style={styles.icon_color}></Icon>
              </View>
            </View>
          </View>
          <View style={styles.teams_logo_area}>
            <View style={styles.team_box}>
            <View style={styles.textLenght}>
            <Text style={styles.team_name} numberOfLines={1}>{items.htname}</Text>
            </View>
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
                <Image source={items.htlogo} style={styles.team_logo}></Image>
              </View>
            </View>
            </View>
            <View style={{alignItems:"center", marginHorizontal:5, marginTop:10}}>
              <Text style={styles.scores}>{items.htscore}:{items.atscore}</Text>
              <Text style={styles.lable}>{time < 45 ? "1-half" : "2-half"},  {formatTime(time)} </Text>
            </View>
            <View style={styles.team_box}>
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
              <Image source={items.atlogo} style={styles.team_logo}></Image>
              </View>
            </View>
             <View style={styles.textLenght}>
             <Text style={styles.team_name} numberOfLines={1}>{items.awname}</Text>
             </View>
            </View>
          </View>
          <Text style={styles.market_name}>1X2</Text>
          <View style={styles.btn_box}>
             {items.liveodds.map((c) => {
               return(
                 <> 
                 <Market_btn 
                 id={
                  c.id
              }
              parentId = {
                c.parentId
              }
              match_name={
                  c.match_name
              }
              match_date={
                  c.match_date
              }
              kick_off_time={
                  c.kick_off_time
              }
              market_category={
                  c.market_category
              }
              market_lable={
                  c.market_lable
              }
              odd={
                  c.odd
              }
              atlogo = {items.atlogo}
              awname = {items.awname}
              htname = {items.htname}
              htlogo = {items.htlogo}
                 
                 />
                  </>
                )
             })}
           </View>
        </View>
                   </Pressable>
                </>
            )
        })}
        </>
    )
}
const styles = StyleSheet.create({
  textLenght:{
    width:65
  },
  market_name:{
    marginStart:10,
    fontSize:16,
    fontWeight:"700",
  },
  betbtn:{
    width:"30%",
    borderRadius:10,
    padding:10,
    backgroundColor:"#f9f9f9",
    marginHorizontal:5,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  odds_text:{
    fontSize:15,
    fontWeight:"800",
    color:colors.text_color
  },
      btn_box:{
       flexDirection:"row",
       justifyContent:"space-between",
       marginBottom:5
       },
       lable:{
       fontSize:15,
       fontWeight:"700",
       color:colors.text_color
       }, 
      teams_logo_area:{
        marginBottom:5,
        flexDirection:"row",
        justifyContent:"center"
      },
      score_area:{
        textAlign:"center",
        color:colors.text_color
      },
      scores:{
        fontSize:40,
        fontWeight:"900",
        letterSpacing:2,
        color:colors.text_color
      },
      team_box:{
        alignItems:"center",
        flexDirection:"row"
      },
      bagde_sm:{
        width:35,
        height:35,
        backgroundColor:"#f9f9f9",
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:2
      },
      lable_two:{
        flexDirection:"row",
        alignItems:"center"
      },
      text_lable:{
        marginHorizontal:5,
        fontSize:14,
        fontWeight:"600",
        color:colors.text_color
      },
      match_lable:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
        paddingHorizontal:10,
        marginBottom:5
      },
      bagde_list:{
        flexDirection:"row",
      },
      team_name:{
        fontSize:15,
        fontWeight:"800",
        color:colors.text_color
      },
      team_logo:{
          width:"70%",
          height:"70%",
          objectFit:"contain"
      },
      teamcircleone:{
        width: 70,
        height: 70,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#f9f9f9",
        flexDirection:"row",
        justifyContent:"center"
      },
      teamcircletwo:{
        width: 55,
        height: 55,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center"
      },
      matchbox:{
        width:"100%",
        borderRadius:10,
        backgroundColor:"#fff",
        marginTop:5,
        justifyContent:"center",
        elevation:5,
        
      },
      icon_color:{
        color:colors.secondary_color
      }
      
})
export default Livematchbox;
