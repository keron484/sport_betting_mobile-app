import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Navtop from '../../components/Navtop';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, sizes } from '../../components/Utils/colors';
import { user_balance } from '../../Redux/Slices/Betslice';
import { useSelector } from 'react-redux';
import { Bethistorybox } from '../../components/Bethistory';
import { slipitems } from '../../Redux/Slices/Betslice';
import { Bonusbethistorybox } from '../../components/Bethistory';
import { bonus_bet_list } from '../../Redux/Slices/Betslice';
import { useNavigation } from '@react-navigation/native';
function Bethistory()
{
 const navigation = useNavigation();
 const account_balance = useSelector(user_balance);
 const betItems = useSelector(slipitems);
 const bonus_data = useSelector(bonus_bet_list);
 const placedBetitems = betItems.map((items) => {
      return(
        <Bethistorybox 
          id = {items.id}
          date={items.date}
          time={items.time}
          bettype={items.bettype}
          totalOdds={items.totalOdds}
          stake={items.stake}
          potential_wininings={items.potential_wininings}
          bonus_calcu={items.bonus_calcu}
     />
      )

 })
 const betdataBonus = bonus_data.map((items) => {
      return(
         <Bonusbethistorybox
         id = {items.id}
         date = {items.date}
         time = {items.time}
         bettype = {items.bettype}
         totalOdds = {items.totalOdds}
         stake = {items.stake}
         potential_wininings = {items.potential_wininings}
         />
      )
 })
    return(
          <>
           <Navtop></Navtop>
           <View style={styles.container}>
           <View style={styles.nav_three}>
               <Text style={styles.title}>Bet History</Text>
               
                 <View>
                   <Text style={styles.lable}>Current Account</Text>
                   <Text style={styles.acc_balnce}>{account_balance} ₣</Text>
                 </View>
               <View style={styles.box}>
               <View style={styles.icon_box}>
                  <Text style={{fontWeight:"700"}}>Weekly</Text>
                 <Icon name="calendar" size={30} style={styles.icon_color}></Icon>  
                 </View>
                 <View style={styles.icon_box}>
                  <Text style={{fontWeight:"700"}}>Monthly</Text>
                 <Icon name="calendar-number" size={30} style={styles.icon_color}></Icon>  
                 </View>
                 <Pressable onPress={() => {navigation.navigate("deposit")}}>
                 <View style={styles.icon_box}>
                  <Text style={{fontWeight:"700"}}>Deposit</Text>
                 <Icon name="add-circle" size={30} style={styles.icon}></Icon>  
                 </View>
                 </Pressable>
               </View>
             </View>
             <ScrollView>
                 {placedBetitems}
                 {betdataBonus}
                 <View style={styles.marginBox}>

             </View>
             <View style={styles.marginBox}>

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
    box:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       width:"100%",
       borderRadius:10,
       backgroundColor:"#f9f9f9",
       paddingHorizontal:10,
       marginTop:5,
       marginBottom:5,
       paddingVertical:5
    },
    acc_balnce:{
      fontSize:25,
      fontWeight:"900",
      marginTop:4,
      color:colors.text_color
    },
    title:{
      fontSize:18,
      fontWeight:"600",
      textAlign:"center",
      marginTop:10,
      color:colors.text_color
    },
    container:{
      flex:1,
      paddingHorizontal:5,
      backgroundColor:colors.lighter_white
    },
    nav_three:{
      width:"100%",
      borderRadius:8,
      backgroundColor:"#ffff",
      marginTop:5,
      paddingHorizontal:10,
      marginBottom:5
    },
    lable:{
      fontSize:13,
      fontWeight:"600",
      marginTop:10,
      color:colors.text_color
    },
    balance:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    icon:{
      color:colors.color_green
    },
    icon_box:{
      textAlign:"center",
      alignItems:"center"
    },
    icon_color:{
      color:colors.secondary_color
    }
})
export default Bethistory;