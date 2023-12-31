import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import Navtop from "../../components/Navtop";
import { colors, sizes } from "../../components/Utils/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
import { message_list } from "../../Redux/Slices/Betslice";
import { useDispatch } from "react-redux";
import { placebetActions } from "../../Redux/Slices/Betslice";
import { useNavigation } from "@react-navigation/native";
function MessageItem(props){
    const id = props.id;
    const dispatch = useDispatch();
    const DeleteMsg = () => {
        dispatch(placebetActions.removemessage(id));
    }
    return(
        <>
          <View style={styles.mgs_box} key={props.id}>
                <View style={styles.msgBoxheader}> 
                  <Text style={styles.msgBoxtitle}>{props.title}</Text>
                  <View style={styles.badge_ms}>
                    <Text>
                        <Pressable onPress={DeleteMsg}>
                        <Icon name="trash" size={25} style={styles.iconColor}></Icon>
                        </Pressable>
                    </Text>
                  </View>
                </View>
                <View>
                    <Text style={styles.msgBody}>
                        {props.body}
                    </Text>
                </View>
            </View>
        </>
    )
}
function Messages(){
    const messages = useSelector(message_list);
    const navigation = useNavigation();
    return(
        <>
        <Navtop></Navtop>
        <View style={styles.navTwo}>
               <Pressable onPress={() => navigation.goBack()}>
               <View style={styles.badge}>
                 <Text>
                    <Icon name='chevron-back' size={25}></Icon>
                 </Text>
               </View>
               </Pressable>
              <Text style={styles.title}>Messages</Text>
             <Text></Text>
          </View>
        <View style={styles.container}>
             {messages.map((items) => {
                return(
                    <>
                     <MessageItem 
                        id={items.id}
                        title={items.title}
                        body={items.body}
                     />
                    </>
                )
             })}
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    iconColor:{
       color:colors.color_danger       
    },
    msgBody:{
       fontSize:sizes.size_17,
       fontWeight:"600"
    },
    msgBoxtitle:{
      fontSize:sizes.size_18,
      fontWeight:"700",
      color:colors.text_color
    },
    badge_ms:{
        width:45,
        height:45,
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.lighter_white
    },
    container:{
        backgroundColor:colors.lighter_white,
        paddingHorizontal:5,
        marginTop:5
    },
    mgs_box:{
      width:"100%",
      borderRadius:10,
      backgroundColor:colors.color_white,
      paddingHorizontal:10,
      paddingVertical:5,
      borderStartWidth:sizes.size_5,
      borderColor:colors.color_green
    },
    msgBoxheader:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:5,
      alignItems:"center",
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
export default Messages;