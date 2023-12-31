import React from "react-native";
import {View, Text, TouchableOpacity} from "react-native";
import { betslipstyle } from "../../styles/styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { slipActions } from "../../Redux/Slices/BetSlipslice";
import { useDispatch } from 'react-redux'
function Slipitems(props){
    const id = props.id
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(slipActions.removeFromslip(id))
    }
    const odds =  props.odd
    return(
        <>
        <View style={betslipstyle.box_one} key={props.id}>
                    <View style={betslipstyle.items_text}>
                    <Text style={betslipstyle.fs_1}>{props.match_name}</Text>
                     <TouchableOpacity onPress={removeItem}>
                     <Icon name="close-circle" size={24} style={betslipstyle.icon}></Icon>
                     </TouchableOpacity>
                    </View>
                    <Text style={betslipstyle.fs_1}>{props.match_date} , {props.kick_off_time} </Text>
                    <View style={betslipstyle.lable}>
                        <Text style={betslipstyle.fs_1}>{props.market_category}: {props.market_lable}</Text>
                        <Text style={betslipstyle.odds}>{odds}</Text>
                    </View>
                </View>
        </>
    )
}
export default Slipitems;