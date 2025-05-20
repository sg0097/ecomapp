import {StyleSheet,Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const CartCard = ({item,deleteItemFromCart}) => { 
    return(
        <View style={styles.container}>
            <Image source={{uri:item.image}} style={styles.coverImage}/>
            <View style={styles.cardcontent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            
            <TouchableOpacity onPress={()=>{
                deleteItemFromCart(item);
            }}>
            <FontAwesome6 name="trash" size={20} color={"#E55B5B"} />
            </TouchableOpacity>
        </View>


    );
}
export default CartCard;
const styles = StyleSheet.create({
    container:{
       
        flexDirection: "row",
        marginVertical: 10,
    },
    coverImage:{
        width: "25%",
        height: 125,
        borderRadius: 20,
        
        
    },
    
    cardcontent:{
        flex:1,
        marginHorizontal: 10,

    },
    title:{
        fontSize: 18,
        color: "#444444",
        fontWeight: "600",
        
    },
    price:{
        color: "#797979",
        fontSize: 16,
        marginVertical: 10,
    },
   
});
