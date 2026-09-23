import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BookDetail = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={{ uri: "https://picsum.photos/id/24/400/600" }}
          style={styles.coverImage}
          resizeMode="cover"
        />

        <View style={styles.infoSection}>
          <Text style={styles.title}>Nhà Giả Kim</Text>
          <Text style={styles.author}>Tác giả: Paulo Coelho</Text>
          <Text style={styles.price}>79.000 đ</Text>
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.descTitle}>Mô tả sách</Text>
          <Text style={styles.descText}>
            Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh
            của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của
            hạnh phúc, hòa hợp với vũ trụ và con người. Cuốn sách là một câu
            chuyện giản dị nhưng chứa đựng nhiều bài học nhân sinh sâu sắc. Cuộc
            đời là một hành trình dài và mỗi người đều có một con đường riêng
            cần phải đi trọn vẹn để đạt được ước mơ đích thực của đời mình.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomBarLabel}>Tạm tính</Text>
          <Text style={styles.bottomBarPrice}>79.000 đ</Text>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  coverImage: {
    width: "60%",
    aspectRatio: 3 / 4,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  infoSection: {
    gap: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  author: {
    fontSize: 14,
    color: "#4B5563",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#059669",
    marginTop: 4,
  },
  descriptionSection: {
    gap: 8,
  },
  descTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  descText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  bottomBarLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  bottomBarPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  addToCartButton: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  addToCartText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default BookDetail;
