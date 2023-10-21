import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";

export default function PatientDashboard({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is patient dashboard</Text>
      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.setItem("loggedIn", "false");
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
}
