import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Product } from "./ProductItem";
import ProductItem from "./ProductItem";

export default function ProductScreen(){
    const [product,setProduct] = useState<Product[]>([]);
    const [loading,setLoading] = useState(true);
    const [nameProduct,setNameProduct] = useState("");
    const [price,setPrice] = useState("");

    const [error,setError] = useState("");
    const [submit,setSubmit] = useState(false);
    const [add,setAdd] = useState(false);

    const [deleteId,setDeleteId] = useState("");
    const [searchName,setSearchName] = useState("");

    const fetchAPI = async () => {
       try{
        setLoading(true)
         const reponse = await fetch("https://dummyjson.com/products?limit=10");
         const data = await reponse.json();

        setProduct(data.products as Product[]);
       }catch(error){
        console.log(error);
       }finally{
        setLoading(false);
       }
    }

    useEffect(() => {
        fetchAPI();
    },[])

    const handleAddProduct = async() => {
        const trimName = nameProduct.trim();
        const priceNumber = Number(price);
        if(trimName === ""){
            setError("Tên sp kh để trống");
            return;
        }
        if(!Number(isFinite(priceNumber)) || priceNumber <= 0){
            setError("giá phải là số hữu hạn lớn hơn 0");
            return;
        }

        try{
            setSubmit(true);
            const reponse = await fetch("https://dummyjson.com/products/add",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : " application/json",
                    },
                    body : JSON.stringify({
                        title: trimName,
                        price: priceNumber,
                    }),
                }
            );

            const newProduct = (await reponse.json()) as Product;

            setProduct((oldProduct) => [newProduct,...oldProduct]);

            setNameProduct("");
            setPrice("");
            setAdd(true);

        }catch(error){
            setError("Không thể thêm sp!")
        }finally{
            setSubmit(false);
        }
    }

    const handleDelete = (id : number) => {
        setProduct((oldProducts) => oldProducts.filter((item) => item.id !== id));
    };

    const handleDeleteById = () => {
        const idNumber = Number(deleteId)
        setProduct((oldProduct) => oldProduct.filter((item) => item.id !== idNumber));

        setDeleteId("");
    }

    const updateProduct = () => {
       const idNumber = Number(deleteId);
       const trimName = nameProduct.trim();
       const priceNumber = Number(price);

       setProduct((oldProducts) => 
        oldProducts.map((item) => item.id === idNumber ? 
                                  {...item,title : trimName, price : priceNumber} : item))
            
        setDeleteId("");
        setNameProduct("");
        setPrice("");
    }

    const handleSearch = () => {
        const keyWords = searchName.trim().toLowerCase();
        const result = product.filter((item) => item.title.toLowerCase().includes(keyWords));
        if(keyWords !== ""){
            setProduct(result);
        }else{
            fetchAPI();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.formItem}>
                    <Text>Nhập tên sp :</Text>
                     <TextInput style={styles.input} value={nameProduct} onChangeText={setNameProduct}></TextInput>
                </View>
                <View style={styles.formItem}>
                    <Text>Nhập giá sp :</Text>
                    <TextInput style={styles.input} value={price} onChangeText={setPrice}></TextInput>
                </View>
                 <View style={styles.formItem}>
                    <Text>Nhập id muốn xóa/sửa :</Text>
                    <TextInput style={styles.input} value={deleteId} onChangeText={setDeleteId}></TextInput>
                     <Pressable style={styles.button} onPress={handleDeleteById}>
                                        <Text>Xóa</Text>
                     </Pressable>
                     <Pressable style={styles.button} onPress={updateProduct}>
                                        <Text>Sửa</Text>
                     </Pressable>
                </View>
                 <View style={styles.formItem}>
                    <Text>Nhập tên sp muốn tìm :</Text>
                    <TextInput style={styles.input} value={searchName} onChangeText={setSearchName}></TextInput>
                    <Pressable style={styles.button} onPress={handleSearch}>
                                        <Text>Tìm</Text>
                     </Pressable>
                </View>
                {error != "" && <Text style={styles.error}>{error}</Text>}
                <Pressable style={[styles.button , (submit || add) && styles.buttonDisable]} 
                           onPress={handleAddProduct}
                            disabled={submit || add}>
                    <Text>Thêm</Text>
                </Pressable>
            </View>
           
           {loading ? (
            <ActivityIndicator size="large"></ActivityIndicator>
           ) : (
             <FlatList
            data={product}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <ProductItem product={item} onDelete={handleDelete}></ProductItem>
                </View>
            )}
            >
                
            </FlatList>
           )}
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form : {
    padding : 10,
    borderWidth : 1,
    borderStyle : "solid",
    borderRadius : 16,
    borderColor : "#000000",
    margin : 50,
  },
  formItem : {
    flexDirection : "row",
    marginBottom : 10
  },
  button : {
    padding : 5,
    backgroundColor : "#65a4df",
    alignItems : "center",
    borderRadius : 10
  },
   buttonMini : {
    padding : 2,
    backgroundColor : "#65a4df",
    alignItems : "center",
    borderRadius : 10
  },
  input : {
    borderWidth : 1,
    borderColor : "#000",
    marginLeft : 5,
    color : "#070707"
  },
  error :{
    color : "red",
    marginBottom : 10
  },
  buttonDisable : {
    backgroundColor : "#999"
  }
});