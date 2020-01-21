import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    const { id, title } = itemData.item;
    return (
      <MealItem
        data={{ ...itemData.item }}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: id,
              mealName: title
            }
          })
        }
      />
    );
  };

  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  let name = navigationData.navigation.getParam("categoryName");
  return {
    headerTitle: name,
    headerBackTitle: "Back"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
