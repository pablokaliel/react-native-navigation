import {createDrawerNavigator} from '@react-navigation/drawer'
import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';
import {MaterialIcons} from '@expo/vector-icons'

const { Screen,Navigator } = createDrawerNavigator();

export function DrawerRoutes(){
  return(
    <Navigator>
    <Screen 
    name="screenA"
   options={{
    drawerLabel:"Home",
    drawerIcon: ()=> <MaterialIcons
    name="home"
    size={22}
    />
   }}
    component={ScreenA}
    />
    <Screen 
    name="Novo"
    options={{
      drawerLabel:"Sair",
      drawerIcon: ()=> <MaterialIcons
      name="logout"
      size={22}
      />
     }}
    component={ScreenB }
    />
    </Navigator>
  );
}