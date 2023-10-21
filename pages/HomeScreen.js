import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Button({ color, title, navigate }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: color,
          padding: 10,
          borderRadius: 10,
        }}
        onPress={navigate}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

function Logo({ title }) {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>{title}</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  // useEffect(() => {
  //   AsyncStorage.setItem("screen", "Home");
  // }, []);
  return (
    <View style={styles.container}>
      <Logo title="E-Healthcare Management System" />
      <Button
        color="rgb(39, 0, 93)"
        title="Admin"
        navigate={() => navigation.navigate("Admin")}
      />
      <Button
        color="rgb(148, 0, 255)"
        title="Patient"
        navigate={() => navigation.navigate("Patient")}
      />
      <Button
        color="rgb(100, 204, 197)"
        title="Doctor"
        navigate={() => navigation.navigate("Doctor")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  logo: {
    fontSize: 40,
    color: "purple",
    fontWeight: "500",
  },
  buttonContainer: {
    flex: 0.1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(89, 115, 145)",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },
});
