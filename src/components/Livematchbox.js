import React, { Pressable } from "react-native";
import {View, Text, StyleSheet, Image} from "react-native"
import { Livedata } from "../Data/Livedata";
import { colors} from "./Utils/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { Market_btn } from "./buttons/buttons";
import { useNavigation } from "@react-navigation/native";
function Livematchbox() {
  const navigation = useNavigation();
    return(
        <>
        {Livedata.map((items) => {
            return(
                <>
                   <Pressable onPress={() => {navigation.navigate('matchdetailslive')}}>
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
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
                <Image source={require('../assets/Logos/man_utd.png')} style={styles.team_logo}></Image>
              </View>
            </View>
            <Text style={styles.team_name}>{items.htname}</Text>
            </View>
            <View style={{alignItems:"center", marginHorizontal:20, marginTop:10}}>
              <Text style={styles.scores}>{items.htscore}:{items.atscore}</Text>
              <Text style={styles.lable}>{items.timelable},  {items.matchtime} </Text>
            </View>
            <View style={styles.team_box}>
            <View style={styles.teamcircleone}>
              <View style={styles.teamcircletwo}>
              <Image source={require('../assets/Logos/man_city.png')} style={styles.team_logo}></Image>
              </View>
            </View>
             <View>
             <Text style={styles.team_name}>{items.awname}</Text>
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
  },
      btn_box:{
       flexDirection:"row",
       justifyContent:"space-between",
       marginBottom:5
       },
       lable:{
       fontSize:15,
       fontWeight:"700"
       }, 
      teams_logo_area:{
        marginBottom:5,
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
      },
      team_name:{
        fontSize:15,
        fontWeight:"800"
      },
      team_logo:{
          width:"70%",
          height:"70%"
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
