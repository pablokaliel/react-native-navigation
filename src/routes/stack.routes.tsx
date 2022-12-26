import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';

const { Screen,Navigator } = createNativeStackNavigator();

export function StackRoutes(){
  return(
    <Navigator>
    <Screen 
    name="screenA"
    options={{
      headerShown:false,
    }}
    component={ScreenA}
    />
    <Screen 
    name="screenB"
    options={{
      title:"tela B",
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'navy',
      },
      headerTintColor:"#fff"
        }}
    component={ScreenB }
    />
    </Navigator>
  );
}