import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import Navtop from '../../components/Navtop';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { user_balance } from '../../Redux/Slices/Betslice';
function Userprofile()
{
  const balance = useSelector(user_balance);
  const navigation = useNavigation();
  const isDecimal = (number) => {
    const numberString = number.toString();
    numberString.includes(".");
  }
    return(
        <>
          <Navtop></Navtop>
          <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </Pressable>
              <Text style={styles.title}>My Account</Text>
             <Text></Text>
          </View>
          <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textNormal}>Financies</Text>
             <View style={styles.boxOne}> 
                <View>
                  <Text>Account Balance</Text>
                  <Text style={styles.balance}>{isDecimal(balance) ? balance.toFixed(2) : balance} ₣</Text>
                </View>
                <View>
                   <Text> 
                     <Icon name='add-circle' size={35} style={styles.colorGreen}> </Icon>
                   </Text>
                </View>
             </View>
             <Text style={styles.textNormal}>Account Management</Text>
             <View style={styles.boxTwo}> 
                <View style={styles.spaceBetween}>
                <View style={styles.boxThree}>
                <View style={styles.badge}>
                  <Icon name='arrow-redo-outline' size={30} style={styles.colorGreen}> </Icon>
                </View>
                 <Text style={styles.textNormal}>Withdraw</Text>
                </View>
                </View>
                <View style={styles.spaceBetween}>
                <View style={styles.boxFour}>
                <View style={styles.badge}>
                  <Text>
                  <Icon name='arrow-undo-outline' size={30} style={styles.colorGreen}> </Icon>
                  </Text>
                </View>
                 <Text style={styles.textNormal}>Deposit</Text>
                </View>
                </View>
             </View>
             <Text style={styles.textNormal}>Account Info</Text>
             <View style={styles.accInfo}>
                <View style={styles.childBoxone}>
                  <Text style={styles.lableOne}>Username</Text>
                  <Text style={styles.lableTwo}>@username.com</Text>
                </View>
                 <View style={styles.childBoxone}>
                 <Text style={styles.lableOne}>Account Id</Text>
                 <Text style={styles.lableTwo}>23423SADASDASD</Text>
                </View>
                <View style={styles.childBoxone}>
                <Text style={styles.lableOne}>E-mail</Text>
                <Text style={styles.lableTwo}>@eample.gmail.com</Text>
                </View>
                <View style={styles.childBoxone}>
                <Text style={styles.lableOne}>Telepone Number</Text>
                <Text style={styles.lableTwo}>+237-XXX-XXX</Text>
                </View>
                <View style={styles.childBoxtwo}>
                 <View>
                  <Text style={styles.lableOne}>Bonus Type</Text>
                   <Text style={styles.lableTwo}>5000%</Text>
                 </View>
                 <View style={styles.badge}>
                  <Icon name='chevron-forward' size={25} style={styles.colorGreen}></Icon>
                 </View>
                </View>
             </View>
             <Text style={styles.textNormal}>Personal Details</Text>
             <View style={styles.accInfo}>
                <View style={styles.childBoxone}>
                  <Text style={styles.lableOne}>First Name</Text>
                  <Text style={styles.lableTwo}>@username.com</Text>
                </View>
                 <View style={styles.childBoxone}>
                 <Text style={styles.lableOne}>Last Name</Text>
                 <Text style={styles.lableTwo}>23423SADASDASD</Text>
                </View>
                <View style={styles.childBoxone}>
                <Text style={styles.lableOne}>City</Text>
                <Text style={styles.lableTwo}>@eample.gmail.com</Text>
                </View>
                <View style={styles.childBoxtwo}>
                 <View>
                 <Text style={styles.lableOne}>Country</Text>
                <Text style={styles.lableTwo}>@country</Text>
                 </View>
                </View>
             </View>
             <Text style={styles.textNormal}>Become A Pathner</Text>
             <View style={styles.boxOne}>
             <View style={styles.childBoxtwo}>
                <View style={styles.badge}>
                  <Text>
                    <Icon name='share-social-outline' size={25} style={styles.colorGreen}></Icon>
                  </Text>
                </View>
                 <Text style={styles.textNormal}>Become one of our pathners</Text>
                </View>
             </View>
             <Text style={styles.textNormal}>Account Settings</Text>
             <View style={styles.boxOne}>
              <View>
              <View style={styles.childBoxtwo}>
                <View style={styles.badge}>
                  <Text>
                    <Icon name='settings-outline' size={25} style={styles.colorGreen}></Icon>
                  </Text>
                </View>
                 <Text style={styles.textNormal}>Settings</Text>
                </View>
                <View style={styles.childBoxtwo}>
                <View style={styles.badge}>
                  <Text>
                    <Icon name='log-out-outline' size={25} style={styles.colorRed}></Icon>
                  </Text>
                </View>
                 <Text style={styles.textNormal}>Logout</Text>
                </View>
              </View>
             </View>
             <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
          </View>
          </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
  colorRed:{
    color:colors.color_danger
  },
  marginBox:{
    width:"100%",
    paddingVertical:sizes.size_30,
    backgroundColor:colors.lighter_white,
    marginBottom:sizes.size_10
  },
  childBoxtwo:{
    paddingBottom:8,
    paddingTop:5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  lableTwo:{
    fontSize:sizes.size_15,
    fontWeight:"500",
    color:colors.text_color
  },
  lableOne:{
    fontSize:sizes.size_17,
    fontWeight:"600",
    color:colors.text_color
  },
  childBoxone:{
     width:"100%",
     paddingVertical:sizes.size_10,
     borderBottomWidth:sizes.size_1,
     borderColor:"#ccc"
  },
  accInfo:{
     width:"100%",
     backgroundColor:colors.color_white,
     borderRadius:sizes.size_10,
     paddingHorizontal:sizes.size_10,

  },
  spaceBetween:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  boxThree:{
     flexDirection:'row',
     alignItems:"center",
     width:"100%",
     borderBottomWidth:1,
     paddingVertical:sizes.size_6,
     borderColor:"#cccc"
  },
  boxFour:{
    flexDirection:'row',
    alignItems:"center",
    width:"100%",
    paddingVertical:sizes.size_5
 },
  badge:{
     width:35,
     height:35,
     borderRadius:35,
     alignItems:"center",
     justifyContent:"center",
     flexDirection:"row",
  },
  boxTwo:{
    width:"100%",
    paddingVertical:sizes.size_10,
    backgroundColor:colors.color_white,
    borderRadius:sizes.size_10,
    marginVertical:sizes.size_5,
    paddingHorizontal:sizes.size_10
  },
  textNormal:{
     fontSize:sizes.size_18,
     color:colors.text_color,
     fontWeight:"500",
     position:"relative",
     left:sizes.size_10,
     marginTop:sizes.size_2,
     marginBottom:sizes.size_10
  },
  balance:{
     fontSize:sizes.size_25,
     fontWeight:"900",
     color:colors.text_color,
  },
  colorGreen:{
    color:colors.color_green,
  },
  boxOne:{
     width:"100%",
     paddingVertical:sizes.size_10,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between",
     backgroundColor:colors.color_white,
     borderRadius:sizes.size_10,
     marginVertical:sizes.size_5,
     paddingHorizontal:sizes.size_10
  },
   title:{
     fontSize:sizes.size_16,
     fontWeight:"800",
     marginRight:sizes.size_30,
     color:colors.text_color
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
      borderRadius:35,
      backgroundColor:colors.lighter_white,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
   },
   container:{
     backgroundColor:colors.lighter_white,
     paddingHorizontal:sizes.size_5
   }
})
export default Userprofile;