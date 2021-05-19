import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";

interface Props {
  money: number;
  incrementMoney: () => void;
  decrementMoney: () => void;
}

const MoneyPerHour = ({ money, incrementMoney, decrementMoney }: Props) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Valor da hora trabalhada</Text>

      <View style={s.inputContainer}>
        <RectButton style={s.button} onPress={decrementMoney}>
          <Text style={s.buttonText}>-</Text>
        </RectButton>

        <TextInput keyboardType="numeric" value={`R$ ${String(money)},00`} />

        <RectButton style={s.button} onPress={incrementMoney}>
          <Text style={s.buttonText}>+</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default MoneyPerHour;

const s = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    width: 200,
    borderRadius: 6,
    borderColor: "orange",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "orange",
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
