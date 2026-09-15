import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
};

interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

const LIMIT = 10;

export default function Bai14() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (
    currentPage: number
  ) => {
    try {
      setLoading(true);

      const skip =
        (currentPage - 1) * LIMIT;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error(
          "Không thể lấy sản phẩm"
        );
      }

      const json = await response.json();

      const result = json as {
        products: Product[];
        total: number;
      };

      const apiResponse: ApiResponse<Product> = {
        data: result.products,
        total: result.total,
        page: currentPage,
      };

      setProducts(apiResponse.data);
      setTotal(apiResponse.total);
      setPage(apiResponse.page);
    } catch (error) {
      console.log("Lỗi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const totalPages = Math.ceil(
    total / LIMIT
  );

  const goToPage = (newPage: number) => {
    if (
      newPage < 1 ||
      newPage > totalPages
    ) {
      return;
    }

    fetchProducts(newPage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bài 14 - Pagination
      </Text>

      <Text style={styles.info}>
        Trang {page} / {totalPages}
      </Text>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color="#2563eb"
          />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.id}>
                #{item.id}
              </Text>

              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                ${item.price}
              </Text>
            </View>
          )}
        />
      )}

      <View style={styles.pagination}>
        <Pressable
          style={[
            styles.pageButton,
            page === 1 &&
              styles.disabledButton,
          ]}
          disabled={page === 1}
          onPress={() =>
            goToPage(page - 1)
          }
        >
          <Text style={styles.pageText}>
            ← Trước
          </Text>
        </Pressable>

        <Text style={styles.currentPage}>
          {page}
        </Text>

        <Pressable
          style={[
            styles.pageButton,
            page === totalPages &&
              styles.disabledButton,
          ]}
          disabled={page === totalPages}
          onPress={() =>
            goToPage(page + 1)
          }
        >
          <Text style={styles.pageText}>
            Sau →
          </Text>
        </Pressable>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
  },

  info: {
    color: "#64748b",
    marginVertical: 10,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  id: {
    color: "#2563eb",
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },

  price: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  pageButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  disabledButton: {
    backgroundColor: "#94a3b8",
  },

  pageText: {
    color: "#fff",
    fontWeight: "bold",
  },

  currentPage: {
    fontSize: 18,
    fontWeight: "bold",
  },
});