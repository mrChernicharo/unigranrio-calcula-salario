import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  liquidSalary: number;
  IR: number;
  INSS: number;
  syndicate: number;
}

const Outcome = ({ liquidSalary, IR, INSS, syndicate }: Props) => {
  const discounts = [
    { name: "IR", value: IR },
    { name: "INSS", value: INSS },
    { name: "Sindicato", value: syndicate },
  ];

  useEffect(() => console.log(discounts), []);

  return (
    <View style={s.outcomeContainer}>
      <Text style={s.outcomeTitle}>Salário Líquido</Text>
      <Text style={s.outcome}>{"R$ " + liquidSalary.toFixed(2)}</Text>

      <Text style={s.discountsTitle}>Descontos 💸</Text>
      <View style={s.discountsContainer}>
        {discounts.map((item) => {
          return (
            <View key={item.name} style={s.discountItemContainer}>
              <Text style={s.discountItemTitle}>{item.name}</Text>
              <Text style={s.discountItemValue}>
                {String(item.value.toFixed(2))}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Outcome;

const s = StyleSheet.create({
  outcomeContainer: { alignItems: "center" },
  outcomeTitle: {
    color: "#fff",
    marginTop: 20,
    fontSize: 24,
  },
  outcome: {
    fontSize: 32,
    color: "orange",
    marginBottom: 10,
  },

  discountsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  discountsTitle: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  discountItemContainer: {
    width: 100,
    alignItems: "center",
  },
  discountItemTitle: {
    color: "#fff",
  },
  discountItemValue: {
    color: "orange",
    fontSize: 18,
  },
});
