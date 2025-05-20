import {StyleSheet,Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/header';
import CartCard from '../components/CartCard';
import {CartContext} from "../context/CartContext";
import { useContext } from 'react';


const CartScreen = () => {
    const {carts,totalPrice,deleteItemFromCart} = useContext(CartContext)
    return(
        <LinearGradient colors={["#FDF0F3","#FFFBFC"]} style={styles.container}>
            <View style={styles.headerContainer}>
            <Header isCart={true}/>
            </View>
            
            <FlatList data={carts} 
            ListHeaderComponent={
                <>
                 
                </>
            }
            renderItem={({item})=> <CartCard item={item} deleteItemFromCart={deleteItemFromCart}/>}
            ListFooterComponent={
                <>
                <View style={styles.pricecontainer}>
                <View style={styles.priceandtitle}>
                    <Text style={styles.tex}>Total</Text>
                    <Text style={styles.tex}>{totalPrice}</Text>
                </View>
                <View style={styles.priceandtitle}>
                <Text>shipping </Text>
                <Text>rs 0 </Text>
                </View>
            </View>
            <View style={styles.divider}/>
             <View style={styles.priceandtitle}>
                    <Text style={styles.tex}>Grand Total</Text>
                    <Text style={[styles.tex,{color:"black",fontWeight:"700"}]}>{totalPrice}</Text>
                </View>
                </>
            }
            />
           
                <TouchableOpacity style={
                    styles.checkoutcontainer
                }>
                    <Text style={styles.buttontext}>Checkout</Text>
                </TouchableOpacity>
        </LinearGradient>
    )
}
export default CartScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
    },
    headerContainer:{
        marginBottom: 20,
    },
    priceandtitle:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:20,
        marginVertical: 10,
    },
    tex:{
        color:"#757575",
        fontSize: 18,
    },
    pricecontainer:{
       
        marginTop: 40,
    },
    divider:{
        height: 1,
        borderwidth: 1,
        backgroundColor: "#E0E0E0",
        marginVertical: 20,
    },
    checkoutcontainer:{
        backgroundColor: "#E55B5B",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    buttontext:{
        fontsize:25,
        color:"white",
        TextAlign: "center",
    }
    
});
