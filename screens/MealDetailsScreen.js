import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title='go BACK TO home' onPress={() => props.navigation.navigate('Categories')} />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  let title = navigationData.navigation.getParam("mealName");
  return {
    headerTitle: title,
    headerRight:() =>  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='FAV' iconName="ios-star" onPress={() => {console.log('marked as favorite')}} />
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
