import { Text, View, StyleSheet,  Pressable } from 'react-native'
import React from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
function Tournamentitem(props)
{
   const navigation = useNavigation();
    const [isshowing, setIshowing] = useState(true);
    const Toggle = () => {
       setIshowing(prevalue => !prevalue);
    }
    const championships = props.leagues
    return(
        <>
         <Pressable onPress={Toggle}>
         <View style={styles.box_one} key={props.id}>
             <View style={styles.box_item}>
             <View style={styles.badge_sm}>
               <Text>IC</Text>  
             </View>
            <Text style={styles.boxitem_lable}>{props.title}</Text>
             </View>
            <View style={styles.badge_xsm}>
               <Text>
                  <Icon name="chevron-down-outline" size={20} styles={isshowing ? styles.rotate : null}></Icon>
               </Text>
             </View>
           </View>
         </Pressable>
           <View style={isshowing ? styles.display_none : null}>
           <View style={styles.box_two}>
              {championships.map((items) => {
                return(
                    <>
                     <Pressable onPress={() => navigation.navigate(items.link)}>
                     <View style={styles.dropdown_item}>
                       <View style={styles.badge_sm}>
                         <Text>ic</Text>
                          </View>
                          <Text style={styles.boxitem_lable}>{items.lable}</Text>
                       </View>
                     </Pressable>
                    </>
                )
              })}
           </View>
           </View>
        </>
    )
}
const styles = StyleSheet.create({
    rotate:{
     transform:"rotate(180deg)"
    },
    display_none:{
     display:"none"
    }, 
    badge_sm:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"#f9f9f9",
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
       backgroundColor:"#f9f9f9",
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