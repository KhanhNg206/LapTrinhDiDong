import { useCallback, useEffect, useMemo, useState } from "react";
import { PRODUCT } from "./ProductObj";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ProductOBJ from "./ProductObj";

export default function ProductManHinh(){
    const [products,setPorducts] = useState<PRODUCT[]>([]);
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [error,setError] = useState("")
    const [submit,setSubmit] = useState(false);
    const [actionAdd,setActionAdd] = useState(false);
    const [deleteId,setDeleteId] = useState("");
    const [search,setSearch] = useState("");

    const fetchAPI = useCallback(async() => {
        try{
            setLoading(true);
            const reponse = await fetch("https://dummyjson.com/products?limit=10");
            const data = await reponse.json();

            setPorducts(data.products as PRODUCT[])
        }catch(error){
            console.log(error);
            setError("Không có sản phẩm")
        }finally{
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        fetchAPI();
    },[]);

    const handleAdd = async () => {
        const trimName = name.trim();
        const priceNumber = Number(price);

        if(trimName === ""){
            setError("tên không để trống")
            return;
        }
        if(!Number.isFinite(priceNumber) || priceNumber <= 0){
            setError("giá phải là số hữu hạn lớn hơn 0");
            return;
        }

        try{
            setSubmit(true);
            const reponse = await fetch("https://dummyjson.com/products/add",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({
                        title : trimName,
                        price : priceNumber,
                    }),
                }
            );

            const newProduct = (await reponse.json()) as PRODUCT;
            setPorducts((oldProduct) => [newProduct,...oldProduct]);

            setName("");
            setPrice("");
            setActionAdd(true);
        }catch(error){
            setError("Không thêm được sản phẩm");
        }finally{
            setSubmit(false);
        }
    };

    const handleDelete = () => {
        const id = Number(deleteId);
        setPorducts((oldProduct) => oldProduct.filter((item) => item.id !== id));
        setDeleteId("");
    }

    const handleSearch = () =>{
        const keyWords = name.trim().toLowerCase();
        const result = products.filter((item) => item.title.toLowerCase().includes(keyWords));
        if(keyWords !== ""){
            setPorducts(result);
        }
        else{
            fetchAPI();
        }
    };

    const handleUpdate = () => {
        const id = Number(deleteId);
        const nameTrim = name.trim();
        const priceTrim = Number(price);

        setPorducts((oldProduct) => oldProduct.map((item) => item.id === id ?
                                    {...item,title : nameTrim,price : priceTrim} : item ));
    
        setName("");
        setDeleteId("");
        setPrice("");
    }

    const handleDeleteObj = (id : number) => {
        setPorducts((oldProduct) => oldProduct.filter((item) => item.id !== id))
    }


    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <View>
                    <Text>Nhập tên :</Text>
                    <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
                </View>
                <View>
                    <Text>Nhập giá :</Text>
                    <TextInput style={styles.input} value={price} onChangeText={setPrice}></TextInput>
                </View>
                 <View>
                    <Text>Nhập id :</Text>
                    <TextInput style={styles.input} value={deleteId} onChangeText={setDeleteId}></TextInput>
                </View>
                <Pressable  onPress={handleAdd} disabled={actionAdd || submit}>
                    <Text style={[styles.button, (submit || actionAdd ) && styles.buttonDis] } >Thêm</Text>
                </Pressable>
                <Pressable  onPress={handleDelete} >
                    <Text style={styles.button} >Xóa</Text>
                </Pressable>
                <Pressable  onPress={handleSearch} >
                    <Text style={styles.button} >Tìm Kiếm</Text>
                </Pressable>
                <Pressable  onPress={handleUpdate} >
                    <Text style={styles.button} >Cập nhật</Text>
                </Pressable>
            </View>
            <h1>Danh sách sản phẩm</h1>
            {error != "" ? (
               <View>
                 <Text>{error}</Text>
                <Pressable  onPress={() => setError("")}>
                    <Text style={styles.button } >Làm lại</Text>
                </Pressable>
               </View>
            ) : (
                <View style={styles.container}>
                    {loading ? (
                <ActivityIndicator size="large"></ActivityIndicator>
            ) : (
                <FlatList
                 data={products}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({item}) => (
                <View style={styles.item}>
                    <ProductOBJ product={item} onDelete={handleDeleteObj}></ProductOBJ>
                </View>
            )}
            ></FlatList>
            )}
                </View>
                
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
   item : {
    borderWidth : 1,
    borderRadius : 16,
    margin : 8,
    borderStyle : "solid",
    backgroundColor : "#fff"
  },
  form :{
    borderWidth : 1,
    borderRadius : 8,
    margin : 10,
    padding : 20,
    width : 300
  },
  input : {
    borderWidth : 1,
    borderRadius : 4
  },
  button : {
    backgroundColor : "#5facdf",
    margin : 10,
    borderRadius : 4,
    alignItems : "center",
    padding : 5,
    textAlign : "center"
  },
  buttonDis : {
    backgroundColor : "#999"
  }
});
