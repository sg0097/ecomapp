import {Image, StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Header = ({ isCart }) => {
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <TouchableOpacity  
        onPress={() => navigation.navigate("HOME_STACK")} style={styles.
            appiconcontainer}>
            {
                isCart ? (<Ionicons name={"chevron-back"} size={20} color={"#E96E6E"} /> 

                ) :(
                     <Image source={require('../assests/appicon.png')} style={styles.appicon}/>
            
                )
            }
            
            </TouchableOpacity>
            {isCart && <Text style={styles.text}>My cart</Text>}
            <Image source={require('../assests/dp.png')} style={styles.dp}/>
        
    </View>
);
};
export default Header;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appiconcontainer:{
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appicon:{
        width: 28,
        height: 28,
       
    },
    dp:{
        width: 44,
        height: 44,
        borderRadius: 22,
       
    },
    text:{
        fontSize:28,
        color:'black',
    }
})