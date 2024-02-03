import React from 'react';
import { View, Text, StyleSheet, ScrollView,  Pressable} from 'react-native';
import Navtop from '../../components/Navtop';
import Livematchbox from '../../components/Livematchbox';
import { useSelector } from 'react-redux';
import { user_balance } from '../../Redux/Slices/Betslice';
import { Navdata } from '../../Data/Livedata';
import { colors, sizes } from '../../components/Utils/colors';
import { useNavigation } from '@react-navigation/native';
import { loggedin } from '../../Redux/Slices/Authslice';
function Popular(props){
  const account_balance = useSelector(user_balance);
  const  ishavingDecimal = (number) => {
     const numberString = number.toString();
     return numberString.includes(".");    
  }
  const isloggedin = useSelector(loggedin)
   let {navigate} = props.navigation;
   const haddlepress = () => navigate('Login')
   const navigation = useNavigation();
    return(
      <>
            <View>
        <Navtop></Navtop>
      </View>
      <View>
       <View style={styles.nav_container}>
       <ScrollView horizontal={true} >
       <View style={styles.nav_list}>
             <View style={styles.btn_active}>
                <Text style={styles.active_lable}>Live</Text>
             </View>
             {Navdata.map((items) => {
              return(
                <>
                <Pressable>
                <View style={styles.btn_inactive} key={items.id}>
                <Text style={styles.inactive_lable}>{items.title}</Text>
             </View>
                </Pressable>
                </>
              )
             })} 
        </View>
       </ScrollView>
       <View style={styles.navbartwo}>
           {isloggedin && <>
            <View>
           <Text style={styles.textstyle}>
              Account balance
            </Text>
            <Text style={styles.textlarge}>
                {ishavingDecimal(account_balance) ? account_balance.toFixed(2) : account_balance} ₣
            </Text>
           </View>
            <View>
            <Pressable onPress={() => {navigation.navigate('deposit')}}>
            <View style={styles.btndeposite}>
              <Text style={styles.btntext}>Deposite</Text>
            </View>
            </Pressable>
            </View>
           </>}
           {!isloggedin && <>
            <Pressable style={styles.btnSignup}>
            <View>
               <Text style={styles.signName}>Sign Up</Text>
            </View>
           </Pressable>
           <Pressable style={styles.btnLoggin} onPress={haddlepress}>
              <View>
                <Text style={styles.signName}>Login</Text>
              </View>
           </Pressable>
           </>}
        </View>
       </View>
        <ScrollView alwaysBounceVertical={true}>
        <View style={styles.container}>
           <Livematchbox></Livematchbox>
           <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

             </View>
        </View>
        </ScrollView>
      </View> 
      </>
    )
}
const styles = StyleSheet.create({
  marginBox:{
    width:"100%",
    paddingVertical:sizes.size_30,
    backgroundColor:colors.lighter_white,
    marginBottom:sizes.size_10
  },
  signName:{
    fontSize:16,
    fontWeight:"600",
    color:colors.lighter_white
  },
  btnSignup:{
      width:"50%",
      paddingVertical:5,
      borderRadius:50,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"steelblue",
      marginHorizontal:2
  },
  btnLoggin:{
    width:"50%",
    paddingVertical:5,
    borderRadius:50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.color_green,
    marginHorizontal:2
},
  inactive_lable:{
    fontSize:15,
    fontWeight:"600",
    color:"#439775"
  },
  active_lable:{
     fontSize:15,
     marginHorizontal:15,
     fontWeight:"600",
     color:"#fff"
  },
  nav_list:{
     flexDirection:"row",
     marginBottom:5,
  },
  btn_active:{
     width:75,
     borderRadius:20,
     backgroundColor:"#439775",
     marginHorizontal:5,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"center",
     paddingVertical:5,
     
  },
  btn_inactive:{
    width:140,
    borderRadius:20,
    backgroundColor:"#fff",
    marginHorizontal:5,
    paddingVertical:5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:sizes.size_2,
     borderColor:colors.secondary_color
  },
  container:{
    backgroundColor:"#f9f9f9",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    paddingHorizontal:5
  },
  navbar:{
    alignItems:"center",    
    color:"steelblue",
    backgroundColor:"#f9f9f9",
    padding:15,
    marginBottom:5
  },
  logo:{
    fontSize:18,
    fontWeight:"bold",
    color:"blue"
  },

  navbartwo:{
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:sizes.size_6
  },
  nav_container:{
    width:"100%",    
    backgroundColor:"#fff",
    marginBottom:5,
    paddingHorizontal:sizes.size_8,
    paddingVertical:sizes.size_10,
    elevation:5
  },
  btndeposite:{
    width:100,
    backgroundColor:"#5cb85c",
    alignItems:"center",
    padding:10,
    borderRadius:10,
    position:"relative",
    bottom:-15
  },
  btntext:{
     fontSize:13,
     fontWeight:"bold",
     color:"#ffff"
  },
  textstyle:{
    fontSize:12,
    fontWeight:"500",
    color:colors.text_color
  },
  textlarge:{
    fontSize:25,
    fontWeight:"900",
    color:colors.text_color
  },
  text_color:{
    color:colors.text_color
  },
  
})
export default Popular;