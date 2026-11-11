import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList, Alert, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen({ route, navigation }) {
  const { username } = route.params || {};

  const profileMenu = [
    { id: "1", title: "Account Settings" },
    { id: "2", title: "Notification" },
    { id: "3", title: "Logout" },
  ];

  const handlePress = (item) => {
    if (item.title === "Account Settings") {
      Alert.alert("Account Settings", "Account Settings berjaya ditekan");
    } else if (item.title === "Notification") {
      Alert.alert("Notification", "Notification berjaya ditekan");
    } else if (item.title === "Logout") {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Header Card dengan Imej Avatar */}
      <View style={styles.headerCard}>
        <Image
          source={require("../assets/avatar-boy.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>
          {username ?? "Guest User"}
        </Text>
      </View>

      {/* Senarai Menu Profile */}
      <FlatList
        data={profileMenu}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.itemText}>{item.title}</Text>
            <FontAwesome name="caret-right" size={16} color="#3B2A20" />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE6DD",
    padding: 16,  
  },
  title: {
    marginTop: 50,
    fontSize: 22,
    fontWeight: "800",
    color: "#3B2A20",
    marginBottom: 12,
    textAlign: "center",
  },
  headerCard: {
    backgroundColor: "#FFFDFB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0D2C3",
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 14,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#D9C7B8",
  },
  username: {
    fontSize: 16,
    color: "#6B5B4E",
    marginBottom: 16,
    textAlign: "center",
  },
  listContent: {
    paddingTop: 4,
  },
  card: {
    backgroundColor: "#FFFDFB",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0D2C3",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2C1B18",
  },
});