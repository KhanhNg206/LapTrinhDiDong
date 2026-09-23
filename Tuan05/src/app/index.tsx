import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartScreen from "../components/CartScreen";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "left", "right", "bottom"]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.wrapper}>
        {/* <Header /> */}
        {/* <BookCard /> */}
        {/* <CategoryChips /> */}
        {/* <BookGrid /> */}
        {/* <BookBadge /> */}
        {/* <FloatingCartButton /> */}
        {/* <HomeScreenLayout /> */}
        {/* <BookDetail /> */}
        <CartScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  wrapper: {
    flex: 1,
  },
});
