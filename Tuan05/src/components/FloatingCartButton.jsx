import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FloatingCartButton = () => {
  const [count, setCount] = useState(4);

  return (
    <View style={styles.screen}>
      <View style={styles.contentList}>
        <View style={styles.placeholderItem} />
        <View style={styles.placeholderItem} />
        <View style={styles.placeholderItem} />
        <View style={styles.placeholderItem} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Giỏ hàng</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    padding: 16,
  },
  contentList: {
    flex: 1,
    gap: 16,
  },
  placeholderItem: {
    height: 70,
    backgroundColor: "#E5E7EB",
    borderWidth: 1,
    borderColor: "#9CA3AF",
    borderRadius: 4,
  },
  button: {
    position: "absolute",
    bottom: 24,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#DC2626",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default FloatingCartButton;
