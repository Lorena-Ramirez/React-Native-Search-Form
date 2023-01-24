import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from './src/redux/store';
import { Provider } from 'react-redux'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { animeApi } from "./src/features/apiSlice";

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={animeApi}> */}
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
      {/* </ApiProvider> */}
    </Provider>
  );
}
