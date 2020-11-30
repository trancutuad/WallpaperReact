import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList  } from 'react-native';
import React, { useState, useEffect  } from 'react';

export default function App() {

  const [dulieu,setimage] = useState();

  useEffect(()=> {
  fetch('http://192.168.1.160:7070/getAllKhachHang')
  .then((response) => response.json())
  .then((json)=> {
    setimage(json);
  })
  .catch((error) =>{
    alert(error);
    
  });
});

  return (
    <View style={styles.container}> 
      <FlatList 
      data={dulieu}
      renderItem={({ item })=> (
        <TouchableOpacity>

          <View style={styles.row}>
          
      <Image       style={{ width: 350, height: 300, }}
      resizeMode="cover"
      source ={{ uri: `http://192.168.1.160:7070/${item.image}`  }}></Image>

      <Text> User: {item.username}</Text>
      <Text>Pass: {item.password}</Text>
      <Text>Phone: {item.sdtKH}</Text>

      
            </View>
          
        </TouchableOpacity>
      )}
      numColumns={1}
      keyExtractor={(item) => item._id}>


      </FlatList>

      <StatusBar style="auto" />
    </View>
  );
      }


const styles = StyleSheet.create({
  container: {

   padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eaeaea",
    
  },
  row: {
    padding:10,
     borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
   
  },
  img: {
    width:80,
    height: 80,
  }
});
