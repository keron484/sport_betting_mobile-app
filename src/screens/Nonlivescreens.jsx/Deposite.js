import React from 'react';
import Navtop from '../../components/Navtop';
import { ScrollView, Image, Pressable, View, Text, StyleSheet  } from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DepositComponent from '../../components/DepositCom';
import { toggleState } from '../../Redux/Slices/Authslice';
import { authactions } from '../../Redux/Slices/Authslice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function Deposite() 
{
  const navigation = useNavigation();
  const comState = useSelector(toggleState);
  const dispatch = useDispatch();
  const Link = () => {
     dispatch(authactions.Deposit());
  }
    return(
        <>
          {comState && <> 
            <Navtop></Navtop>
           <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </Pressable>
              <Text style={styles.title}>Account Deposit</Text>
             <Text></Text>
          </View>
           <ScrollView style={styles.bg_color}>
             <View style={styles.container}>
                 <Text style={styles.payment_title}>Mobile Money payments</Text>
             </View>
             <View style={styles.box}>
                <Pressable style={styles.boxTwo} onPress={Link}>
                    <Image source={require('../../assets/Logos/mtn_logo.png')} style={styles.logo}></Image>
                    <View style={styles.titleBox}>
                      <Text style={styles.textWhite}>MTN</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.boxTwo}>
                <Image source={require('../../assets/Logos/mtn_logo.png')} style={styles.logo}></Image>
                    <View style={styles.titleBox}>
                      <Text style={styles.textWhite}>Orange</Text>
                    </View>
                </Pressable>
             </View>
            </ScrollView>
          </>}

          {!comState && <> 
           {<DepositComponent></DepositComponent>}
          </>}
        </>
    )
}
const styles = StyleSheet.create({
  logo:{
    width:"100%",
    height:100,
    borderRadius:sizes.size_5
  },
  textWhite:{
    color:colors.color_white,
    fontSize:sizes.size_16,
    fontWeight:"700",
    marginTop:sizes.size_10
  },
  boxTwo:{
     marginHorizontal:sizes.size_10,
     width:"50%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:colors.secondary_color,
     paddingBottom:sizes.size_10,
     borderRadius:sizes.size_5
  },
  box:{
     width:"100%",
     flexDirection:"row",
     justifyContent:"center",
     paddingHorizontal:sizes.size_20
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
      paddingVertical:13
   },
   title:{
      fontSize:16,
      fontWeight:"600",
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
export default Deposite;