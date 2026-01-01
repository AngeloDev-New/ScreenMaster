import React ,{useState}from "react";
import { View,Text,TouchableOpacity,Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles"
export default props=>{
    const [InGalery,setInGalery] = useState(false)
    function back(){
        setInGalery(false)
    }
    function goGalery(){
        setInGalery(true)
    }
    return(
        <>
        <TouchableOpacity
            onPress={goGalery}  
            style={[styles.absolute,styles.r4,styles.t4]}>
            <Icon  name={"picture-o"} size={40} color={"rgba(255, 255, 255, 1)"}></Icon>
        </TouchableOpacity>
        <Modal visible={InGalery}>

            <View
                style={[styles.bgDark,styles.flex1]}>

            </View>
            <TouchableOpacity
                onPress={back}  
                style={[styles.absolute,styles.l4,styles.t4]}>
                <Icon  name={"arrow-left"} size={40} color={"rgba(255, 255, 255, 1)"}></Icon>
            </TouchableOpacity>
        </Modal>

        </>
    )
}