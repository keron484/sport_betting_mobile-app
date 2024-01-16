import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { colors, sizes } from './Utils/colors'
export class Navtop extends Component {
  render() {
    return (
        <View style={styles.navbar}>
        <Text style={styles.logo}>STRATOBET</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    navbar:{
        alignItems:"center",    
        backgroundColor:colors.color_white,
        paddingVertical:15,
        elevation:5,
        marginBottom:1
      },
      logo:{
        fontSize:20,
        fontWeight:"900",
        color:colors.secondary_color
      },
})
export default Navtop
