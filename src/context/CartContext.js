import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext,useEffect,useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carts, setCarts] = useState([]);
    const [totalPrice,settotalPrice]=useState(0);
    useEffect(() => {
        loadcartitems();
    },[]);
    const loadcartitems = async()=>{
        let carts = await AsyncStorage.getItem("carts");
        carts= carts ? JSON.parse(carts):[];
        console.log("carts:",carts)
        setCarts(carts); 
        totalsum(carts);

    };
  

    const addtocart = async (item) => {
        const itemexist=carts.findIndex((cart) => cart.id === item.id);
        if(itemexist===-1){
            const newCartItems = [...carts, item];
            await AsyncStorage.setItem("carts",JSON.stringify(newCartItems));
            setCarts(
                newCartItems
            );
            totalsum(newCartItems);
    }
};
const deleteItemFromCart = async (item) => {
    const newItems=carts.filter((cart) => cart.id !==
    item.id);
     
    await AsyncStorage.setItem("carts",JSON.stringify(newItems));
    setCarts(newItems);
     totalsum(newItems);
};
const totalsum=(carts)=>{
    const totalSum=carts.reduce((amount,item) => amount+item.price,0);
    console.log('totalSum: ',totalsum);
    settotalPrice(totalSum);
};

    const value = {
        carts,
        addtocart,
        totalPrice,
        deleteItemFromCart,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider >;
};