import React from 'react'
import {Text, StyleSheet, View, Pressable} from 'react-native';
import Navtop from '../../components/Navtop';
import { useNavigation } from '@react-navigation/native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
function CustomerSupport()
{
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
              <Text style={styles.title}>Customer Support</Text>
             <Text></Text>
          </View>
        <View>
            <Text>This is the customer support page</Text>
        </View>
         
        </>
    )
}
const styles = StyleSheet.create({
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
export default CustomerSupport;