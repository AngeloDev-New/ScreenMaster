import React,{Component} from "react";
import { View,TouchableOpacity,Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Galery from "../Galery"
import styles from "../styles"
export default class StartupScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            Recording:false,
            currentRecording:{
                time:"00:00:00"
            }
            
        }
        this.tooglePlay_Pause = this.tooglePlay_Pause.bind(this)
    }
    tooglePlay_Pause(){
        this.setState({Recording:!this.state.Recording})
    }
    render(){
        return(
            <View style={[styles.flex1,styles.center,styles.bgDark]}>
                <View style={[styles.row,styles.center,styles.bgDark]}>
                <TouchableOpacity style={styles.p4} onPress={this.tooglePlay_Pause}>
                    <Icon name={this.state.Recording?"pause":"play"} size={140} color={this.state.Recording?"#fff":"#fff"}></Icon>
                </TouchableOpacity>
                {this.state.Recording&&
                (<TouchableOpacity style={styles.p4}>
                    <Icon name={"stop"} size={140} color={"#f00"}></Icon>
                </TouchableOpacity>)}
                </View>
                {this.state.Recording&&
                (<Text style={[styles.textWhite,styles.textLg,styles.mt4]}>{this.state.currentRecording.time}</Text>)}
                <Text style={[styles.textWhite,styles.textLg,styles.mt4]}>{this.state.Recording?"Gravando":"Gravar"}</Text>
                <View>
                </View>
                    <Galery visible={true}/>

            </View>
        )
    }
}