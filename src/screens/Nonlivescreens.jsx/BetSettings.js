import Navtop from "../../components/Navtop";
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, sizes } from "../../components/Utils/colors";
import { useNavigation } from "@react-navigation/native";
import { placebetActions } from "../../Redux/Slices/Betslice";
import { slipitems } from "../../Redux/Slices/Betslice";
import { useDispatch, useSelector } from "react-redux";
function Betsetting({route}){
    const navigation = useNavigation();
    const betslip = useSelector(slipitems);
    const back = () => {
        navigation.goBack();
    }
    const {id} = route.params;
    const betObj = betslip.find((items) => items.id === id)
    const dispatch = useDispatch();
    const potential_wininings = betObj.potential_wininings;
    const bonus_calcu = betObj.bonus_calcu
    const validateTowin = () => {
       dispatch(placebetActions.validateSlipWin({
          id,
          potential_wininings,
          bonus_calcu
       }))
    }
    return(
        <>
         <Navtop></Navtop>
         <View style={styles.container}>
           <View style={styles.navTwo}>
              <Pressable onPress={back}>
              <Icon name="chevron-back" size={24}></Icon>
              </Pressable>
              <Text style={styles.title}>Bet Settings</Text>
              <Text></Text>
           </View>
           <View style={styles.box}>
              <Pressable onPress={validateTowin}>
              <View style={styles.boxOne}>
                <View style={styles.badge}>
                    <Icon name="checkmark-circle" size={35} style={styles.colorIcon}></Icon>
                </View>
                 <View>
                 <Text style={styles.textNormal}>Validate to win {betObj.potential_wininings} {betObj.winStatus ? "hello" : "null"}</Text>
                 <Text style={styles.textDesc}>Validate to win</Text>
                 </View>
              </View>
              </Pressable>
           </View>
         </View>
        </>
    )
}
const styles = StyleSheet.create({
    colorIcon:{
      color:colors.secondary_color
    },
    badge:{
        width:50,
        height:50,
        borderRadius:40,
        backgroundColor:colors.lighter_white,
        marginHorizontal:sizes.size_5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    textDesc:{
       fontSize:sizes.size_14,
       color:colors.text_color,
       fontWeight:"600"
    },
    textNormal:{
        fontSize:sizes.size_16,
        color:colors.text_color,
        fontWeight:"700"
    },
    box:{
        paddingHorizontal:sizes.size_5
    },
    boxOne:{
        width:"100%",
        borderRadius:sizes.size_8,
        elevation:sizes.size_3,
        backgroundColor:colors.color_white,
        paddingVertical:sizes.size_15,
        paddingHorizontal:sizes.size_5,
        borderStartWidth:5,
        borderColor:colors.secondary_color,
        flexDirection:"row",
        alignItems:"center"
    },
    container:{
        flex:1,
        backgroundColor:colors.lighter_white
    },
    navTwo:{
        backgroundColor:colors.color_white,
        width:"100%",
        paddingVertical:sizes.size_15,
        flexDirection:"row",
        paddingHorizontal:sizes.size_5,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:sizes.size_5
    },
    title:{
        fontSize:18,
        fontWeight:"700",
        color:colors.text_color,
        marginEnd:sizes.size_15
    }
})
export default Betsetting