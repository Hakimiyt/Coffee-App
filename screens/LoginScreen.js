import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Untuk demo UI sahaja (tiada backend)
    if (!email || !password) {
      Alert.alert("Maklumat Tak Lengkap", "Sila pastikan anda telah mengisi kedua-dua ruangan Email dan Password.");
      return;
    }

    // Nanti bila ada Bottom Tabs, kita akan navigate ke "Main"
    // navigation.replace("Main");
    navigation.replace("Main", {
        username: email, // Hantar sebagai data
    });
    // navigation.replace)"Splash"); 
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
            </View>
      {/* Header / Logo */}
      <View style={styles.header}>
        <Image source={require("../assets/coffee.png")} style={styles.logo}/>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.subtitle}>Welcome to Coffee Amirul App</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="contoh: user@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            style={[styles.input, styles.passwordInput]}
          />

          {/* Icon mata di kanan */}
          <Pressable
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.eyeButton}
            hitSlop={10}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#6B5B4E"
            />
          </Pressable>
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <Pressable onPress={() => Alert.alert("Berjaya", "Pautan penetapan semula kata laluan telah dihantar ke e-mel anda.")}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E9DC",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#3B2A20",
    letterSpacing: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 18,
    color: "#6B5B4E",
    marginTop: 6,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#3B2A20",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C67C4E",
    backgroundColor: "#EDEDED",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#382420",
  },
  passwordRow: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 44, // ruang untuk icon mata
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 16,
    backgroundColor: "#C67C4E",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#EDEDED",
    fontSize: 16,
    fontWeight: "800",
  },
  linkText: {
    marginTop: 14,
    textAlign: "center",
    color: "#685B4E",
    fontWeight: "700",
  },
  footer: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 12,
    color: "#8A7A6D",
  },
});