import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import SignupLink from "../../components/SignupLink";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const patients = [
  {
    username: "Ali",
    password: "123",
  },
  {
    username: "Akbar",
    password: "456",
  },
  {
    username: "Usman",
    password: "789",
  },
];

export default function PatientScreen({ navigation }) {
  useEffect(() => {
    AsyncStorage.setItem("screen", "Patient");
  }, []);
  const checkLoggedIn = async () => {
    const loggedIn = await AsyncStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      navigation.navigate("PatientDashboard");
    }
  };

  checkLoggedIn();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    let isSuccessful = false;
    patients.forEach((patient) => {
      if (patient.username === username && patient.password === password) {
        alert("Login Successful");
        navigation.navigate("PatientDashboard");
        isSuccessful = true;
        AsyncStorage.setItem("loggedIn", "true");
      }
    });
    if (!isSuccessful) alert("Login Failed! Enter correct credentials.");
  }

  return (
    <View style={styles.layoutContainer}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 80 }}
      >
        <Heading
          flex={0.2}
          align="flex-end"
          size={40}
          text="Login"
          color="purple"
        />
        <Heading
          flex={0.3}
          align="flex-top"
          size={40}
          text="Patient Panel"
          color="green"
        />
        <View style={{ paddingTop: 100 }}>
          <Input
            label="Username:"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <Input
            label="Password:"
            hidden={true}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <SignupLink onPress={() => navigation.navigate("PatientRegister")} />
          <View style={styles.footerContainer}>
            <Footer>
              <Button
                title="Login"
                backgroundColor="purple"
                action={handleLoginClick}
              />
              <Button
                title="Cancel"
                backgroundColor="rgb(89, 115, 145)"
                action={() => navigation.navigate("Home")}
              />
            </Footer>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    padding: 15,
  },
  footerContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    paddingTop: 40,
  },
});
