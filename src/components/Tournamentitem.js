import { Text, View, StyleSheet,  Pressable, Image } from 'react-native'
import React from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors, sizes } from './Utils/colors';
function Tournamentitem(props)
{
   const navigation = useNavigation();
    const [isshowing, setIshowing] = useState(true);
    const Toggle = () => {
       setIshowing(prevalue => !prevalue);
    }
    
    const championships = props.leagues;
    const league_title = props.league_title;
    const league_name= props.league_name;
    const toMatches = () => {
      navigation.navigate("matches", {league_title:league_title, league_name:league_name})
    }
    return(
        <>
         <Pressable onPress={championships <= 0 ? toMatches : Toggle}>
         <View style={styles.box_one} key={props.id}>
             <View style={styles.box_item}>
             <View style={styles.badge_sm}>
             <Image source={props.flag} style={styles.flag}></Image>  
             </View>
            <Text style={styles.boxitem_lable}>{props.title}</Text>
             </View>
            <View style={championships.length <= 0 ? styles.display_none : styles.badge_xsm} >
               <Text style={styles.count}>{championships.length}</Text>
               <Text style={styles.marginHor}>
                  <Icon name="chevron-down-outline" size={20} style={isshowing ? styles.rotate : null}></Icon>
               </Text>
             </View>
           </View>
         </Pressable>
           <View style={championships.length <= 0 ? styles.display_none : null}>
           <View style={isshowing ? styles.display_none : null}>
           <View style={styles.box_two}>
              {championships.map((items) => {
                return(
                    <>
                     <Pressable onPress={() => navigation.navigate(items.link, {league_title:items.league_title, league_name:items.league_name})} key={items.id}>
                     <View style={styles.dropdown_item}>
                       <View style={styles.badge_sm}>
                           <Image source={items.flag} style={styles.flag}></Image>
                          </View>
                          <Text style={styles.boxitem_lable}>{items.lable}</Text>
                       </View>
                     </Pressable>
                    </>
                )
              })}
           </View>
           </View>
           </View>
        </>
    )
}
const styles = StyleSheet.create({
   marginHor:{
      marginHorizontal:sizes.size_10
   },
   count:{
      color:colors.text_color,
      fontSize:14,
      fontWeight:"600"
   },
    flag:{
      width:"75%",
      height:"75%",
      objectFit:"contain",
      backgroundColor:colors.lighter_white,
    },
    display_none:{
     display:"none"
    }, 
    badge_sm:{
        width:40,
        height:40,
        borderRadius:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    box_one:{
       width:"100%",
       borderRadius:10,
       backgroundColor:"#fff",
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:10,
       paddingVertical:5,
       marginVertical:3
    },
    box_item:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center"
    },
    badge_xsm:{
       width:35,
       height:35,
       borderRadius:40,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
    },
    boxitem_lable:{
       fontSize:15,
       fontWeight:"600",
       color:"#2A4747",
       marginHorizontal:10
    },
    box_two:{
       width:"100%",
       backgroundColor:"#fff",
       marginTop:5,
       borderRadius:10,
       flexDirection:"column",
       justifyContent:"flex-start",
       paddingHorizontal:10,
       paddingVertical:5,
       marginBottom:5
    },
    dropdown_item:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"flex-start",
       marginBottom:5
    }
})
export default Tournamentitem;