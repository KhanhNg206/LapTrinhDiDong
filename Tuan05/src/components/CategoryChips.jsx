import { StyleSheet, Text, View } from "react-native";

const categories = [
  "Văn học",
  "Kinh tế",
  "Thiếu nhi",
  "Truyện tranh",
  "Ngoại ngữ",
  "Lịch sử",
];

const CategoryChips = () => {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4338CA",
    backgroundColor: "#FFFFFF",
  },
  chipText: {
    fontSize: 14,
    color: "#4338CA",
  },
});

export default CategoryChips;
