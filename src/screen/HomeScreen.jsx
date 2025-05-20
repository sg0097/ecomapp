import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import Productcard from '../components/Productcard';
import data from "../data/data.json";

const categories = ['Trending Now','All','New','Mens','Womens']
const HomeScreen = () => {  
  const [products, setProducts] = React.useState(data.products);
  const [selectedCategory, setSelectedCategory] = React.useState("Mens");
  const [isLiked, setIsLiked] = React.useState(false);
  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod, 
          isLiked: true
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };
  
  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC","#FFFBFC"]} style={styles.container}>
    <Header />
    
      <FlatList
      numColumns={2}
      ListHeaderComponent={
        <>
        <Text style={styles.matchText}>Match your style</Text>
        <View style={styles.inputContainer}>
      <View style={styles.iconcontainer}>
      <Fontisto name="search" size={26} color={"#C0C0C0"} />
      </View>
      <TextInput style={styles.textInput} placeholder="Search"/>
      </View>
         
      <FlatList 
        data={categories} 
        renderItem={({item}) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}
        keyExtractor={(item) => item}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
      />

        </>
      }
      data = {products} renderItem=
      {({item,index})=> (<Productcard item={item} handleLiked={handleLiked} />)}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingBottom: 150,
        paddingHorizontal: 10,
      }}
      />
      {

      }
     
    </LinearGradient>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer:{
    backgroundColor: "#FFFFFF",
    height: 48, 
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  textInput:{
    flex:1,
    borderWidth: 1,
    borderColor: "black",
  },
  iconcontainer:{
    marginHorizontal: 15,
    
  },
  textInput:{
    flex:1,
  }
 
});
