import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const books = [
  {
    id: "1",
    title: "Sách 01",
    price: "80.000 đ",
    image: "https://picsum.photos/id/10/300/400",
  },
  {
    id: "2",
    title: "Sách 02",
    price: "95.000 đ",
    image: "https://picsum.photos/id/20/300/400",
  },
  {
    id: "3",
    title: "Sách 03",
    price: "110.000 đ",
    image: "https://picsum.photos/id/24/300/400",
  },
  {
    id: "4",
    title: "Sách 04",
    price: "150.000 đ",
    image: "https://picsum.photos/id/42/300/400",
  },
];

const BookGrid = () => {
  return (
    <View style={styles.container}>
      {books.map((book) => (
        <View key={book.id} style={styles.card}>
          <Image
            source={{ uri: book.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>
              {book.title}
            </Text>
            <Text style={styles.price}>{book.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    backgroundColor: "#E5E7EB",
  },
  info: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
  },
  price: {
    fontSize: 13,
    color: "#059669",
    marginTop: 4,
  },
});

export default BookGrid;
