import { NavigationContainer} from '@react-navigation/native'
import { DrawerRoutes } from './drawer.routes'
import { StackRoutes } from './stack.routes'
import { TabRoutes } from './tab.routes'
export function DraweRoutes(){
  return (
    <NavigationContainer >
      {/* <TabRoutes/> */}
      <DrawerRoutes/>
    </NavigationContainer>
  )
}
