import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

type CustomError = {
  message: string;
  status?: number;
};

function isCustomError(error: unknown): error is CustomError {
  if (typeof error !== "object" || error === null) {
    return false;
  }

  const obj = error as Record<string, unknown>;

  return typeof obj.message === "string";
}

export default function Bai12() {
  const [loading, setLoading] = useState(false);

  const callWrongApi = async () => {
    try {
      setLoading(true);

      // Cố tình sử dụng URL sai
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/abcxyz"
      );

      if (!response.ok) {
        const error: CustomError = {
          message: `API trả về lỗi HTTP ${response.status}`,
          status: response.status,
        };

        throw error;
      }

      const data = await response.json();

      console.log(data);
    } catch (error: unknown) {
      console.log("Error:", error);

      if (isCustomError(error)) {
        Alert.alert(
          "Lỗi API",
          error.message
        );
      } else if (error instanceof Error) {
        Alert.alert(
          "Lỗi",
          error.message
        );
      } else {
        Alert.alert(
          "Lỗi",
          "Đã xảy ra lỗi không xác định"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bài 12 - Xử lý lỗi API
      </Text>

      <Text style={styles.description}>
        Nhấn nút bên dưới để gọi một API sai
        và kiểm tra cách xử lý lỗi.
      </Text>

      <Pressable
        style={styles.button}
        onPress={callWrongApi}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading
            ? "Đang gọi API..."
            : "Gọi API lỗi"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 20,
    justifyContent: "center",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#64748b",
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#dc2626",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});