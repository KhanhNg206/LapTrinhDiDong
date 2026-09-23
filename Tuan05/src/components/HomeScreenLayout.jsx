import { ScrollView, StyleSheet, View } from "react-native";
import BookGrid from "./BookGrid";
import CategoryChips from "./CategoryChips";
import FloatingCartButton from "./FloatingCartButton";
import Header from "./Header";

const HomeScreenLayout = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips />
        <BookGrid />
      </ScrollView>

      <FloatingCartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F3F4F6",
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
    paddingBottom: 90,
  },
});

export default HomeScreenLayout;
