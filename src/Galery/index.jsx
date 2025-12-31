import React ,{useState}from "react";
import { View,Text, Modal,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles"

export default props=>{
    const [isGalleryOpen,setIsGalleryOpen] = useState(false)
    function openGalery(){
        setIsGalleryOpen(true)
    }
    function closeGalery(){
        setIsGalleryOpen(false)
    }
    return (
    <View>
    <Modal visible={isGalleryOpen}>
        <View><Text>OK</Text></View>
    </Modal>
        <TouchableOpacity style={[styles.absolute,styles.b4,styles.r4]} onPress={openGalery}>
            <Icon name="picture-o" size={30} color="#fff" />
        </TouchableOpacity>
    </View>
)}