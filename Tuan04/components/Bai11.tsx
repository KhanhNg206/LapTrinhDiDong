import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default function Bai11() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (
    keyword: string,
    limit: number
  ): Promise<void> => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          keyword
        )}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu sản phẩm");
      }

      const data = await response.json();

      const result = data as ProductResponse;

      setProducts(result.products);
    } catch (error) {
      console.log("Lỗi:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchProducts(keyword, 10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bài 11 - Tìm kiếm sản phẩm
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Nhập tên sản phẩm..."
          style={styles.input}
        />

        <Pressable
          style={styles.button}
          onPress={handleSearch}
        >
          <Text style={styles.buttonText}>Tìm</Text>
        </Pressable>
      </View>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#2563eb"
          style={styles.loading}
        />
      )}

      {!loading && (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.empty}>
              Không có sản phẩm
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.productId}>
                ID: {item.id}
              </Text>

              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.price}>
                ${item.price}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 15,
  },

  heading: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 48,
  },

  button: {
    backgroundColor: "#2563eb",
    marginLeft: 8,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  loading: {
    marginTop: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  productId: {
    color: "#64748b",
    fontSize: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  description: {
    color: "#64748b",
    marginTop: 5,
  },

  price: {
    color: "#16a34a",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },

  empty: {
    textAlign: "center",
    color: "#64748b",
    marginTop: 30,
  },
});