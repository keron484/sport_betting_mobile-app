import React from 'react'
import Bethistory from '../screens/Nonlivescreens.jsx/Bethistory'
import Betslip from '../screens/Nonlivescreens.jsx/Betslip'
import Popular from '../screens/Livescreens/Popular'
import Menu from '../screens/Nonlivescreens.jsx/Menu'
import Messages from '../screens/Nonlivescreens.jsx/Messages'
import Tournaments from '../screens/Nonlivescreens.jsx/Tournaments'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ticketicon } from '../assets/icons/custom-icon'
import { colors } from '../components/Utils/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Deposite from '../screens/Nonlivescreens.jsx/Deposite'
import Userprofile from '../screens/Nonlivescreens.jsx/Userprofile';
import Withdraw from '../screens/Nonlivescreens.jsx/Withdraw'
import VirtualGames from '../screens/Nonlivescreens.jsx/VirtualGames';
import CustomerSupport from '../screens/Nonlivescreens.jsx/Customersupport';
import TournamentsLive from '../screens/Livescreens/Tournaments';
import Matches from '../screens/Nonlivescreens.jsx/Matches';
import Matchdetails from '../screens/Nonlivescreens.jsx/Matchdetails';
import Livematches from '../screens/Livescreens/Matches';
import MatchdetailsLive from '../screens/Livescreens/Matchdetailslive';
import Defaultbetslip from '../screens/Nonlivescreens.jsx/Defaultbetslip';
import { count } from '../Redux/Slices/BetSlipslice';
import { useSelector } from 'react-redux';
import Betdetails from '../screens/Nonlivescreens.jsx/Betdetails'
const Stack = createNativeStackNavigator();
const MatchStack = () => {
  return(
     <Stack.Navigator>
       <Stack.Screen name='Tournaments' component={Tournaments}
        options={{headerShown: false}}
       >
       </Stack.Screen>
       <Stack.Screen name='TournamentsLive' component={TournamentsLive}
        options={{headerShown: false}}
       >
       </Stack.Screen>
       <Stack.Screen name='matches' component={Matches}
        options={{headerShown: false}}
       >
       </Stack.Screen>
       <Stack.Screen name='matchdetails' component={Matchdetails}
        options={{headerShown: false}}
       >
       </Stack.Screen>
       <Stack.Screen name='livematches' component={Livematches}
        options={{headerShown: false}}
       >
       </Stack.Screen>
     </Stack.Navigator>
  )
}
const Menustack = () =>{
   return(
       <Stack.Navigator>
          <Stack.Screen name='menu' component={Menu}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='deposit' component={Deposite}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='messages' component={Messages}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='bethistory' component={Bethistory}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='Tournaments' component={Tournaments}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='customersupport' component={CustomerSupport}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='useraccount' component={Userprofile}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='virtualgames' component={VirtualGames}
           options={{headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen name='withdraw' component={Withdraw}
           options={{headerShown: false}}
          ></Stack.Screen>
         </Stack.Navigator>
   )
}
const BethistoryStack = () => {
  return(
     <Stack.Navigator>
        <Stack.Screen name='My Bets' component={Bethistory}
         options={{headerShown:false}}
        >    
        </Stack.Screen>
        <Stack.Screen name='betdetails' component={Betdetails}
          options={{headerShown: false}}
         >
        </Stack.Screen>
     </Stack.Navigator>
  )
}
const Popularstack = () =>{
    return(
      
        <Stack.Navigator>
          <Stack.Screen name='Popular' component={Popular}
        options={{headerShown: false}}
       >
       </Stack.Screen>
          <Stack.Screen name='deposit' component={Deposite}
        options={{headerShown: false}}
       >
       </Stack.Screen>
       <Stack.Screen name='matchdetailslive' component={MatchdetailsLive}
        options={{headerShown: false}}
       >
       </Stack.Screen>
        </Stack.Navigator>
    )
}
const Tabs = createBottomTabNavigator();
const Tabnavigation = () => {
  const numEvents = useSelector(count)
  return (
    <Tabs.Navigator
     screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard:true,
      tabBarStyle:styles.tabbarstyles,
      tabBarLabelStyle:styles.lable,
      tabBarActiveTintColor:colors.text_color,
    }}
    >
        <Tabs.Screen 
        name='Popular' 
        component={Popularstack}
        options={{
          tabBarIcon:({focused,color,size}) => (
           
            <Icon name="flame" size={28} style={focused ? styles.selected : null}></Icon>
          )
        }
      }
      
        ></Tabs.Screen>
        <Tabs.Screen 
        name='Matches' 
        component={MatchStack}
        options={{
          tabBarIcon:({focused,color,size}) => (
           
              <Icon name="trophy" size={22} style={focused ? styles.selected : null}></Icon>
          )
        }}
        ></Tabs.Screen>
        <Tabs.Screen 
        name='Betslip' 
        component={numEvents <= 0  ? Defaultbetslip : Betslip}
        options={{
          tabBarIcon:({focused,color,size}) => (
            <Ticketicon></Ticketicon>
          )
        }}
        ></Tabs.Screen>
        <Tabs.Screen 
        name='My Bets' 
        component={BethistoryStack}
        options={{
          tabBarIcon:({focused,color,size}) => (
           
              <Icon name="time" size={22} style={focused ? styles.selected : null}></Icon>
          )
        }}
        ></Tabs.Screen>
        <Tabs.Screen 
        name='Menu' 
        component={Menustack}
        options={{
          tabBarIcon:({focused,color,size}) => (
           
              <Icon name="grid" size={21} style={focused ? styles.selected : null}></Icon>
          ),
          headerShown:false
        }
      }
        ></Tabs.Screen>
        
    </Tabs.Navigator>
  )

}
const styles = StyleSheet.create({
  tabbarstyles:{
    position:'absolute',
    elevation:0,
    height:60,
    paddingBottom:8,
    borderTopWidth:1,
    borderColor:"#f5f5f5",
    elevation:10
  },
  selected:{
    color:colors.primary_color,
    borderTopColor:colors.primary_color,
  },
  lable:{
    fontSize:12,
    fontWeight:"700",
    bottom:0
  }
})
export default Tabnavigation;
