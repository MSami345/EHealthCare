import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import SignupLink from "../../components/SignupLink";

const doctors = [
  {
    username: "Akram",
    password: "111",
  },
  {
    username: "Babar",
    password: "222",
  },
  {
    username: "Shakeel",
    password: "333",
  },
];

export default function DoctorScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    let isSuccessful = false;
    doctors.forEach((doctor) => {
      if (doctor.username === username && doctor.password === password) {
        alert("Login Successful");
        isSuccessful = true;
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
          text="Doctor Panel"
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
          <SignupLink onPress={() => navigation.navigate("DoctorRegister")} />
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
