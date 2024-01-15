import React from 'react';
import { View, Text } from 'react-native';
import Navtop from '../../components/Navtop';
import { StyleSheet } from 'react-native';
import { ScrollView, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { sizes, colors } from '../../components/Utils/colors';
import { PreMatchFixtures } from '../../Data/Fixtures';
import Prematchitem from '../../components/Prematchitem';
function Matches({route}) {

  const {league_name, league_title} = route.params;
  const findArrayByName = (PreMatchFixtures, arrayName) => {
    const matchingArray = PreMatchFixtures[arrayName];
    return matchingArray;
  }
  const selectedArray = findArrayByName(PreMatchFixtures, league_name);
  const navigation = useNavigation();
  return(
    <>
          <Navtop></Navtop>
          <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </Pressable>
              <Text style={styles.title}>{league_title}</Text>
             <Text></Text>
          </View>
      <ScrollView >
           <View style={styles.container}>
                 <Prematchitem selectedArray={selectedArray} league_name={league_name} league_title={league_title}/>   
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
     color:"#2A4747"
   },
   scores:{
     fontSize:25,
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
    fontWeight:"600",
    marginRight:sizes.size_30,
    color:colors.text_color
  }
})
export default Matches;