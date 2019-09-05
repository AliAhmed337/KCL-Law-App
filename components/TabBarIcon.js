import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

//DOM i dont think any of this is being used at the moment cause i wrote it all in MainAppTabNavigator

const TabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    name={name}
    color={tintColor}
    size={24} />
);
export default TabBarIcon;

// export default function TabBarIcon(props) {
//   return (
//     <MaterialIcons
//      style={{backgroundColor: 'blue'}}
//
//       name={props.name}
//       size={26}
//       style={{ marginBottom: -3 }}
//       color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   );
// }
