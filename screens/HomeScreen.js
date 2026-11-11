import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  const coffeeMenu = [
    { 
      id: "1", 
      name: "Latte", 
      description: "Smooth espresso with fresh steamed milk.",
      price: "RM 11.90", 
      image: require("../assets/latte.jpg") 
    },
    { 
      id: "2", 
      name: "Americano", 
      description: "Rich espresso shot diluted with hot water.",
      price: "RM 6.90", 
      image: require("../assets/americano.jpg") 
    },
    { 
      id: "3", 
      name: "Cappuccino", 
      description: "Espresso topped with steamed milk and thick foam.",
      price: "RM 12.00", 
      image: require("../assets/cappuccino.jpg") 
    },
    { 
      id: "4", 
      name: "Salted Caramel Latte", 
      description: "Smooth espresso with sweet caramel and a pinch of salt.",
      price: "RM 15.00", 
      image: require("../assets/salted-caramel-latte.jpg") 
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={require("../assets/coffee.png")} style={styles.logo}/>
      <Text style={styles.title}>Our Coffee Menu</Text>

      <FlatList
        style={styles.list}
        data={coffeeMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable 
            style={styles.card} 
            onPress={() => navigation.navigate("Detail", { coffee: item })}
          >
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <View style={styles.info}>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#EFE6DD",
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    fontFamily: "NotoSans-Bold",
    fontWeight: "800",
    textAlign: "center",
    color: "#3B2A20",
    
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9F2",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0D2C3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    elevation: 8,
  },
  logo: {
    marginTop: 50,
    width: 140,
    height: 140,
    alignSelf: "center",
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3B2A20",
  },
  price: {
    marginTop: 6,
    color: "#6B5B4E",
  },
  list: {
    marginTop: 10,
  },
  image: {
    width: 130,
    height: 90,
    borderRadius: 10,
    // marginBottom: 10,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
});