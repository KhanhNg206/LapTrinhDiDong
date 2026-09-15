import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

/**
 * Generic filter
 *
 * T có thể là bất kỳ object nào
 * có trường name kiểu string.
 */
function filterByName<T extends { name: string }>(
  items: T[],
  keyword: string
): T[] {
  return items.filter((item) =>
    item.name
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );
}

const users: User[] = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    email: "an@gmail.com",
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    email: "binh@gmail.com",
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    email: "nam@gmail.com",
  },
  {
    id: 4,
    name: "Phạm Minh Anh",
    email: "anh@gmail.com",
  },
];

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15",
    price: 999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1999,
  },
  {
    id: 4,
    name: "iPad Pro",
    price: 1099,
  },
];

export default function Bai13() {
  const [keyword, setKeyword] = useState("");

  const filteredUsers = useMemo(() => {
    return filterByName(users, keyword);
  }, [keyword]);

  const filteredProducts = useMemo(() => {
    return filterByName(products, keyword);
  }, [keyword]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bài 13 - Generic Filter
      </Text>

      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập tên cần tìm..."
        style={styles.input}
      />

      <Text style={styles.sectionTitle}>
        Danh sách User
      </Text>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) =>
          `user-${item.id}`
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>{item.email}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Không tìm thấy User
          </Text>
        }
      />

      <Text style={styles.sectionTitle}>
        Danh sách Product
      </Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) =>
          `product-${item.id}`
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              ${item.price}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Không tìm thấy Product
          </Text>
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

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  empty: {
    color: "#64748b",
    marginBottom: 10,
  },
});