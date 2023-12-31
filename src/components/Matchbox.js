import React from 'react-native';
import {View, Text, StyleSheet, Image} from "react-native";
export const Livematchbox = () => {
    return(
        <>
           <View style={styles.matchbox}>
          <View style={styles.match_lable}>
            <View style={styles.lable_two}>
              <View style={styles.bagde_sm}>
                <Text>IC</Text>
              </View>
              <Text style={styles.text_lable}>UEFA Champions League</Text>
            </View>
            <View style={styles.bagde_list}>
            <View style={styles.bagde_sm}>
                <Text>IC</Text>
              </View>
              <View style={styles.bagde_sm}>
                <Text>IC</Text>
              </View>
            </View>
          </View>
          <View style={styles.teams_logo_area}>
            <View style={styles.team_box}>
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
                <Image source={require('../../assets/Logos/man_city.png')} style={styles.team_logo}></Image>
              </View>
            </View>
            <Text style={styles.team_name}>Man City</Text>
            </View>
            <View style={{alignItems:"center", marginHorizontal:20, marginTop:10}}>
              <Text style={styles.scores}>2:1</Text>
              <Text>2-half, 65:00</Text>
            </View>
            <View style={styles.team_box}>
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
              <Image source={require('../../assets/Logos/inter_milan.png')} style={styles.team_logo}></Image>
              </View>
            </View>
            <Text style={styles.team_name}>Inter Milan</Text>
            </View>
          </View>
           <View style={styles.btn_box}>
           <View style={styles.betbtn}>
           <Text style={styles.lable_text}>W1</Text>
           <Text style={styles.odds_text}>2.00</Text>
           </View>
           <View style={styles.betbtn}>
           <Text style={styles.lable_text}>W1</Text>
           <Text style={styles.odds_text}>2.00</Text>
           </View>
           <View style={styles.betbtn}>
           <Text style={styles.lable_text}>W1</Text>
           <Text style={styles.odds_text}>2.00</Text>
           </View>
           </View>
        </View>
        </>
    )
} 
const styles = StyleSheet.create({
    team_name:{
        fontSize:15,
        fontWeight:"600"
      },
      team_logo:{
          width:"75%",
          height:"75%"
      },
    matchbox:{
        width:"100%",
        height:220,
        borderRadius:8,
        backgroundColor:"#fff",
        marginTop:5,
        justifyContent:"center"
      },
      teamcircleone:{
        width: 80,
        height: 80,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#f9f9f9",
        flexDirection:"row",
        justifyContent:"center"
      },
      teamcircletwo:{
        width: 65,
        height: 65,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center"
      },
      btntext:{
         fontSize:13,
         fontWeight:"bold",
         color:"#ffff"
      },
      textstyle:{
        fontSize:12,
        fontWeight:"500",
        color:"#2A4747"
      },
      textlarge:{
        fontSize:25,
        fontWeight:"bold"
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
        fontWeight:"700",
      },
      lable_text:{
        fontSize:14,
        fontWeight:"500"
      },
      text_color:{
        color:"#2A4747"
      },
      btn_box:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      teams_logo_area:{
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"center"
      },
      score_area:{
        textAlign:"center",
        color:"#2A4747"
      },
      scores:{
        fontSize:40,
        fontWeight:"900",
        letterSpacing:2
      },
      team_box:{
        alignItems:"center"
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
        fontWeight:"600"
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
       
      }
})