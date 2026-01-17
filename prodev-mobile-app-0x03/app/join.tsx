import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Join() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.largeText}>Join</Text>
        <Text style={styles.smallText}>
          Create a new account to get started.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
