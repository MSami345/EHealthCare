{
  // import * as React from "react";
  // import { useEffect } from "react";
  // import { NavigationContainer, useNavigation } from "@react-navigation/native";
  // import { createNativeStackNavigator } from "@react-navigation/native-stack";
  // import HomeScreen from "../pages/HomeScreen";
  // import AdminScreen from "../pages/AdminScreen";
  // import Users from "../pages/Users";
  // import PatientScreen from "../pages/PatientScreen";
  // import DoctorScreen from "../pages/DoctorScreen";
  // import PatientRegisterScreen from "../pages/PatientRegisterScreen";
  // import Books from "../pages/Book";
  // import DoctorRegisterScreen from "../pages/DoctorRegisterScreen";
  // import PatientDashboard from "../pages/PatientDashboard";
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  // const Stack = createNativeStackNavigator();
  // const MyStack = () => {
  //   useEffect(async () => {
  //     const screen = await AsyncStorage.getItem("screen");
  //     if (screen) navigation.navigate(screen);
  //   });
  //   const navigation = useNavigation();
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           name="Home"
  //           component={HomeScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="Admin"
  //           component={AdminScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="Patient"
  //           component={PatientScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="Doctor"
  //           component={DoctorScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="PatientRegister"
  //           component={PatientRegisterScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="DoctorRegister"
  //           component={DoctorRegisterScreen}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen
  //           name="Books"
  //           component={Books}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen name="Movies" component={Users} />
  //         <Stack.Screen
  //           name="PatientDashboard"
  //           component={PatientDashboard}
  //           options={{ headerShown: false }}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // };
  // export default MyStack;
}

import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import AdminScreen from "../pages/Admin/AdminScreen";
import Users from "../pages/Users";
import PatientScreen from "../pages/Patient/PatientScreen";
import DoctorScreen from "../pages/Doctor/DoctorScreen";
import PatientRegisterScreen from "../pages/Patient/PatientRegisterScreen";
import Books from "../pages/Book";
import DoctorRegisterScreen from "../pages/Doctor/DoctorRegisterScreen";
import PatientDashboard from "../pages/Patient/PatientDashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

const Stacks = () => {

  // const [loading,setLoading]=React.useState(true)
  useEffect(() => {
    async function fetchData() {
    const screen = await AsyncStorage.getItem("screen");
    console.log("screen name :" + screen)
    if (screen) navigation.navigate(screen);}
    fetchData();
  },[]);

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Patient"
        component={PatientScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientRegister"
        component={PatientRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorRegister"
        component={DoctorRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Movies" component={Users} />
      <Stack.Screen
        name="PatientDashboard"
        component={PatientDashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default MyStack;
