import React from 'react'
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native'
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authactions } from '../../Redux/Slices/Authslice';
function Login(){
  // calling the use navigator hook
 const navigation = useNavigation();
 // calling the use dispatch hook
 const dispatch = useDispatch();
 //natigating to home page
 const home = () => {
   navigation.navigate("Popular");
 }
 // login function
 function HandleLogin(){
    dispatch(authactions.LoginAccount())
    home();
 }

    return(
        <>
          <View style={styles.container}>
             <View style={styles.childOne}>
                
            <View style={styles.navIcon}>
               <Pressable onPress={() => navigation.goBack()}>
               <Icon name='arrow-back' size={30} ></Icon>
               </Pressable>
            </View>
               
                <View>
                  <Text style={styles.desc}>Welcome Back</Text>
                  <Text>Login to your account</Text>
                </View>
                
             </View>
             <View style={styles.childtwo}>
                 <View style={styles.inputBox}>
                  <Text style={styles.lable}>UserID</Text>
                    <TextInput style={styles.input}
                      placeholder='Enter Account ID'
                    >
                    </TextInput>
                 </View>
                 <View style={styles.inputBox}>
                  <Text style={styles.lable}>Password</Text>
                    <TextInput style={styles.input}
                      placeholder='Enter Password'
                    >
                    </TextInput>
                 </View>
                 <Pressable style={styles.loginBtn} onPress={HandleLogin} >
                  <Text style={styles.btnName}>Login</Text>
                 </Pressable>
               <Text style={styles.titleTwo}>
                 or sign in with
               </Text>
               <View style={styles.thirdBox}>
                  <View style={styles.boxOne}>
                    <Text>
                      <Icon name='logo-facebook' size={33} style={styles.icon}></Icon>
                    </Text>
                  </View>
                  <View style={styles.boxOne}>
                    <Text>
                    <Icon name='logo-google' size={30} style={styles.iconOne}></Icon>
                    </Text>
                  </View>
                  <View style={styles.boxOne}>
                    <Text>
                    <Icon name='logo-twitter' size={30} style={styles.icon}></Icon>
                    </Text>
                  </View>
               </View>
                <Pressable>
                <Text style={styles.titleThree}>
                  Don't Have An Account? <Text style={styles.link}>Sign up</Text> 
               </Text>
                </Pressable>
             </View>
          </View>         
        </>
    )
}
const styles = StyleSheet.create({
     navIcon:{
       marginTop:sizes.size_10,
       flexDirection:"row",
       justifyContent:"flex-start"
     },
     iconTwo:{
      color:"blue"
     },
     icon:{
       color:"steelblue"
     },
     titleTwo:{
      fontSize:sizes.size_19,
      marginVertical:10,
      color:colors.text_color  
     },
     input:{
      borderWidth:sizes.size_1,
      borderColor:"#ccc",
      fontSize:16,
      fontWeight:"500",
      paddingStart:sizes.size_10,
      borderRadius:sizes.size_10,
      shadowColor:"#f9f9f9",
      elevation:35,
      color:colors.text_color    
    },
     lable:{
        fontSize:sizes.size_16,
        marginBottom:sizes.size_10,
        fontWeight:"600",
        color:colors.text_color
     },
     inputBox:{
       marginVertical:sizes.size_15,
       
     },
     loginBtn:{
      width:"100%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:sizes.size_10,
      marginVertical:sizes.size_15,
      backgroundColor:"steelblue",
      borderRadius:sizes.size_10,
      elevation:10,
     },
     btnName:{
        fontSize:18,
        fontWeight:"500",
        color:colors.color_white,

     },
     desc:{
        fontSize:sizes.size_25,
        fontWeight:"800",
        color:colors.text_color
     },
     logo:{
       textAlign:"center",
       color:"steelblue",
       fontSize:sizes.size_28,
       fontWeight:"900",
       marginTop:50,
       elevation:50
     },
     link:{
       color:"steelblue",
       fontSize:16,
       color:colors.text_color  
     },
     titleThree:{
        textAlign:"center",
        fontSize:16,
        color:colors.text_color  
     },
     thirdBox:{
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
     },
     boxOne:{
         width:"20%",
         paddingVertical:sizes.size_15,
         backgroundColor:colors.color_white,
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         marginHorizontal:sizes.size_10,
         marginVertical:sizes.size_20,
         borderRadius:sizes.size_10,
         elevation:5
     },
     titleTwo:{
        textAlign:"center",
        fontSize:sizes.size_16,
        textTransform:"capitalize",
        fontWeight:"500",
        marginVertical:sizes.size_10,
        color:colors.text_color  
     },
     container:{
        flex:1,
        backgroundColor:colors.color_white
     },
     childOne:{
      flex:2,
      paddingHorizontal:sizes.size_20,
      flexDirection:"column",
      justifyContent:"space-around"
     },
     childtwo:{
      flex:5,
      paddingTop:sizes.size_30,
      paddingHorizontal:sizes.size_20
     },
})
export default Login;