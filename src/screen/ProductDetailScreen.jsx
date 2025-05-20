import { StyleSheet,Text,View } from "react-native";
import React, { useContext } from "react";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Header from "../components/header";
import { useRoute } from "@react-navigation/native";
import addtocart, { CartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { ScrollView } from 'react-native';


const imageuri="https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const {addtocart} = useContext(CartContext);
    const route = useRoute();
    const item = route.params.item;
    
    const [selectedsize, setSelectedSize] = React.useState(null);
    const [selectedcolor, setSelectedColor] = React.useState(null);
    const handleaddtocart = (item) => {
        item.size=selectedsize;
        item.color=selectedcolor;
        addtocart(item);
        navigation.navigate('Cart');

    };

    return(
        <LinearGradient colors={["#FDF0F3","#FFFBFC"]} style={styles.container} >
             <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.headerContainer}>
                <Header />
                </View>
                

                <Image source={{uri:item.image}} style={styles.coverimage}/>


                <View style={styles.contentcontainer}>
                    <Text style={styles.description}>Description :</Text>
                  <Text style={styles.title}>{item.description}</Text>
                </View>


                <View>
                    <Text style={styles.price}>Price : ${item.price}</Text>
                </View>

                <View style={styles.ra}>
                    <Text style={styles.rate}>Ratings : {item.rating.rate}(5)</Text>
                    <Text style={styles.rate}>Rating Counts : {item.rating.count}</Text>
                </View>
                
         </ScrollView>

        <TouchableOpacity style={styles.button} onPress ={() => {
            handleaddtocart(item);
        }}>
            <Text style={styles.buttonText}>
                Add to cart
            </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
};
export default ProductDetailScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    ra:{
        flex:1,
    },
    headerContainer:{
        padding:10
    },
    coverimage:{
        width: "100%",
        height: 300,
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    contentcontainer:{
        
        justifyContent: "space-between",
    },
    title:{
        fontSize: 15,
        fontWeight: "500",
        color: "#444444",
        marginHorizontal: 5,
        


    },
    price:{
       
       fontSize: 20,
       fontWeight: "304",
       marginHorizontal: 5,
       marginTop: 10,
    },
    sizeText:{
      marginHorizontal: 10,
      marginTop: 20,
    },
    sizeContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        
    },
    sizeValueContainer:{
        backgroundColor: "#FFFFFF",
        height: 36,
        width: 36,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    sizeValue:{
        fontSize: 18,
        fontWeight: "600",
        color: "#444444",
    },
    colorText:{
        marginTop: 20,
        marginHorizontal: 10,
    },
    circle:{
        height: 36,
        width: 36,
        borderRadius: 20,
    },
    colorContainer:{
        flexDirection: "row",
        marginHorizontal: 20,
    },
    circleborder:{
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems: "center",
        
        justifyContent: "center",
        marginHorizontal: 5,
        
    },
    button:{
        backgroundColor: "#E96E6E",
        padding:10,
        borderRadius: 20,
        marginTop: 20,

        
    }
    ,
    buttonText:{
        fontSize: 24,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },
    rate:{
        fontSize: 20,
        marginHorizontal: 5,
        
    },
    description:{
        fontSize: 20,
    }
    
});