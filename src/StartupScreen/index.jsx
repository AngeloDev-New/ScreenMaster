import React,{Component} from "react";
import { View,TouchableOpacity,Text } from "react-native";
import Styles from "../styles"
export default class StartupScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            status:false
        }
    }
    render(){
        return(
            <View style={Styles.container}>
                <TouchableOpacity>
                    {/* <BtPlay/> */}
                </TouchableOpacity>
                <Text style={Styles.text_default}>{this.state.status?"Gravando":"Não gravando"}</Text>
            </View>
        )
    }
}