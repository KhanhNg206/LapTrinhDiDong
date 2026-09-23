import { Image, StyleSheet, Text, View } from "react-native";

const BookBadge = ({
  discount = "-20%",
  coverUrl = "https://picsum.photos/id/24/300/400",
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: coverUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{discount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 150,
    aspectRatio: 3 / 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },
  badge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#DC2626",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default BookBadge;
