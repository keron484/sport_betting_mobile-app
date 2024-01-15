import React from 'react';
import Navtop from '../../components/Navtop';
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { user_balance, b_account } from '../../Redux/Slices/Betslice';
import { useNavigation } from '@react-navigation/native';
function Defaultbetslip(){
    const navigation = useNavigation()
    const acc_balance = useSelector(user_balance);
    const bonus_acc = useSelector(b_account);
    const isDecimal = (number) => {
        const numberString = number.toString();
        return numberString.includes(".");
    }
    return(
        <>
         <Navtop></Navtop>
          <View style={styles.container}>
             <Pressable onPress={() => {navigation.navigate('deposit')}}>
             <View style={styles.boxOne}>
                  <View style={styles.childOne}>
                  <View style={styles.badge}>
                    <Text>
                        <Icon name='cash-outline' size={25} style={styles.iconColor}></Icon> 
                    </Text>
                 </View>
                   <View>
                   <Text style={styles.lable}>Deposite</Text>
                   <Text style={styles.balc}> {isDecimal(acc_balance) ? acc_balance.toFixed(2) : acc_balance} ₣ </Text>
                   </View>
                  </View>
                  <View>
                     <Text>
                        <Icon name='add-circle' size={35} style={styles.colorGreen}></Icon>
                     </Text>
                  </View>
             </View>
             </Pressable>
             <Pressable>
                <View style={styles.boxOne}>
                    <View style={styles.childOne}>
                        <View style={styles.badge}>
                          <Text>
                            <Icon name='cash-outline' size={25} style={styles.iconColor}></Icon> 
                          </Text>
                        </View>
                        <View>
                            <Text style={styles.lable}>Bonus Account</Text>
                            <Text style={styles.balc}>{isDecimal(bonus_acc) ? bonus_acc.toFixed(2) : bonus_acc} ₣</Text>
                        </View>
                    </View>
                </View>
             </Pressable>
             <Pressable >
             <View style={styles.boxOne}>
                  <View style={styles.childOne}>
                  <View style={styles.badge}>
                    <Text>
                        <Icon name='ticket-outline' size={30} style={styles.iconColor}></Icon> 
                    </Text>
                 </View>
                   <View>
                   <Text style={styles.lable}>Load Betslip</Text>
                   </View>
                  </View>
                  <View>
                     <Text>
                        <Icon name='download-outline' size={35} style={styles.iconColor}></Icon>
                     </Text>
                  </View>
             </View>
             </Pressable>
          </View>
        </>
    )
}
const styles = StyleSheet.create({
    balc:{
         fontSize:sizes.size_20,
         fontWeight:"800",
         color:colors.text_color
    },
    colorGreen:{
        color:colors.color_green
    },
    iconColor:{
        color:colors.lighter_primary
    },
    lable:{
        fontSize:sizes.size_18,
        color:colors.text_color,
        fontWeight:"600"
    },
    badge:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:colors.lighter_white,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginEnd:sizes.size_10
    },
    childOne:{
        flexDirection:"row",
        alignItems:"center",
    },
    boxOne:{
       width:"100%",
       borderRadius:sizes.size_10,
       backgroundColor:colors.color_white,
       alignItems:"center",
       justifyContent:'space-between',
       paddingHorizontal:sizes.size_5,
       flexDirection:"row",
       marginTop:sizes.size_10,
       paddingVertical:sizes.size_10,
       elevation:sizes.size_2
    },
    container:{
        flex:1,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:sizes.size_8
    }
})
export default Defaultbetslip;