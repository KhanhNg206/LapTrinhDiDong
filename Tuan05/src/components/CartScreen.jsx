import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const cartItems = [
  {
    id: "1",
    title: "Nhà Giả Kim",
    quantity: 1,
    price: "79.000 đ",
    image: "https://picsum.photos/id/24/100/100",
  },
  {
    id: "2",
    title: "Đắc Nhân Tâm",
    quantity: 2,
    price: "190.000 đ",
    image: "https://picsum.photos/id/20/100/100",
  },
  {
    id: "3",
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    quantity: 1,
    price: "85.000 đ",
    image: "https://picsum.photos/id/10/100/100",
  },
  {
    id: "4",
    title: "Hành Trình Về Phương Đông",
    quantity: 1,
    price: "110.000 đ",
    image: "https://picsum.photos/id/42/100/100",
  },
];

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
      >
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />

            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.itemQty}>SL: {item.quantity}</Text>
            </View>

            <View style={styles.itemPriceBox}>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.checkoutBar}>
        <View>
          <Text style={styles.totalLabel}>Tổng tiền</Text>
          <Text style={styles.totalPrice}>464.000 đ</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Danh mục</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={[styles.tabText, styles.activeTabText]}>Giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 12,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
    gap: 4,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
  },
  itemQty: {
    fontSize: 12,
    color: "#6B7280",
  },
  itemPriceBox: {
    minWidth: 80,
    alignItems: "flex-end",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#059669",
  },
  checkoutBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  totalLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  checkoutButton: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#6B7280",
  },
  activeTabText: {
    color: "#4F46E5",
    fontWeight: "bold",
  },
});

export default CartScreen;
