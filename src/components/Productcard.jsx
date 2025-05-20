import { StyleSheet, Text,View ,TouchableOpacity} from "react-native";
import React from "react";

import { Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

 
const Productcard = ({item,handleLiked}) => {
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate("PRODUCT_DETAILS",{item});
        }} style={styles.container}>
            
            <Image source={{uri:item.image}} style={styles.coverImage}/>
            <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.price}>Rating {item.rating.rate}</Text>
            </View>
            
            <TouchableOpacity  onPress={() => {
                handleLiked(item);
            }}
            style={styles.likecontainer}>
                {item?.isLiked ? (
                       <AntDesign name="heart" size={20} color={"#E55B5B"} />
                    ) : (
                         <AntDesign name="hearto" size={20} color={"#E55B5B"} />
                    )}
                
            </TouchableOpacity>
           
        </TouchableOpacity>
    );
}
export default Productcard;
const styles = StyleSheet.create({
    container:{
        flex:1,
       // 
       marginTop:10,
       posititon: "relative",
    },
    coverImage:{
        width: "90%",
        height: 256,
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
        
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        color: "#444444",
        
    },
    price:{
        fontSize: 16,
        fontWeight: "600",
        color: "#444444",
        marginTop: 5,
    },
    content:{
       
        paddingLeft:15,
    },
    likecontainer:{
        position: "absolute",
        top: 20,
        right: 10,
        backgroundColor: "#FFFFFF",
        height: 34,
        width: 34,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
    },
    
});