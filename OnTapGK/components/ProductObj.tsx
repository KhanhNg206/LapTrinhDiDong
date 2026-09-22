import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type PRODUCT = {
    id : number,
    title : string,
    price : number,
    thumbnail : string
}

type ProductProps = {
    product : PRODUCT;
    onDelete : (id : number) => void
}

export default function ProductOBJ({product,onDelete} : ProductProps){
    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri : product.thumbnail}} style={styles.image}></Image>
            </View>
            <View style = {styles.info}>
                <Text>ID : {product.id}</Text>
                <Text>Tên : {product.title}</Text>
                <Text>Giá : {product.price}</Text>
                <Pressable style={styles.button} onPress={() => onDelete(product.id)}>
                    <Text>Xóa</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width : "100%",
    marginVertical : 5,
    borderRadius : 12
  },
  info : {
    flex : 1
  },
  image : {
    width : 50,
    height : 50
  },
   button : {
    padding : 4,
    backgroundColor : "#e45835",
    alignItems : "center",
    borderRadius : 10,
    width : 50
  }
   
});