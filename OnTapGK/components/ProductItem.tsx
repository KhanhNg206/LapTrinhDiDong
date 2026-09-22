import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type Product = {
    id : number,
    title : string,
    price : number,
    thumbnail?: string
}

type ProductItemProps = {
    product : Product;
    onDelete : (id : number) => void;
};

export default function ProductItem({product,onDelete} : ProductItemProps){
    return(
        <View style={styles.container}>

             {product.thumbnail ? (
                <View>
                    <Image source={{uri : product.thumbnail}} style={styles.image}></Image>
                </View>
             ) : (
                <view>
                    <Text>Chưa có ảnh...</Text>
                </view>
             )}

            <View style={styles.info}>
                <Text>ID : {product.id}</Text>
                <Text>title : {product.title}</Text>
                <Text>price : {product.price}</Text>
                <Pressable style={styles.button} onPress={() => onDelete(product.id)}>
                    <Text>Xóa</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        marginVertical: 5,
        padding: 10,
        borderRadius: 12,
        width: "100%",
  },
  image : {
    height : 50,
    width : 50,
    marginRight : 10
  },
  info : {
    flex : 1
  },
  button : {
    padding : 10,
    backgroundColor : "#e45835",
    alignItems : "center",
    borderRadius : 10
  }
  
});
