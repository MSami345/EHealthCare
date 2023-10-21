{
  // import { useEffect } from "react";
  // import MyStack from "./navigation/MyStack";
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  // import { useNavigation } from "@react-navigation/native";
  // export default function App() {
  //   let screen;
  //   useEffect(() => {
  //     getScreen();
  //   }, [screen]);
  //   async function getScreen() {
  //     screen = await AsyncStorage.getItem("screen");
  //     console.log(screen);
  //     const navigation = useNavigation();
  //     navigation.navigate(screen);
  //   }
  //   return <MyStack />;
  // }
}
import { useEffect } from "react";
import MyStack from "./navigation/MyStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native-web";

export default function App() {
  // useEffect(() => {
  //   getScreen();
  // }, []);

  // async function getScreen() {
  //   const screen = await AsyncStorage.getItem("screen");
  //   if (screen) {
  //     // You can access the navigation prop here and navigate to the screen
  //     navigateToScreen(screen);
  //   }
  // }

  // // Define a function to navigate to the specified screen
  // const navigateToScreen = (screen) => {
  //   MyStack.navigation.navigate(screen);
  // };

  return (
    <MyStack />
  );
}
