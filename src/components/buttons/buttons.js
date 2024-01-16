import React, { Pressable } from "react-native";
import { Text,  StyleSheet} from "react-native"
import { slipActions } from "../../Redux/Slices/BetSlipslice";
import  { useDispatch, useSelector } from 'react-redux'
import { colors, sizes } from "../Utils/colors";

export const Market_btn = (props) => {
    const dispatch = useDispatch();
    const betitems = useSelector((state) => state.betslip.selections);
    const id = props.id;
    const match_date = props.match_date
    const match_name = props.match_name
    const market_category = props.market_category
    const kick_off_time = props.kick_off_time
    const market_lable = props.market_lable
    const odd = props.odd
    const awname = props.awname
    const atlogo = props.atlogo
    const htname = props.htname
    const htlogo = props.htlogo
    const parentId = props.parentId
    const addtobetslip = () => {
        dispatch(slipActions.addTobetslip({
        id,
        parentId,
        match_name,
        market_lable,
        odd,
        match_date,
        market_category,
        kick_off_time,
        awname,
        atlogo,
        htname,
        htlogo
        }))
    }
    const isInBetslip = betitems.some((items) => items.id === id);
    return(
        <>
          <Pressable style={isInBetslip ? styles.selected : styles.betbtn} onPress={addtobetslip}>
            <Text style={styles.displayNone} key={props.id}>
            {props.match_date} 
            {props.match_name} 
            {props.market_category} 
            {props.id} 
            {props.kick_off_time}
            </Text>
           <Text style={isInBetslip ? styles.textWhite :  styles.lable_text}>{props.market_lable}</Text>
           <Text style={isInBetslip ? styles.textWhite : styles.odds_text}>{props.odd}</Text>
          </Pressable>      
        </>
    )
}
const styles = StyleSheet.create({
  displayNone:{
    display:"none"
  },
  market_name:{
    marginStart:10,
    fontSize:16,
    fontWeight:"700",
    color:colors.text_color
  },
  betbtn:{
    width:"30%",
    borderRadius:10,
    padding:10,
    backgroundColor:colors.lighter_white,
    marginHorizontal:5,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  selected:{
    width:"30%",
    borderRadius:10,
    padding:10,
    backgroundColor:colors.secondary_color,
    marginHorizontal:5,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  odds_text:{
    fontSize:15,
    fontWeight:"900",
    color:colors.text_color
  },
  lable_text:{
    fontSize:15,
    fontWeight:"700",
    color:colors.text_color
  },
  textWhite:{
    color:colors.color_white,
    fontSize:sizes.size_15,
    fontWeight:"700"
  }
})