import {useState}from "react";
import { View,Text,TouchableOpacity,Modal,FlatList,Image, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { listFiles } from "react-native-saf-x";
import {createThumbnail} from "react-native-create-thumbnail"
// "Pacote desatualizado"
// import IntentLauncher from "react-native-intent-launcher"
import styles from "../styles"
export default props=>{
    const [InGalery,setInGalery] = useState(false)//TODO: passar a false pra n iniciar na galerya
    const [items,setItems] = useState([])
    function back(){
        setInGalery(false)
    }
    function openVideoUrl(uri){

    }
    function goGalery(){
        setInGalery(true)
        listFiles(props.uri)
            .then(items=>{
                const itemsWithKey = items.map((item,index)=>{
                    // async function getThumbUri(urlVidep) {
                    //     const thumb = await createThumbnail({url:urlVidep,timeStamp:1000}) 
                    //     return thumb.path
                    // }
                    const mod = new Date(item.lastModified)
                    return {
                        ...item,
                        lastModified:mod.toString(),
                        id:index,
                        thumbUri:null
                    }
                    
                }) 
                console.log(itemsWithKey)
                setItems(itemsWithKey)})
                

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
                    <View style={[
                        {paddingTop:70},
                        styles.flex1
                    ]}>
                        <FlatList
                            data = {items}
                            numColumns={1}
                            keyExtractor={item=>item.id}
                            renderItem={({item})=>{
                                
                                return(
                                    <View style={[{
                                        // height:100,
                                        margin:5,
                                        
                                    },
                                    
                                    styles.flex1,

                                    ]}>
                                        <TouchableOpacity 
                                            style={[
                                                styles.row
                                                ]} 
                                            onPress={()=>openVideoUrl(item.uri)}>
                                            <Image
                                                source={
                                                    item.thumbUri
                                                    ?{uri:item.thumbUri}
                                                    :require("../images/thumbDefault.png")
                                                }
                                                style={[
                                                    styles.rounded,
                                                    styles.hFull,
                                                    styles.flex1,
                                                   
                                                ]}
                                            />
                                            <View style={[styles.col,styles.flex2,styles.p3]}>
                                                <Text style={[styles.textWhite,styles.textMd]}>{item.name}</Text>
                                                <Text style={[styles.textWhite,styles.textSm]}>{item.lastModified}</Text>
                                                
                                            </View>
                                        </TouchableOpacity>
                                                                
                                    </View>
                                    )
                            }}
                        />

                    </View>
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