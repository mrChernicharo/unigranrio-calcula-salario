import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";

interface Props {
  hours: number;
  incrementHours: () => void;
  decrementHours: () => void;
}

const WorkedHours = ({ hours, decrementHours, incrementHours }: Props) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Horas trabalhadas no mês</Text>

      <View style={s.inputContainer}>
        <RectButton style={s.button} onPress={decrementHours}>
          <Text style={s.buttonText}>-</Text>
        </RectButton>

        <TextInput keyboardType="numeric" value={String(hours) + "h"} />

        <RectButton style={s.button} onPress={incrementHours}>
          <Text style={s.buttonText}>+</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default WorkedHours;

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 40,
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
