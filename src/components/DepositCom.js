import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, Pressable} from 'react-native';
import Navtop from './Navtop';
import { placebetActions } from '../Redux/Slices/Betslice';
import { useState } from 'react';
import { sizes, colors } from './Utils/colors';
import { useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { authactions } from '../Redux/Slices/Authslice';
function DepositComponent(){
    const [deposite_amount, setStDeposite_amount] = useState("");
    const dispatch = useDispatch();
    const AccountDeposite = () => {
        dispatch(placebetActions.accountdeposite(Number(deposite_amount)))
      }
    const Back = () => {
        dispatch(authactions.Deposit());
    }
    return(
      <>
      <Navtop></Navtop>
      <View style={styles.navTwo}>
               <Pressable>
               <View style={styles.badge}>
                 <Pressable onPress={Back}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
                 </Pressable>
               </View>
               </Pressable>
              <Text style={styles.title}>Account Deposit</Text>
             <Text></Text>
          </View>
       <View style={styles.form_container}>
         <View style={styles.form}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>MTN MOBILE MONEY</Text>
            <Image source={require('../assets/Logos/mtn_logo.png')} style={styles.mtn}></Image>
          </View>
          <View style={styles.input_box}>
             <View>
             <View>
            <Text style={styles.textNormal}>Amount: (Min:1 - Max:1000000 )</Text>
            <TextInput
              placeholder='Enter Amount'
              keyboardType='numeric'
              style={styles.input}
              onChangeText={(newvalue) => setStDeposite_amount(newvalue)}
              value={deposite_amount}
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
           onPress={AccountDeposite
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
      </>
    )
}
const styles = StyleSheet.create({
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
         marginTop:sizes.size_30
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
       navtwo:{
          backgroundColor:"#fff",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          paddingHorizontal:10,
          paddingVertical:15
       },
       title:{
          fontSize:16,
          fontWeight:"600",
          color:"#2A4747"
       },
       text_center:{
         alignItems:"center"
       },
       navTwo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:sizes.size_15,
        backgroundColor:colors.color_white,
        width:"100%",
        paddingHorizontal:sizes.size_10
      }
})
export default DepositComponent;