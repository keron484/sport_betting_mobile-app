import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Navtop from '../../components/Navtop';
import { StyleSheet } from 'react-native';
import { ScrollView, Image, Pressable } from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from "react"
import {useDispatch } from 'react-redux';
import { placebetActions } from '../../Redux/Slices/Betslice';
import { useNavigation } from '@react-navigation/native';
function Withdraw() {
  const navigation = useNavigation();
  const [modialone, Setmodialone] = useState(false);
  const [modialtwo, Setmodialtwo] = useState(false);
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const WithDraw = () => {
    dispatch(placebetActions.cashout(Number(amount)))
  }
  function toggleModialone()
  {
     Setmodialone(prevalue => !prevalue);
  }
  function toggleModialtwo()
  {
     Setmodialtwo(prevalue => !prevalue);
  }
  return (
     <>
           <Navtop></Navtop>
           <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
               <View style={styles.badge}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </View>
               </Pressable>
              <Text style={styles.title}>WithDraw From Account</Text>
             <Text></Text>
          </View>
      <View style={styles.req_box}>
         <View>
         <Text style={styles.color_white}>
          Withdraw Requests
        </Text>
         </View>
         <View>
           <View style={styles.badge_sm}>
            <Icon name='chevron-down-outline' size={20}></Icon>
           </View>
         </View>
      </View>
      <ScrollView style={styles.bg_color}>
          { <>
            <View style={styles.container}>
          <Text style={styles.payment_title}>Mobile Money payments</Text>
          <View style={styles.box}>
          <View style={styles.box_one}>
            <Image 
              style={styles.image} 
              source={require('../../assets/Logos/mtn_logo.png')} 
              ></Image>
            <View style={styles.method_lable}>
              <Text style={styles.color_white}>
                MTN MOMO
              </Text>
            </View>
          </View>
          <View style={styles.box_one}>
            <Image style={styles.image}
            source={require('../../assets/Logos/mtn_logo.png')} 
            ></Image>
            <View style={styles.method_lable}>
              <Text style={styles.color_white}>
                Orange MOMO
              </Text>
            </View>
          </View>
          </View>
        </View>
          </>}
         {modialone && <>
          <View style={styles.form_container}>
         <View style={styles.form}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>MTN MOBILE MONEY</Text>
            <Image source={require('../../assets/Logos/mtn_logo.png')} style={styles.mtn}></Image>
          </View>
          <View style={styles.input_box}>
             <View>
             <View>
            <Text style={styles.textNormal}>Amount: (Min:1 - Max:1000000 )</Text>
            <TextInput
              placeholder='Enter Amount'
              keyboardType='numeric'
              style={styles.input}
              onChangeText={(newvalue) => setAmount(newvalue)}
              value={amount}
             ></TextInput>
          </View>
          <View>
            <Text style={styles.textNormal}>Phone Number</Text>
            <TextInput
             placeholder='Username'
             style={styles.input}
            >
            </TextInput>
          </View>
          <View>
            <Text style={styles.textNormal}>Email</Text>
            <TextInput
             placeholder='Email'
             style={styles.input}
            >
            </TextInput>
          </View>
             </View>
          </View>
          <Pressable 
          style={styles.btn}
           onPress={WithDraw
          }
          >
            <View>
              <Text style={styles.textWhite}>
                Proceed to checkout
              </Text>
            </View>
          </Pressable>
        </View>
         </View>
         </>}
         {modialtwo && <>
          <View style={styles.form_container}>
         <View style={styles.form}>
            <View style={styles.justifybetween}>
              <Pressable>
                <Icon name='chevron-back' size={25}></Icon>
              </Pressable>
            <Text style={styles.title}>Orange Mobile Money</Text>
            <Text style={styles.title}></Text>
            </View>
          <View style={styles.titleBox}>
            <Image source={require('../../assets/Logos/orange_logo.png')} style={styles.mtn}></Image>
          </View>
          <View style={styles.input_box}>
             <View>
             <View>
            <Text style={styles.textNormal}>Amount: (Min:1 - Max:1000000 )</Text>
            <TextInput
              placeholder='Enter Amount'
              keyboardType='numeric'
              style={styles.input}
              onChangeText={(newvalue) => setAmount(newvalue)}
              value={amount}
             ></TextInput>
          </View>
          <View>
            <Text style={styles.textNormal}>Phone Number</Text>
            <TextInput
             placeholder='Username'
             style={styles.input}
            >
            </TextInput>
          </View>
          <View>
            <Text style={styles.textNormal}>Email</Text>
            <TextInput
             placeholder='Email'
             style={styles.input}
            >
            </TextInput>
          </View>
             </View>
          </View>
          <Pressable 
          style={styles.btn}
           onPress={WithDraw}
          >
            <View>
              <Text style={styles.textWhite}>
                Proceed to checkout
              </Text>
            </View>
          </Pressable>
        </View>
         </View>
         </>}
      </ScrollView>
      </>
  );
}
const styles = StyleSheet.create({
  justifybetween:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  textNormal:{
    fontSize:16,
    fontWeight:"600",
    marginBottom:sizes.size_4
  },
  textWhite:{
    fontSize:16,
    color:colors.color_white,
    fontWeight:"600"
  },
  btn:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:sizes.size_10,
    marginBottom:sizes.size_20,
    marginTop:sizes.size_15,
    borderRadius:50,
    backgroundColor:colors.secondary_color
  },
  input:{
     width:"158%",
     borderRadius:sizes.size_5,
     backgroundColor:colors.lighter_white,
     fontSize:sizes.size_18,
     fontWeight:"700",
     paddingVertical:sizes.size_8,
     color:colors.text_color,
     paddingStart:10
  },
  input_box:{
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  mtn:{
    width:60,
    height:55,
    marginTop:sizes.size_10,
    marginBottom:sizes.size_10
  },
  titleBox:{
     marginVertical:sizes.size_10,
     alignItems:"center"
  },
  form:{
    width:"100%",
    borderRadius:sizes.size_10,
    backgroundColor:colors.color_white,
    paddingHorizontal:sizes.size_15,
    paddingVertical:sizes.size_10
  },
  form_container:{
     paddingHorizontal:sizes.size_10,
     marginTop:sizes.size_10
  },
  badge_sm:{
     width:40,
     height:40,
     borderRadius:40,
     backgroundColor:colors.lighter_white,
     alignItems:"center",
     flexDirection:"row",
     justifyContent:"center"
  },
  req_box:{
    width:"100%",
    paddingVertical:10,
    marginTop:5,
    backgroundColor:colors.color_white,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    alignItems:"center"
  },
  color_white:{
    colors:"#fff",
    fontWeight:"700",
    fontSize:16
  },
  image:{
   width:"100%",
   height:100
  },
  method_lable:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:sizes.size_10,
    backgroundColor:colors.secondary_color,
    width:"100%"
  },
  box_one:{
    width:"47%",
    alignItems:"center",
    borderRadius:sizes.size_10,
    marginHorizontal:sizes.size_10
  },
  box:{
    flexDirection:"row",
    justifyContent:"center",
    paddingHorizontal:sizes.size_5
  },
  bg_color:{
    backgroundColor:colors.lighter_white
  },
  payment_title:{
     textAlign:"center",
     fontSize:sizes.size_16,
     color:colors.text_color,
     fontWeight:"600",
     marginVertical:sizes.size_10
  },
   container:{
      flex:1,
      paddingHorizontal:5,
      paddingTop:5,
      backgroundColor:colors.lighter_white
   },
   text_center:{
     alignItems:"center"
   },
   navTwo:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:sizes.size_10,
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
  title:{
    fontSize:sizes.size_16,
    fontWeight:"600",
    marginRight:sizes.size_30,
    color:colors.text_color
  }
})
export default Withdraw;