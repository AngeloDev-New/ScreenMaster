import {Component} from "react";
import { View,TouchableOpacity,Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RecordingList from "../RecordingList"
import { openDocumentTree,mkdir, listFiles } from "react-native-saf-x";
import tw from "../styles"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StartupScreen extends Component{
componentDidMount() {
  AsyncStorage.getItem("@uri-recording-list")
    .then(uri => {
      if (!uri) {
        this.setState({ uri_recording_list: "" });
        return;
      }
      this.setState({ uri_recording_list: uri });
      listFiles(this.normalizedTreeUri(uri))
        .then(() => {
            console.log("Uri Atualizada com sucesso")
        })
        .catch(() => {
          this.setState({ uri_recording_list: "" });
          AsyncStorage.removeItem("@uri-recording-list");
        });
    });
}
    constructor(props){
        super(props)
        this.state = {
            uri_recording_list:"",
            Recording:false,
            currentRecording:{
                time:"00:00:00"
            }
            
        }
        this.tooglePlay_Pause = this.tooglePlay_Pause.bind(this)
        this.getUri = this.getUri.bind(this)
        this.normalizedTreeUri = this.normalizedTreeUri.bind(this)
    }
    getUri(){
        openDocumentTree(true)
            .then(doc =>{
                if(doc){
                    const uri = doc.uri
                    if(doc && uri){
                        this.setState({uri_recording_list:uri})
                        AsyncStorage.setItem("@uri-recording-list",uri)
                }else{
                    this.setState({uri_recording_list:""})
                }
                }
            })
    }
    normalizedTreeUri(uri) {
        if (!uri) return null;
            return uri.split("/document/")[0];
}
    tooglePlay_Pause(){
        this.setState({Recording:!this.state.Recording})
    }
    render(){
        return(
            <>
                <View style={[tw.flex1,tw.center,tw.bgDark]}>
                    <View style={[tw.row,tw.center,tw.bgDark]}>
                    <TouchableOpacity style={tw.p4} onPress={this.tooglePlay_Pause}>
                        <Icon name={this.state.Recording?"pause":"play"} size={140} color={this.state.Recording?"#fff":"#fff"}></Icon>
                    </TouchableOpacity>
                    {this.state.Recording&&
                    (<TouchableOpacity style={tw.p4}>
                        <Icon name={"stop"} size={140} color={"#f00"}></Icon>
                    </TouchableOpacity>)}
                    </View>
                    {this.state.Recording&&
                    (<Text style={[tw.textWhite,tw.textLg,tw.mt4]}>{this.state.currentRecording.time}</Text>)}
                    <Text style={[tw.textWhite,tw.textLg,tw.mt4]}>{this.state.Recording?"Gravando":"Gravar"}</Text>
                    <View>
                    </View>
                </View>
                {
                    this.state.uri_recording_list && <RecordingList/>
                }
                { 
                    !this.state.uri_recording_list && (<TouchableOpacity
                        onPress={this.getUri} 
                        style={
                            [tw.bgRed,tw.m1,tw.row,tw.textSm,
                                tw.rounded,tw.p3,tw.absoluteCenter,tw.b4]}>
                                <Icon name="exclamation-triangle" size={24} color="#facc15" />
                                <Text style={tw.textWhite}>Escolha uma pasta no dispositivo.</Text>
                                </TouchableOpacity>)
                }
            </>
        )
    }
}