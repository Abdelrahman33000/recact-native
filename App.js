// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { store, persistor } from './src/redux/store';
// import TodoFormScreen from './src/components/TodoFormScreen';
// import TodoListScreen from './src/components/TodoListScreen';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <Tab.Navigator>
//             <Tab.Screen name="TodoForm" component={TodoFormScreen} />
//             <Tab.Screen name="TodoList" component={TodoListScreen} />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;




import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/redux/store';
import TodoScreen from './src/components/TodoScreen';
import TodoDetailsScreen from './src/components/TodoDetailsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todo-App" component={TodoScreen} />
          <Tab.Screen name="TodoDetails" component={TodoDetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
