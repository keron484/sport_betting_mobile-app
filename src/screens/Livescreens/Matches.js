import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import Navtop from '../../components/Navtop';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, sizes } from '../../components/Utils/colors';
import { useNavigation } from '@react-navigation/native';
import LivematchBox from './Matchbox';
import { LivematchesFixtures } from '../../Data/Fixtures';
function Livematches({route}){
 const navigation = useNavigation();
 const {league_name, league_title} = route.params;
 const findArrayByName = (LivematchesFixtures, arrayName) => {
  const matchingArray = LivematchesFixtures[arrayName];
  return matchingArray;
}
const selectedArray = findArrayByName(LivematchesFixtures, league_name);

    return(
        <>
                  <Navtop></Navtop>
          <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
                    <Icon name='chevron-back' size={25}></Icon>
               </Pressable>
              <Text style={styles.title}>{league_title}</Text>
             <Text></Text>
          </View>
      <ScrollView >
           <View style={styles.container}>
             <LivematchBox selectedArray={selectedArray} league_name={league_name} league_title={league_title}/>
           </View>
           <View style={styles.marginBox}>

            </View>
            <View style={styles.marginBox}>

            </View>
            <View style={styles.marginBox}>

           </View>
            <View style={styles.marginBox}>

           </View>
      </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
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
     paddingHorizontal:10
   },
   teams_logo_area:{
     marginBottom:20,
     flexDirection:"row",
     justifyContent:"center"
   },
   score_area:{
     textAlign:"center",
     color:colors.text_color
   },
   scores:{
     fontSize:25,
     fontWeight:"900",
     letterSpacing:2,
     color:colors.text_color
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
     fontWeight:"800"
   },
   team_logo:{
       width:"75%",
       height:"75%"
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
   },
   container:{
      flex:1,
      paddingHorizontal:5,
      paddingTop:5,
      backgroundColor:"#f9f9f9"
   },
   navTwo:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:sizes.size_15,
    backgroundColor:colors.color_white,
    width:"100%",
    paddingHorizontal:sizes.size_10
  },
  badge:{
     width:40,
     height:40,
     borderRadius:40,
     backgroundColor:colors.lighter_white,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"center"
  },
  title:{
    fontSize:sizes.size_16,
    fontWeight:"800",
    marginRight:sizes.size_30,
    color:colors.text_color
  }
})
export default Livematches;