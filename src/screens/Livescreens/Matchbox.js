import React from "react"
import {Pressable, View, Text, Image, StyleSheet} from 'react-native';
import { Market_btn } from "../../components/buttons/buttons";
import {useState, useEffect} from 'react';
import { sizes, colors } from "../../components/Utils/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
function LivematchBox(props)
{
    const matches_arry = props.selectedArray;
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
  const navigation = useNavigation();
    return(
        <> 
          {matches_arry.map((items) => {
            return(
                <>
        <Pressable  onPress={() => {navigation.navigate('Livematchdetails', {id:items.id, league_name:props.league_name, league_title:props.league_title})}}>
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
            <View style={{alignItems:"center", marginHorizontal:10, marginTop:10}}>
              <Text style={styles.scores}> {items.htscore}:{items.atscore} </Text>
              <Text style={styles.lable}>1-Half, {formatTime(time)}</Text>
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
          <Text style={styles.marketLable}>1X2</Text>
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
    marketLable:{
       fontSize:sizes.size_16,
       marginHorizontal:sizes.size_10,
       color:colors.text_color,
       fontWeight:"700"
    },
    marginBox:{
        width:"100%",
        paddingVertical:sizes.size_30,  
        marginBottom:sizes.size_10
      },
      container:{
        backgroundColor:"#f9f9f9",
       alignItems:"center",
       justifyContent:"center",
       paddingHorizontal:10,
       flex:1
      },
      market:{
        fontSize:16,
        fontWeight:"700",
        color:colors.text_color
     },
     odds:{
        fontSize:16,
        fontWeight:"900",
        color:colors.text_color
     },
     lable:{
      fontSize:15,
      fontWeight:"600",
      color:colors.text_color
     }, 
     btn_box:{
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
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
         fontSize:35,
         fontWeight:"900",
         letterSpacing:2
       },
       team_box:{
        flexDirection:"row",
         alignItems:"center"
       },
       bagde_sm:{
         width:35,
         height:35,
         backgroundColor:"#f9f9f9",
         borderRadius:50,
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
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
         fontWeight:"800",
         marginHorizontal:5
       },
       team_logo:{
           width:"60%",
           height:"60%",
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
         paddingVertical:8,
         marginBottom:sizes.size_5
       },
       betbtn:{
         width:"32%",
         borderRadius:5,
         backgroundColor:colors.lighter_white,
         flexDirection:'row',
         justifyContent:"space-between",
         paddingVertical:10,
         paddingHorizontal:8,
         marginHorizontal:5
       },
       icon_color:{
         color:colors.secondary_color
       },
       icon:{
         color:colors.secondary_color
       }
})
export default LivematchBox;
