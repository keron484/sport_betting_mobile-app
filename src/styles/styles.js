import { StyleSheet } from "react-native";
import { colors, sizes } from "../components/Utils/colors";
export const betslipstyle = StyleSheet.create({
    /*badges start */
      bagdeSm:{
        width:35,
        height:35,
        backgroundColor:colors.lighter_white,
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:sizes.size_2
      },
      badgeLg:{
        width:50,
        height:50,
        backgroundColor:colors.lighter_white,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        marginRight:sizes.size_5
     },
      badgeIcon:{
        width:50,
        height:50,
        backgroundColor:colors.lighter_white,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:sizes.size_5
       },
      /* badges end */
      
      /*team circle container */
      teamcircleoneMd:{
        width: 70,
        height: 70,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:colors.lighter_white,
        flexDirection:"row",
        justifyContent:"center"
      },
      teamcircletwoMd:{
        width: 55,
        height: 55,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center"
      },
      teamcircleoneLg:{
        width: 80,
        height: 80,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:colors.lighter_white,
        flexDirection:"row",
        justifyContent:"center"
      },
      teamcircletwoLg:{
        width: 65,
        height: 65,
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center"
      },
      /*team circle container ends */

      /*buttons*/
      btn_box:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
      },
      betbtn:{
        width:"32%",
        borderRadius:5,
        backgroundColor:colors.lighter_white,
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:8,
        marginHorizontal:5
      },
      btnActive:{
        width:"48%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#095256",
        marginVertical:5,
        paddingVertical:11,
     },
     btnInactive:{
        width:"48%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:5,
        paddingVertical:11
     },
     btnGroup:{
       width:"65%",
       flexDirection:"row",
       justifyContent:"space-between",
       marginTop:5,
       backgroundColor:colors.lighter_white,
       paddingHorizontal:5,
       borderRadius:10,
       marginBottom:5
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
      btndeposite:{
        width:100,
        backgroundColor:"#5cb85c",
        alignItems:"center",
        padding:10,
        borderRadius:10,
        position:"relative",
        bottom:-15
      },
      btnSignup:{
        width:"50%",
        paddingVertical:8,
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"steelblue",
        marginHorizontal:2
    },
    btnLoggin:{
      width:"50%",
      paddingVertical:8,
      borderRadius:50,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:colors.color_green,
      marginHorizontal:2
     },
     btntext:{
        fontSize:13,
        fontWeight:"bold",
        color:"#ffff"
     },
      btnActiveMd:{
        width:"33%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#095256",
        paddingVertical:12
      },
      btnActiveMd:{
        width:75,
        borderRadius:20,
        backgroundColor:"#439775",
        marginHorizontal:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:5,
        
     },
     btnInactiveMd:{
       width:140,
       borderRadius:20,
       backgroundColor:"#fff",
       marginHorizontal:5,
       paddingVertical:8,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
       borderWidth:sizes.size_2,
        borderColor:colors.secondary_color
     },
     btnInactiveMd:{
        width:"33%",
        paddingVertical:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    betBtnsm:{
        width:"25%",
        backgroundColor:"#5cb85c",
        alignItems:"center",
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:10,

    },
    betBtnmd:{
        width:"30%",
        borderRadius:10,
        padding:10,
        backgroundColor:colors.lighter_white,
        marginHorizontal:5,
        flexDirection:'row',
        justifyContent:"space-between"
      },
      /*buttons end*/



      /*text styles */
      btntext:{
        fontSize:13,
        fontWeight:"bold",
        color:"#ffff"
     },
      textLenght:{
        width:65
      },
      marketLable:{
        fontSize:sizes.size_16,
        marginHorizontal:sizes.size_10,
        color:colors.text_color,
        fontWeight:"700"
     },
     odds:{
        fontSize:16,
        fontWeight:"900",
        color:colors.text_color
     },
     lable:{
      fontSize:15,
      fontWeight:"600",
      color:colors.text_color
     }, 
     score_area:{
        textAlign:"center",
        color:"#2A4747"
      },
      scores:{
        fontSize:35,
        fontWeight:"900",
        letterSpacing:2
      },
      market:{
        fontSize:16,
        fontWeight:"700",
        color:colors.text_color
     },
     lable_two:{
        flexDirection:"row",
        alignItems:"center"
      },
      text_lable:{
        marginHorizontal:5,
        fontSize:14,
        fontWeight:"600"
      },
      team_name:{
        fontSize:15,
        fontWeight:"800",
        marginHorizontal:5
      },
      title:{
        marginTop:5,
         fontSize:18,
         fontWeight:"700",
         color:"#2A4747"
      },
      lable_text:{
       marginStart:2,
       fontSize:18,
       fontWeight:"700",
       marginVertical:10
      },
      textlarge:{
        fontSize:25,
        fontWeight:"bold",
        color:colors.text_color
      },

      odds_text:{
        fontSize:15,
        fontWeight:"700",
        color:colors.text_color
      },
      lable_text:{
        fontSize:14,
        fontWeight:"500",
        color:colors.text_color
      },
      text_color:{
       color:colors.text_color
      },
      textstyle:{
        fontSize:12,
        fontWeight:"500",
       color:colors.text_color
      },
      active_lable:{
        fontSize:14,
        fontWeight:"600",
        color:"#ffff"
      },
      inactive_lable:{
         fontSize:14,
         fontWeight:"600",
         color:"#095256"
      },
      score_area:{
        textAlign:"center",
       color:colors.text_color
      },
      scores:{
        fontSize:40,
        fontWeight:"900",
        letterSpacing:2
      },
      team_name:{
        fontSize:15,
        fontWeight:"600"
      },
      lable_two:{
        flexDirection:"row",
        alignItems:"center"
      },
      text_lable:{
        marginHorizontal:5,
        fontSize:14,
        fontWeight:"600"
      },
      match_lable:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
        paddingHorizontal:10,
        marginBottom:5
      },
      signName:{
        fontSize:16,
        fontWeight:"600",
        color:colors.lighter_white
      },
      title:{
        fontSize:18,
        fontWeight:"700",
        color:colors.text_color
     },
     textstyle:{
        fontSize:12,
        fontWeight:"500",
        color:colors.text_color
      },
      textlarge:{
        fontSize:25,
        fontWeight:"900",
        color:colors.text_color
      },
      text_color:{
        color:colors.text_color
      },
      text_white:{
        color:"#2A4747",
        fontSize:15,
        marginHorizontal:2,
        fontWeight:"800"
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
      },
      colorGreen:{
        color:colors.color_green,
        marginHorizontal:5
      },
      textGreen:{
        color:colors.color_green,
        fontSize:18,
        fontWeight:"900"
      },
      inactive_lable:{
        fontSize:15,
        fontWeight:"600",
        color:"#439775"
      },
      active_lable:{
         fontSize:15,
         marginHorizontal:15,
         fontWeight:"600",
         color:"#fff"
      },
      balance:{
        fontSize:25,
        fontWeight:"900",
        marginVertical:2,
        color:colors.text_color
    },
    logo:{
        fontSize:18,
        fontWeight:"bold",
        color:"blue"
      },
      fs_1:{
        fontSize:15,
        marginVertical:1,
        fontWeight:"700",
        color:colors.text_color
    },
    oddsTwo:{
        fontSize:15,
        fontWeight:"900",
        marginVertical:1,
        color:colors.text_color
    },
    
    text_normal:{
        fontSize:14,
        fontWeight:"800",
        color:colors.text_color
     },
    
    btn_lable:{
        color:"#fff",
        fontSize:14,
        fontWeight:"800"
   },
    
    lable_incative:{
        color:"#095256",
        fontSize:14,
        fontWeight:"800"
    },
    
    btn_name:{
        fontSize:16,
        fontWeight:"800",
        color:"#fff"
    },
    progress_lable:{
        position:"relative",
        left:20,
        fontSize:15,
        fontWeight:"700",
        color:"#fff"
    },
    text_range:{
        color:"#2A4747",
        marginTop:5,
        fontWeight:"800",
        fontSize:15
    },
    market_name:{
        marginStart:10,
        fontSize:16,
        fontWeight:"700",
        color:colors.text_color
      },
      statusValue:{
         marginVertical:3,
         fontSize:16,
         fontWeight:"900",
         color:"#4682b4"
      },
      pillLable:{
        fontSize:sizes.size_13,
        fontWeight:"600",
        color:colors.color_white
      },
      details_item:{
        marginVertical:3,
        fontSize:16,
        fontWeight:"900",
        color:colors.text_color
      },
      validate:{
        marginVertical:3,
        fontSize:16,
        fontWeight:"900",
        color:colors.color_green
      },
      betdetails:{
       marginTop:5,
       paddingHorizontal:4,
       color:colors.text_color
     },
     details_lable:{
       flexDirection:"row",
       justifyContent:"space-between"
     },
     deslable_one:{
       fontSize:12,
       fontWeight:"600",
       color:colors.text_color
     },
     deslable_three:{
       fontSize:12,
       fontWeight:"600",
       color:colors.text_color
     },
     deslable_four:{
        fontSize:14,
        fontWeight:"bold",
        color:colors.text_color
     },
     textNormal:{
        fontSize:16,
        fontWeight:"600",
        marginBottom:sizes.size_4,
        color:colors.text_color
      },
      textWhite:{
        fontSize:16,
        color:colors.color_white,
        fontWeight:"600"
      },
      title:{
        fontSize:16,
        fontWeight:"600",
        color:"#2A4747"
     },
     text_center:{
       alignItems:"center"
     }, 
      textLenght:{
      width:65
    },
      market_name:{
      marginStart:10,
      fontSize:16,
      fontWeight:"900",
      color:colors.text_color
    },
      odds_text:{
      fontSize:15,
      fontWeight:"800",
      color:colors.text_color
    },
     team_name:{
        fontSize:15,
        fontWeight:"800",
        color:colors.text_color
        },
        text_lable:{
         marginHorizontal:5,
         fontSize:14,
         fontWeight:"600",
         color:colors.text_color
       },
      lable:{
        fontSize:15,
        fontWeight:"700",
        color:colors.text_color
        },
      /*text styles ends */


      /*container styles____ this will include all of the flexbox container or any container with the flex attribute */
      container:{
        backgroundColor:colors.lighter_white,
       alignItems:"center",
       justifyContent:"center",
       paddingHorizontal:10,
       flex:1
      },
      btn_box:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      teams_logo_area:{
        marginBottom:5,
        flexDirection:"row",
        justifyContent:"center"
      },
      team_box:{
        flexDirection:"row",
         alignItems:"center"
       },
       match_lable:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
        paddingHorizontal:10,
        marginBottom:5
      },
      matchbox:{
        width:"100%",
        borderRadius:10,
        backgroundColor:"#fff",
        marginTop:5,
        justifyContent:"center",
        paddingVertical:8,
        marginBottom:sizes.size_5
      },
      group:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
     },
     matchbox:{
        width:"100%",
        height:220,
        borderRadius:8,
        backgroundColor:"#fff",
        marginTop:5,
        justifyContent:"center"
      },
      container:{
        flex:1,
        paddingHorizontal:8,
        paddingTop:5,
        backgroundColor:colors.lighter_white
     },
     marginBox:{
        width:"100%",
        paddingVertical:sizes.size_30,
        backgroundColor:colors.lighter_white,
        marginBottom:sizes.size_10
      },
      navtwo:{
        backgroundColor:"#fff",
        alignItems:"center",
        paddingHorizontal:10,
     },
     bagde_list:{
        flexDirection:"row",
      },
      teams_logo_area:{
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"center"
      },
      
      team_box:{
        alignItems:"center"
      },
      marginBox:{
        width:"100%",
        paddingVertical:sizes.size_30,  
        marginBottom:sizes.size_10
      },
       bagde_list:{
         flexDirection:"row",
       },
       nav_list:{
        flexDirection:"row",
        marginBottom:5,
       },
       container:{
        backgroundColor:colors.lighter_white,
        alignItems:"center",
        justifyContent:"center",
        flex:1
      },
      navbar:{
        alignItems:"center",    
        color:"steelblue",
        backgroundColor:colors.lighter_white,
        padding:15,
        marginBottom:5
      },
      navbartwo:{
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:sizes.size_6
      },
      nav_container:{
        width:"100%",    
        backgroundColor:"#fff",
        marginBottom:5,
        paddingHorizontal:sizes.size_8,
        paddingVertical:sizes.size_10,
        elevation:5
      },
      navtwo:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:10,
        paddingVertical:7
     },
     container:{
        flex:1,        
    },
    childone:{
        flex:11,
        paddingHorizontal:5,
        paddingVertical:5,
    },
    childtwo:{
        flex:19,
        backgroundColor:"#fff",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingHorizontal:8,
        paddingVertical:5
    },
    box_one:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:6,
        paddingHorizontal:10,
        paddingTop:6,
        paddingBottom:6,
        marginTop:2
    },
    box_two:{
        width:"100%",
        backgroundColor:colors.lighter_white,
        borderRadius:10,
        paddingHorizontal:10,
        marginBottom:5,
        paddingBottom:15
    },
    box_three:{
        width:"100%",
        backgroundColor:colors.lighter_white,
        borderRadius:10,
        marginTop:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:5,
        paddingVertical:2
    },
    
    input_box:{
        width:"73%",
        borderRadius:10,
        marginTop:5,
        borderColor:"#5cb85c",
        borderWidth:1,
        paddingVertical:7,
        paddingHorizontal:10
    },
    
    progress_box:{
        width:"100%",
        height:"5%",
        backgroundColor:"#E6E6FA",
        borderRadius:50,
        marginTop:2
    },
    lable:{
        width:"100%",
        backgroundColor:colors.lighter_white,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:5,
        paddingHorizontal:5,
        marginTop:5,
        paddingVertical:8,
        color:colors.text_color
    },
    box_two_dex:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:13
    },
    input_area:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
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
      bet_container:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:8,
        marginBottom:sizes.size_5
      },
       items_text:{
       flexDirection:"row",
       justifyContent:"space-between",
      },
      pot_winings:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center"
       },
      progress:{
       height:"100%",
       borderTopLeftRadius:50,
       borderBottomLeftRadius:50,
       backgroundColor:"#5cb85c",
       width:"10%",
       flexDirection:'row',
       alignItems:"center",
       justifyContent:"center"
      },
      winItem:{
        flexDirection:"row",
        alignItems:"center"
      },
      pill:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#4682b4",
        borderRadius:sizes.size_20,
        width:"auto",
        maxWidth:90
      },
      input_box:{
        width:"73%",
        borderRadius:10,
        marginTop:5,
        borderColor:"#5cb85c",
        borderWidth:1,
        paddingVertical:7,
        paddingHorizontal:10
    },
    icon_group:{
        flexDirection:"row",
        alignItems:"center"
     },
     bet_desc:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:5,
      borderBottomWidth:2,
      borderColor:colors.lighter_white,
      paddingBottom:4      
     },
     desc_items:{
        flexDirection:"row",
        alignItems:"center"
      },
      matchbox:{
        width:"100%",
        borderRadius:10,
        backgroundColor:"#fff",
        marginTop:5,
        justifyContent:"center",
        elevation:5,  
      },
      navTwo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:sizes.size_15,
        backgroundColor:colors.color_white,
        width:"100%",
        paddingHorizontal:sizes.size_10
      },
      box_one:{
        width:"47%",
        alignItems:"center",
        borderRadius:sizes.size_10,
        marginHorizontal:sizes.size_10
      },
      box:{
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:sizes.size_5
      },
      input_box:{
        flexDirection:"row",
        justifyContent:"flex-start"
      },
      form:{
        width:"100%",
        borderRadius:sizes.size_10,
        backgroundColor:colors.color_white,
        paddingHorizontal:sizes.size_15,
        paddingVertical:sizes.size_10
      },
      form_container:{
         paddingHorizontal:sizes.size_10,
         marginTop:sizes.size_30
      },
      method_lable:{
        flexDirection:"row",
        justifyContent:"center",
        paddingVertical:sizes.size_10,
        backgroundColor:colors.secondary_color,
        width:"100%"
      },
      container:{
        flex:1,
        paddingHorizontal:5,
        paddingTop:5,
        backgroundColor:colors.lighter_white
     },
     navtwo:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:10,
        paddingVertical:15
     },
     btn:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:sizes.size_10,
        marginBottom:sizes.size_20,
        marginTop:sizes.size_15,
        backgroundColor:colors.secondary_color,
        borderRadius:10
      },
      input:{
         width:"158%",
         borderRadius:sizes.size_5,
         backgroundColor:colors.lighter_white,
         fontSize:sizes.size_18,
         fontWeight:"700",
         paddingVertical:sizes.size_8,
         color:colors.text_color,
         paddingStart:10
      },
      teams_logo_area:{
        marginBottom:5,
        flexDirection:"row",
        justifyContent:"center"
      },
      titleBox:{
        marginVertical:sizes.size_10,
        alignItems:"center"
     },
     team_box:{
        alignItems:"center",
        flexDirection:"row"
      },
      lable_two:{
        flexDirection:"row",
        alignItems:"center"
      },
      match_lable:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          marginTop:5,
          paddingHorizontal:10,
          marginBottom:5
      },
      bagde_list:{
          flexDirection:"row",
        },
        btn_box:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:5
            },
           score_area:{
             textAlign:"center",
             color:colors.text_color
           },
     /*container styles end */
    
    /*team logo______ this includes the styles of all the team logo*/ 
    team_logo:{
        width:"75%",
        height:"75%"
    },
    team_logo:{
        width:"70%",
        height:"70%",
        objectFit:"contain"
    },
    mtn:{
        width:80,
        height:80,
        marginTop:sizes.size_10,
        marginBottom:sizes.size_10,
        objectFit:"contain"
      },
    /*team logo ends*/ 



         
    /*icon styles______ this is the styles of all the icons including custom icons*/   
    icon_color:{
        color:colors.secondary_color
      },
      icon:{
        color:colors.secondary_color
      },   
    /*icon styles ends here*/      
           

    displayNone:{
        display:"none"
      },  
          bg_color:{
            backgroundColor:colors.lighter_white
          },
      
})