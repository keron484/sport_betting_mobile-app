import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { colors, sizes } from './Utils/colors'
export class Navtop extends Component {
  render() {
    return (
        <View style={styles.navbar}>
        <Text style={styles.logo}>BETBETA</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    navbar:{
        alignItems:"center",    
        backgroundColor:colors.color_white,
        paddingVertical:15,
        marginBottom:1,
        elevation:5
      },
      logo:{
        fontSize:18,
        fontWeight:"bold",
        color:"#095256"
      },
})
export default Navtop
