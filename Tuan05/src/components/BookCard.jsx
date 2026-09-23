import { Image, StyleSheet, Text, View } from "react-native";

const BookCard = ({
  title = "Tên sách",
  author = "Tác giả A",
  price = "120.000 đ",
  coverUrl = "https://picsum.photos/200/300",
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: coverUrl }}
        style={styles.coverImage}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.author}>{author}</Text>
        </View>

        <View style={styles.priceTag}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  coverImage: {
    width: 80,
    height: 110,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 110,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    lineHeight: 20,
  },
  author: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
  priceTag: {
    alignSelf: "flex-start",
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#10B981",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#059669",
  },
});

export default BookCard;
