import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function GoalItem({goal, deleteGoalHandler}) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>
        {goal}
      </Text>
      <AntDesign 
        name="closecircle" 
        size={24} 
        color="red"
        onPress={() => deleteGoalHandler(goal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  }
});
