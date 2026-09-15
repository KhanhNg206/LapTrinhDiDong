import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import Bai9 from "./components/Bai9";
import Bai10 from "./components/Bai10";
import Bai11 from "./components/Bai11";
import Bai12 from "./components/Bai12";
import Bai13 from "./components/Bai13";
import Bai14 from "./components/Bai14";
import Bai15 from "./components/Bai15";

export type RootStackParamList = {
  Home: undefined;
  Bai9: undefined;
  Bai10: undefined;
  Bai11: undefined;
  Bai12: undefined;
  Bai13: undefined;
  Bai14: undefined;
  Bai15: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "TUAN04 - Bài tập",
          }}
        />

        <Stack.Screen
          name="Bai9"
          component={Bai9}
          options={{
            title: "Bài 9 - Danh sách tin tức",
          }}
        />

        <Stack.Screen
          name="Bai10"
          component={Bai10}
          options={{
            title: "Bài 10 - User Profile",
          }}
        />

        <Stack.Screen
          name="Bai11"
          component={Bai11}
          options={{
            title: "Bài 11 - Tìm kiếm sản phẩm",
          }}
        />

        <Stack.Screen
          name="Bai12"
          component={Bai12}
          options={{
            title: "Bài 12 - Xử lý lỗi API",
          }}
        />

        <Stack.Screen
          name="Bai13"
          component={Bai13}
          options={{
            title: "Bài 13 - Generic Filter",
          }}
        />

        <Stack.Screen
          name="Bai14"
          component={Bai14}
          options={{
            title: "Bài 14 - Pagination",
          }}
        />

        <Stack.Screen
          name="Bai15"
          component={Bai15}
          options={{
            title: "Bài 15 - Pull to Refresh",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
