import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Khối bên trái: Tên/Logo BookStore */}
      <Text style={styles.logoText}>BookStore</Text>

      <View style={styles.rightActions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Tìm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    paddingTop: 4,
    backgroundColor: "#1E1B4B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // Khoảng cách giữa 2 nút bấm/icon
  },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#312E81", // Màu nền nút tone navy nhạt hơn
    borderRadius: 6,
  },
  actionText: {
    color: "#E0E7FF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Header;
