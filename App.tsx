import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import MoneyPerHour from "./src/MoneyPerHour";
import WorkedHours from "./src/WorkedHours";

export default function App() {
  const [money, setMoney] = useState(16);
  const [hours, setHours] = useState(160);
  const [liquidSalary, setLiquidSalary] = useState(0);

  function handleIncrementMoney() {
    console.log(money);
    setMoney(money + 1);
  }
  function decrementMoney() {
    console.log(money);

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
    const IR = monthTotal * 0.11;
    const INSS = monthTotal * 0.08;
    const syndicate = monthTotal * 0.05;
    const totalDiscount = IR + INSS + syndicate;

    setLiquidSalary(monthTotal - totalDiscount);
  }

  useEffect(() => {
    calculateLiquidSalary();
  }, [money, hours]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" animated translucent />
      <Header />

      <MoneyPerHour
        money={money}
        incrementMoney={handleIncrementMoney}
        decrementMoney={decrementMoney}
      />

      <WorkedHours
        hours={hours}
        incrementHours={incrementHours}
        decrementHours={decrementHours}
      />

      <Text>{hours + " horas"}</Text>
      <Text>{"R$ " + money + " por hora"}</Text>
      <Text>{"R$ " + liquidSalary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c21414",
    alignItems: "center",
    justifyContent: "center",
  },
});
