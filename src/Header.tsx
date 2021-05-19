import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {}

const Header = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Calculadora de Salário</Text>
      <Text style={s.subtitle}>
        Entenda o quanto você ganha e quanto você paga de imposto
      </Text>
    </View>
  );
};
export default Header;

const s = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: "orange",
    marginBottom: 4,
    fontWeight: "800",
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
  },
});
