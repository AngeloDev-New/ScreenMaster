import {useState}from "react";
import { View,Text,TouchableOpacity,Modal,FlatList,Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { listFiles } from "react-native-saf-x";
import {createThumbnail} from "react-native-create-thumbnail"

import styles from "../styles"
export default props=>{
    const [InGalery,setInGalery] = useState(false)//TODO: passar a false pra n iniciar na galerya
    const [items,setItems] = useState([])
    function back(){
        setInGalery(false)
    }
async function goGalery() {
  setInGalery(true)

  const files = await listFiles(props.uri)

  const itemsWithThumbAndId = await Promise.all(
    files.map(async (item, index) => {
      try {
        const { path } = await createThumbnail({
          url: item.uri,
          timeStamp: 1000,
        })

        return {
          id: String(index),
          thumbUri: path,
          ...item,
        }
      } catch (err) {
        // Não é vídeo ou falhou → ignora thumbnail
        return {
          id: String(index),
          thumbUri: null,
          ...item,
        }
      }
    })
  )

  setItems(itemsWithThumbAndId)
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
                        {paddingTop:60},
                        styles.flex1
                    ]}>
                        <FlatList
                            data = {items}
                            numColumns={3}
                            keyExtractor={item=>item.id}
                            renderItem={({item})=>{
                                
                                return(
                                    <View style={[{
                                        height:80
                                    },
                                    styles.flex1,

                                    ]}>
                                        <Image
                                            source={{uri:item.thumbUri}}
                                            style={[
                                                styles.hFull,
                                                styles.wFull
                                            ]}
                                        />
                                        {/* <Text style={{ color: "#fff" }}>{item.name}</Text> */}
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