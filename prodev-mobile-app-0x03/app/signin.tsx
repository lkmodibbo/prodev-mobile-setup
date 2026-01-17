import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Signin() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.largeText}>Sign In</Text>
        <Text style={styles.smallText}>Enter your credentials to sign in.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
