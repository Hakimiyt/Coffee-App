import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { coffee } = route.params || {};

  const handleBuy = () => {
    if (!coffee) return Alert.alert("Info", "Tiada kopi dipilih.");
    Alert.alert("Minuman Berjaya Dibayar!", `Anda membeli: ${coffee.name} (${coffee.price})`);
  };

  const handleAddToCart = () => {
    if (!coffee) return Alert.alert("Info", "Tiada kopi dipilih.");
    Alert.alert("Minuman Berjaya Ditambah!", `${coffee.name} ditambah ke Cart.`);
  };

  return (
    <View style={styles.container}>
      {/* Back Icon Header */}
      <View style={styles.headerRow}>
        <Pressable 
          style={styles.backIcon} 
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="#8A7A6D" />
        </Pressable>
        <Text style={[styles.title, styles.centerTitle]}>Coffee Detail</Text>
      </View>

      {/* Card Detail */}
      <View style={styles.detailCard}>
        {/* Imej Kopi */}
        <Image
          source={coffee?.image ?? require("../assets/placeholder-coffee.jpg")}
          style={styles.image} resizeMode="cover"
        />

        {/* Nama Kopi */}
        <Text style={styles.name}>
          {coffee?.name ?? "Nama kopi tidak tersedia"}
        </Text>

        {/* Harga Kopi */}
        <Text style={styles.price}>
          {coffee?.price ?? "-"}
        </Text>

        {/* Penerangan Ringkas */}
        <Text style={styles.description}>
          {coffee?.description ?? "Deskripsi kopi tidak tersedia"}
        </Text>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <Pressable 
            style={[styles.actionBtn, styles.buyBtn]} 
            onPress={handleBuy}
          >
            <Text style={styles.buyText}>Buy</Text>
          </Pressable>

          <Pressable 
            style={[styles.actionBtn, styles.cartBtn]} 
            onPress={handleAddToCart}
          >
            <Text style={styles.cartText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 16,
    backgroundColor: "#EFE6DD",
    // marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#382420",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "NotoSans-Bold",
  },
  detailCard: {
    backgroundColor: "#FFF9F2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF9F2",
    padding: 14,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0D2C3",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3B2A20",
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    color: "#C67C4E",
    marginBottom: 12,
    fontWeight: "700",
  },
  description: {
    fontSize: 14,
    color: "#6B5B4E",
    lineHeight: 20,
    marginBottom: 14,
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    
  },
  buyBtn: {
    backgroundColor: "#C67C4E"
  },
  cartBtn: {
    backgroundColor: "#E0D2C3",
    borderColor: "#C67C4E",
    borderWidth: 1,
  },
  buyText: {
    color: "#EDEDED",
    fontWeight: "800",
  },
  cartText: {
    color: "#3B2A20",
    fontWeight: "800",
  },
  button: {
    marginTop: 14,
    paddingVertical: 12,
    backgroundColor: "#6F4E37",
    padding: 12,
    borderRadius: 12,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
  },
  backIcon: {
    fontSize: 26,
    fontWeight: "900",
    color: "#000000",
    width: 48,
    marginTop: 50,
    lineHeight: 40,
  },
  backIconText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#000000",
    lineHeight: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  centerTitle: {
    flex: 1,
    textAlign: "center",
    marginRight: 48,
    lineHeight: 40,
  },
});