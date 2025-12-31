import React from "react";
import { View,Text, Modal,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles"
export default props=>(
    <View>
        <TouchableOpacity style={[styles.absolute,styles.b4,styles.r4]}>
            <Icon name="picture-o" size={28} color="#fff" />
        </TouchableOpacity>
    <Modal visible={false}>
        <View><Text>OK</Text></View>

    </Modal>
    </View>
)