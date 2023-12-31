import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
function Signup(){
    return(
        <>
                   <View style={styles.container}>
             <View style={styles.childOne}>
                
                <View>
                  <Text style={styles.logo}>STRATOBET</Text>
                </View>
                <View>
                  <Text style={styles.desc}>Welcome !!!</Text>
                  <Text>Create An Account</Text>
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
                 <View style={styles.loginBtn}>
                  <Text style={styles.btnName}>Create Account</Text>
                 </View>
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
                    <Icon name='logo-twitter' size={30} style={styles.iconTwo}></Icon>
                    </Text>
                  </View>
               </View>
               <Text style={styles.titleThree}>
                  Aready Have An Account? <Text style={styles.link}>Sign up</Text> 
               </Text>
             </View>
          </View>   
        </>
    )
}
const styles = StyleSheet.create({
    iconTwo:{
     color:"blue"
    },
    icon:{
      color:"steelblue"
    },
    titleTwo:{
     fontSize:sizes.size_19,
     marginVertical:10
    },
    input:{
     borderBottomWidth:1,
     borderColor:"#fbfbfb",
     fontSize:16,
     paddingBottom:0,
     fontWeight:"500"     
   },
    lable:{
       fontSize:sizes.size_16,
       marginBottom:sizes.size_10,
       fontWeight:"600"
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
     borderRadius:sizes.size_10
    },
    btnName:{
       fontSize:18,
       fontWeight:"500",
       color:colors.color_white,

    },
    desc:{
       fontSize:sizes.size_25,
       fontWeight:"800"
    },
    logo:{
      textAlign:"center",
      color:"steelblue",
      fontSize:sizes.size_28,
      fontWeight:"900",
      marginTop:50
    },
    link:{
      color:"steelblue",
      fontSize:16
    },
    titleThree:{
       textAlign:"center",
       fontSize:16
    },
    thirdBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    boxOne:{
        width:"20%",
        paddingVertical:sizes.size_15,
        backgroundColor:colors.lighter_white,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:sizes.size_10,
        marginVertical:sizes.size_20,
        borderRadius:sizes.size_10
    },
    titleTwo:{
       textAlign:"center",
       fontSize:sizes.size_16,
       textTransform:"capitalize",
       fontWeight:"500",
       marginVertical:sizes.size_10
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
export default Signup;