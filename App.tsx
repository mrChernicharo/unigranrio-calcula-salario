import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import MoneyPerHour from "./src/MoneyPerHour";
import Outcome from "./src/Outcome";
import WorkedHours from "./src/WorkedHours";

export default function App() {
  const [money, setMoney] = useState(16);
  const [hours, setHours] = useState(160);

  const [IR, setIR] = useState(0);
  const [INSS, setINSS] = useState(0);
  const [syndicate, setSyndicate] = useState(0);

  const [liquidSalary, setLiquidSalary] = useState(0);

  function incrementMoney() {
    setMoney(money + 1);
  }
  function decrementMoney() {
    setMoney(money - 1);
  }
  function incrementHours() {
    setHours(hours + 1);
  }
  function decrementHours() {
    setHours(hours - 1);
  }

  function calculateGrossSalaty() {
    return money * hours;
  }

  function calculateLiquidSalary() {
    const monthTotal = calculateGrossSalaty();
    setIR(monthTotal * 0.11);
    setINSS(monthTotal * 0.08);
    setSyndicate(monthTotal * 0.05);
    const totalDiscount = IR + INSS + syndicate;

    setLiquidSalary(monthTotal - totalDiscount);
  }

  useEffect(() => {
    calculateLiquidSalary();
  }, [money, hours]);

  return (
    <View style={s.container}>
      <StatusBar style="light" animated translucent />
      <Header />

      <MoneyPerHour
        money={money}
        incrementMoney={incrementMoney}
        decrementMoney={decrementMoney}
      />

      <WorkedHours
        hours={hours}
        incrementHours={incrementHours}
        decrementHours={decrementHours}
      />

      <Outcome
        IR={IR}
        INSS={INSS}
        syndicate={syndicate}
        liquidSalary={liquidSalary}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c21414",
    alignItems: "center",
    justifyContent: "center",
  },
});
