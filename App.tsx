import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Hello worlds</Text>
      <Text>Hello worlds</Text>
      <Text>Hello worlds</Text>
      <Text>Hello worlds</Text>
      <Text>Other changes</Text>

      <Text>Other changes</Text>
      <Text>Other changes</Text>
      <Button
        title="Click me"
        onPress={() => {
          console.log("Button clicked");
          Alert.alert("Button clicked");
        }}
      />
      <Text>Other changes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1ed0c",
    alignItems: "center",
    justifyContent: "center",
  },
});
