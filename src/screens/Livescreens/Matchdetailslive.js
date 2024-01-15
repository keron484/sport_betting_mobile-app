import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView, Image, Pressable } from 'react-native';
import { colors, sizes } from '../../components/Utils/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import Navtop from '../../components/Navtop';
import { Livedata } from '../../Data/Livedata';
import { useState, useEffect } from 'react';
function MatchdetailsLive({route})
{

  const data = [
    {
      id:1,
      lable:"1-half Corners"
    },
    {
      id:2,
      lable:"2-half Corners"
    },
    {
      id:3,
      lable:"Shots on Target"
    },
    {
      id:4,
      lable:"Shots 1-half"
    },
    {
      id:5,
      lable:"Player stats"
    },
    
  ]
  const { id } = route.params
  const navigation = useNavigation();

  const item = Livedata.find((item) => item.id === id);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time < 90 * 60) {
        setTime(time + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
    return(
        <>
        <Navtop></Navtop>
       <View style={styles.container}>
         <View style={styles.childone}>
           <View style={styles.title_box}>
                <Pressable onPress={() => {navigation.goBack()}}>
                <View>
                <Icon name='chevron-back-outline' size={25}></Icon>
               </View>
                </Pressable>
              <Text style={styles.lable}>England Premier League</Text>
              <Text></Text>
           </View>
           <View style={styles.desBoxtwo}>
           <View style={styles.desc_box}>
              <View style={styles.home_box}>
                  <View style={styles.textLength}>
                   <Text style={styles.homeName}>{item.htname}</Text>
                  </View>
                <Image source={item.htlogo} style={styles.logo}></Image>
              </View>
              <View style={styles.match_info}>
              <Text style={styles.textLarge}>{item.htscore}:{item.atscore}</Text>
              
              </View>
              <View style={styles.away_box}>
                <Image source={item.atlogo} style={styles.logo}></Image>
                <View style={styles.textLength}>
                 <Text style={styles.teamName}>{item.awname}</Text>
                </View>
              </View>
           </View>
           <View style={styles.infoBox}>
           <Text style={styles.lableTwo}>1-half (2-1), {formatTime(time)} </Text>
           </View>
              <View>
                <View style={styles.winPob}>
                   <Text style={styles.lableTwo}>Home 45%</Text>
                   <Text style={styles.lableTwo}>Draw 25%</Text>
                   <Text style={styles.lableTwo}>Away 20%</Text>
                </View>
                <View style={styles.probBox}>
                  <View style={styles.probBoxTwo}>
                  </View>
                  <View style={styles.probBoxOne}> 
                  </View>
                  <View style={styles.probBoxThree}>
                  </View>
                </View>
              </View>
         </View>
           </View>
         <View style={styles.childtwo}>
             <View>
              <ScrollView horizontal={true} style={styles.mt} >
                 <View style={styles.btn_active}>
                  <Text style={styles.active_lable}>
                    Full Time
                  </Text>
                 </View>
                  {data.map((items) => {
                    return(
                       <>
                      <View style={styles.btn_inactive} key={items.id}>
                         <Text style={styles.inactive_lable}>{items.lable}</Text>
                      </View>
                       </>
                    )
                  })}
              </ScrollView>
             </View>
             <ScrollView>
                   <View style={styles.box}>
                      <View style={styles.justify_content_between}>
                        <Text style={styles.lable}>
                          1X2
                        </Text>
                      </View>
                      <View style={styles.box_container}>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                W1
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                X
                             </Text>
                             <Text style={styles.odds}>
                              4.00
                             </Text>
                          </View>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                W2
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                   </View>
                   <View style={styles.box}>
                      <View style={styles.justify_content_between}>
                        <Text style={styles.lable}>
                          Double Chance
                        </Text>
                      </View>
                      <View style={styles.box_container}>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                1X
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                12
                             </Text>
                             <Text style={styles.odds}>
                              4.00
                             </Text>
                          </View>
                          <View style={styles.market_box}>
                             <Text style={styles.market}>
                                2X
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                   </View>
                   <View style={styles.box}>
                      <View style={styles.justify_content_between}>
                        <Text style={styles.lable}>
                          Both Teams to Score
                        </Text>
                      </View>
                      <View style={styles.box_container}>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Yes
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                                No
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                   </View>
                   <View style={styles.box}>
                      <View style={styles.justify_content_between}>
                        <Text style={styles.lable}>
                          Total
                        </Text>
                        <View style={styles.flex}>
                        <View style={styles.badge}>
                          <Text>14</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text>IC</Text>
                        </View>
                        </View>
                      </View>
                   </View>
                   <View style={styles.boxcontainer_two}>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Over
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Under
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                      <View style={styles.boxcontainer_two}>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Over
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Under
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                      <View style={styles.boxcontainer_two}>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Over
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Under
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                      <View style={styles.boxcontainer_two}>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Over
                             </Text>
                             <Text style={styles.odds}>
                              1.34
                             </Text>
                          </View>
                          <View style={styles.marketbox_two}>
                             <Text style={styles.market}>
                               Under
                             </Text>
                             <Text style={styles.odds}>
                              7.60
                             </Text>
                          </View>
                      </View>
                      <View style={styles.marginBox}>

            </View>
            <View style={styles.marginBox}>

            </View>
            <View style={styles.marginBox}>

           </View>
            <View style={styles.marginBox}>

           </View>
             </ScrollView>
         </View>
       </View>
        </>
    )
}
const styles = StyleSheet.create({
  textLength:{
    width:90
  },
    infoBox:{
        alignItems:"center",
        marginVertical:sizes.size_5
    },
    probBoxThree:{
      width:"55%",
      paddingVertical:sizes.size_4,
      backgroundColor:"blue",
      borderBottomEndRadius:sizes.size_4,
      borderTopEndRadius:sizes.size_4
    },
    probBoxOne:{
      width:"30%",
      paddingVertical:sizes.size_4,
      backgroundColor:colors.primary_color,
      borderEndWidth:sizes.size_5,
      borderColor:colors.color_white
    },
    probBoxTwo:{
      width:"15%",
      paddingVertical:sizes.size_4,
      backgroundColor:colors.color_danger,
      borderEndWidth:sizes.size_5,
      borderColor:colors.color_white,
      borderTopStartRadius:sizes.size_4,
      borderBottomStartRadius:sizes.size_4,
    },
    probBox:{
      width:"100%",
      borderRadius:sizes.size_30,
      backgroundColor:colors.color_white,
      flexDirection:"row",
    },
    winPob:{
       flexDirection:"row",
       justifyContent:"space-between",
       paddingHorizontal:sizes.size_5,
       marginTop:sizes.size_7,
       marginBottom:sizes.size_4
    },
    lableTwo:{
      fontSize:sizes.size_14,
      fontWeight:"700",
    },
    homeName:{
      marginEnd:sizes.size_10,
      fontWeight:"800",
      marginStart:sizes.size_10
    },
    marginBox:{
        width:"100%",
        paddingVertical:sizes.size_30,
        marginBottom:sizes.size_10
      },
      away_box:{
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
      },
      home_box:{
        flexDirection:"row",
         alignItems:"center",
         justifyContent:"center"
      },
      teamName:{
         fontSize:13,
         fontWeight:"800",
         color:colors.text_color,
         marginStart:sizes.size_10
      },
      textNormal:{
          fontSize:16,
          fontWeight:"700"
      },
      textLarge:{
        fontSize:30,
        fontWeight:"900",
        letterSpacing:5
      },
      match_info:{
         marginHorizontal:sizes.size_10,
         alignItems:"center",
      },
      desc_box:{
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         marginTop:sizes.size_30
      },
      desBoxtwo:{
        backgroundColor:"rgba(0, 0, 0, 0.2)",
        marginTop:10,
        paddingVertical:10,
        borderRadius:10,
        paddingHorizontal:sizes.size_10
      },
      logo:{
         width:40,
         height:40,
         objectFit:"contain"
      },
      badge_md:{
         width:35,
         height:35,
         borderRadius:40,
         backgroundColor:colors.color_white,
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"center",
      },
      title_box:{ 
         flexDirection:"row",
         justifyContent:"space-between",
         marginTop:sizes.size_10,
         alignItems:"center"
      },
      textWhite:{
          color:colors.lighter_white,
          fontSize:17,
          fontWeight:"600",
          marginEnd:sizes.size_15
      },
      flex:{
        flexDirection:"row",
      },
      badge:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:colors.lighter_white,
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         marginHorizontal:5
        },
        lable:{
          fontSize:17,
          fontWeight:"700",
          color:colors.text_color,
          marginVertical:3
      },
      box:{
        width:"100%",
        backgroundColor:colors.color_white,
        borderRadius:sizes.size_10,
        paddingTop:5,
        paddingBottom:4,
        paddingHorizontal:8,
        marginBottom:5
      },
      justify_content_between:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
      },
      market:{
        fontSize:16,
        fontWeight:"700"
      },
      odds:{ 
       fontSize:16,
       fontWeight:"900",
       color:colors.text_color
      },
      market_box:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"32%",
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:8,
        marginHorizontal:5
      },
      marketbox_two:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"48%",
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:8,
        marginHorizontal:5
      },
      marketbox_three:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:8,
        marginHorizontal:5
      },
      box_container:{ 
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      boxcontainer_two:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.color_white,
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:10
      },
      active_lable:{
        fontSize:16,
        fontWeight:"700",
        color:colors.lighter_white
      },
      mt:{
        marginVertical:10
      },
      btn_active:{
        borderRadius:50,
       backgroundColor:colors.secondary_color,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
       paddingVertical:5,
       paddingHorizontal:15
      },
      btn_inactive:{
        borderRadius:50,
        backgroundColor:colors.color_white,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:5,
        paddingHorizontal:15,
        marginHorizontal:6,
        borderWidth:2,
        borderColor:colors.secondary_color
      },
      inactive_lable:{
        fontSize:16,
        fontWeight:"700",
        color:colors.secondary_color
      },
      childtwo:{
        flex:5,
        backgroundColor:colors.lighter_white,
        paddingHorizontal:5,
      },
      childone:{ 
        flex:2,
        backgroundColor:"linear-gradient(107deg, rgb(13, 198, 180) 8.1%, rgb(33, 198, 138) 79.5%)",
        paddingHorizontal:sizes.size_10,
        paddingBottom:sizes.size_10
      },
       container:{
          flex:1,
          backgroundColor:colors.lighter_white
       },
       navtwo:{
          backgroundColor:"#fff",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          paddingHorizontal:10,
          paddingVertical:13
       },
       title:{
          fontSize:16,
          fontWeight:"600",
          color:"#2A4747"
       },
       text_center:{
         alignItems:"center"
       }
})
export default MatchdetailsLive;