import React from 'react';
import { View, Text, StyleSheet, ScrollView,  Pressable } from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Navtop from '../../components/Navtop';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { slipitems } from '../../Redux/Slices/Betslice';
import { Bethistoryitems } from '../../components/Bethistory';
function Betdetails()
{
    // calling the use navigation function;
    const navigation = useNavigation();
    //pulling bet details data from store 
    const arry_one = useSelector(slipitems);
    // creating a route
    const back = () => {
        navigation.goBack();
    }
    return(
       <>
                <Navtop></Navtop>
       <View style={styles.container}>
        <View style={styles.childOne}>
           <View style={styles.boxOne}>
               <View style={styles.titleBox}>
                   <Pressable onPress={back}>
                   <Text>
                     <Icon name='chevron-back' style={styles.icon} size={20}></Icon>
                   </Text>
                   </Pressable>
                   <Text style={styles.title}>Bet Details</Text>
                   <Text></Text>
               </View>
               <View style={styles.BoxTwo}>
                 <View style={styles.BadgeSm}>
                    <Icon name='ticket' size={40} style={styles.icon}></Icon>
                 </View>
                 <View>
                     <Text style={styles.lableone}>ID:ASJKDH32984720893</Text>
                     <Text style={styles.lableone}>Bet Type: <Text style={styles.pill}>Accumulator</Text></Text>
                     <Text style={styles.lableone}>Date: <Text>12:00:23</Text> </Text>
                 </View>
               </View>
               <View style={styles.desBox}>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Odds</Text>
                      <Text style={styles.lableend}>38.9</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Stake</Text>
                      <Text style={styles.lableend}>10000  ₣</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Potential Winings</Text>
                      <Text style={styles.lableend}>38.9  ₣</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lable}>Bonus</Text>
                      <Text style={styles.lableend}>10000   ₣</Text>
                   </View>
                   <View style={styles.desItemOne}>
                      <Text style={styles.lableStat}>Status</Text>
                      <Text style={styles.status}>Accepted</Text>
                   </View>
               </View>
           </View>
        </View> 
        <View style={styles.childTwo}>
            <ScrollView style={styles.scroll}>
                 <Bethistoryitems />
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
     fontSize:sizes.size_12,
     fontWeight:"600",
     color:colors.text_color
   },
    BadgeSm:{
        width:60,
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
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
      color:colors.secondary_color  
    },
    lable:{
        fontSize:sizes.size_16,
        fontWeight:"600",
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
        marginVertical:sizes.size_2
    },
    titleBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:sizes.size_8
    },
    boxOne:{
      width:"100%",
      backgroundColor:colors.color_white,
      paddingHorizontal:sizes.size_5,
      paddingTop:sizes.size_5,
      paddingVertical:sizes.size_10,
      borderRadius:sizes.size_10,
      
    },
    container:{
        flex:1,
        backgroundColor:"#f9f9fb"
    }, 
    childOne:{
        flex:3,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:sizes.size_4,
        marginTop:sizes.size_2
    },
    childTwo:{
        flex:6,
        alignItems:"center"
    }
})
export default Betdetails;