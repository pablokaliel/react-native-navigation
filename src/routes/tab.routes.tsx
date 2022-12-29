import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';
import {MaterialIcons } from '@expo/vector-icons'

const { Screen,Navigator } = createBottomTabNavigator();

export function TabRoutes(){
  return(
    <Navigator
    screenOptions={{
      tabBarActiveTintColor:'navy',
      tabBarInactiveTintColor:'gray',
      // headerShown:false
      
    }}>
    <Screen 
    name="Home"
    options={{
      tabBarLabel:"Home",
      // headerShown:false,
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'#141d27',
      },
      headerTintColor:"#fff",
      tabBarIcon: ({color,size}) =>(
        <MaterialIcons
        name="home"
        color={color}
        size={size}/>
      )
      
    }}
    component={ScreenA}
    />
    <Screen 
    name="Novo"
    options={{
      tabBarLabel:"Novo",
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'#062135',
      },
      headerTintColor:"#fff",
      tabBarIcon: ({color,size}) =>(
        <MaterialIcons
        name="add"
        color={color}
        size={size}/>
      )
    }}
    component={ScreenB }
    />
    </Navigator>
  );
}