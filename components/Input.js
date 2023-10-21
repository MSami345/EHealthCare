import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function Input({ label, hidden, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ flex: 1, fontSize: 16, fontWeight: "600" }}>{label}</Text>
      <View style={{ flex: 2, height: 50 }}>
        <TextInput
          style={[
            {
              backgroundColor: "white",
              height: 50,
              fontSize: 16,
              padding: 10,
              borderRadius: 10,
            },
            isFocused && {
              borderWidth: 1,
            },
          ]}
          secureTextEntry={hidden}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
