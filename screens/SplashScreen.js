import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/coffee-background.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Image */}
        <Image source={require("../assets/coffee.png")} style={styles.logo} />

        {/* Title */}
        <Text style={styles.title}>Coffee Amirul App</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Let's Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // lapisan gelap nipis supaya teks/butang lebih jelas (pilihan)
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontFamily: "NotoSans-Bold",
    fontSize: 28,
    fontWeight: "700",
    color: "#2F2D2C", // ditukar ke warna putih supaya lebih jelas di atas imej latar belakang
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#C67C4E",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    color: "#EDEDED",
    fontWeight: "700",
    fontSize: 16,
  },
});