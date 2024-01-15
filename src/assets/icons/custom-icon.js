import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, sizes } from "../../components/Utils/colors"
import { useSelector } from "react-redux"
import { count } from "../../Redux/Slices/BetSlipslice";
export const Ticketicon = () => {
    const num_events = useSelector(count);
    const styles = StyleSheet.create({
        count:{
          fontSize:10,
          color:colors.color_white,
          letterSpacing:1,
          fontWeight:"800" 
        },
        badge_xsm:{
           width:29,
           height:29,
           borderWidth:4,
           borderColor:colors.color_white,
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"center",
           backgroundColor:colors.color_danger,
           borderRadius:20,
           position:"relative",
           left:25,
           margin:0,
           zIndex:999,
           bottom:12
        },
        icon:{
            color:colors.color_white
        },
        badge:{
            width:43,
            height:43,
            borderRadius:sizes.size_30,
            backgroundColor:colors.primary_color,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            position:"relative",
            top:num_events < 1 ? 0 : 10,
            marginBottom:num_events < 1 ? 10 : 0
        },
        badge_sm:{
            width:30,
            height:30,
            borderRadius:30,
            backgroundColor:colors.primary_color,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        },
       
        display_none:{
            display:"none"
        }
    })
    return(
        <>
         <View style={styles.badge}>
            <Icon name="ticket" size={23} style={styles.icon}></Icon>
         </View>
         <View style={num_events < 1 ? styles.display_none : styles.badge_xsm}>
            <Text style={styles.count}>{num_events}</Text>
         </View>
        </>
    )
}
function BethistoryIcon(){
    const styles = StyleSheet.create({
        iconOne:{
           position:"relative",
           top:10,
           right:5,
           color:"#4785b8"
        },
        iconTwo:{
            position:"relative",
            backgroundColor:colors.lighter_white,
            left:2,
            bottom:9,
            borderRadius:50,
            color:"#4785b8"
        },
    })
    return(
        <>
         <Icon name='ticket' size={35} style={styles.iconOne}>
         </Icon>
         <Icon name='checkmark-circle' size={24} style={styles.iconTwo}></Icon>
        </>
    )
}
export default BethistoryIcon;

