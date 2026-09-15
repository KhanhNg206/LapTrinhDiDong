import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const exercises = [
  {
    screen: "Bai9" as const,
    title: "Bài 9",
    description: "Danh sách tin tức",
  },
  {
    screen: "Bai10" as const,
    title: "Bài 10",
    description: "Chi tiết người dùng",
  },
  {
    screen: "Bai11" as const,
    title: "Bài 11",
    description: "Tìm kiếm sản phẩm",
  },
  {
    screen: "Bai12" as const,
    title: "Bài 12",
    description: "Xử lý lỗi API",
  },
  {
    screen: "Bai13" as const,
    title: "Bài 13",
    description: "Bộ lọc danh sách Generic",
  },
  {
    screen: "Bai14" as const,
    title: "Bài 14",
    description: "Phân trang dữ liệu",
  },
  {
    screen: "Bai15" as const,
    title: "Bài 15",
    description: "Pull to Refresh",
  },
];

export default function Home({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tuần 04</Text>

      <Text style={styles.subHeading}>
        Fetch API & TypeScript
      </Text>

      {exercises.map((item) => (
        <Pressable
          key={item.screen}
          style={styles.card}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.description}>
            {item.description}
          </Text>

          <Text style={styles.arrow}>→</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 10,
  },

  subHeading: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 25,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#2563eb",
  },

  description: {
    fontSize: 15,
    color: "#64748b",
    marginTop: 5,
  },

  arrow: {
    position: "absolute",
    right: 20,
    top: 25,
    fontSize: 24,
    color: "#2563eb",
  },
});
