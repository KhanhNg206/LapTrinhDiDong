import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default function Bai15() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  // Hàm gọi API
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=20"
      );

      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu");
      }

      const data = await response.json();

      const result = data as ProductResponse;

      setProducts(result.products);
    } catch (error) {
      console.log("Lỗi:", error);
    }
  };

  /**
   * Load dữ liệu lần đầu
   */
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      await fetchProducts();

      setLoading(false);
    };

    loadData();
  }, []);

  /**
   * Pull to Refresh
   */
  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await fetchProducts();

    setRefreshing(false);
  }, []);

  /**
   * Màn hình loading lần đầu
   */
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#2563eb"
        />

        <Text style={styles.loadingText}>
          Đang tải sản phẩm...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bài 15 - Pull to Refresh
      </Text>

      <Text style={styles.description}>
        Kéo danh sách xuống để tải lại dữ liệu
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#2563eb"]}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.price}>
              ${item.price}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>
              Không có sản phẩm
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 15,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#64748b",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 5,
  },

  description: {
    color: "#64748b",
    marginBottom: 15,
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 8,
  },

  empty: {
    alignItems: "center",
    marginTop: 50,
  },
});
