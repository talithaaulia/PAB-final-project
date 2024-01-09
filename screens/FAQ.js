import React, { useState } from "react";
import {NativeBaseProvider, Box, Pressable, Icon, Text, Button} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';


const FAQ = ({navigation}) => {

  const [showFAQ, setshowFAQ] = useState(false)
  const gotoAbtus = () => {
    navigation.navigate('tentangkami');
  };

  return (
    <NativeBaseProvider>
      <Box flexDirection="row" mt={60} marginLeft={4} marginTop={10}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
              <FontAwesome name={"arrow-circle-left"} size={28} color="#ec685f" />
          </Pressable>
      </Box>
      <Box justifyContent="center" alignItems="center" marginTop={10}>
        <Text fontSize={30} mb={10} color="white" bg="#ec685f" p={2} borderRadius={10} fontWeight={"bold"}>
          FAQ
        </Text>
      </Box>
        
      <Box style={{flex: 1}}>
        <Pressable style={{height:50, weight: 50, 
          backgroundColor: "#ffffff", elevation: 4, 
          borderRadius: 5, p: 10, paddingVertical: 10, 
          paddingHorizontal: 30, marginHorizontal: 15, flexDirection: 'row'}} 
          onPress={()=> setshowFAQ(!showFAQ)} >
        <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 16, color:"#ec685f", fontWeight: "bold"}}>
          Apakah aplikasi juga tersedia web version?
        </Text>
        </Box>

        <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="arrow-drop-down-circle" size={24} color="#ec685f" />
        </Box>
        </Pressable>
      {showFAQ && (
          <Box style={{marginHorizontal: 20, backgroundColor: "#ec685f",p: 2, elevation: 10,
              paddingVertical: 10, paddingHorizontal: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}>
          <Text style={{color: "#ffffff"}}>
            Hai, teman masak!😁 Sayangnya aplikasi belum dibuat dalam versi web yaa. Tapi tidak menutup kemungkinan 
            bahwa developer akan mempertimbangkan hal tersebut! Jadi tolong terus dukung kami yaa😉
          </Text>
        </Box>
        )
      } 
      </Box>

      <Box style={{flex: 1}}>
        <Pressable style={{height:50, weight: 50, 
          backgroundColor: "#ffffff", elevation: 4, 
          borderRadius: 5, p: 10, paddingVertical: 10, 
          paddingHorizontal: 30, marginHorizontal: 15, flexDirection: 'row'}} 
          onPress={()=> setshowFAQ(!showFAQ)} >
        <Box style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{ fontSize: 16, color:"#ec685f", fontWeight: "bold"}}>
          Bagaimana cara menghubungi admin?
        </Text>
        </Box>

        <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="arrow-drop-down-circle" size={24} color="#ec685f" />
        </Box>
        </Pressable>
      {showFAQ && (
        <Button onPress={gotoAbtus} variant="link" marginTop={0}>
        <Box style={{marginHorizontal: 20, backgroundColor: "#ec685f",p: 2, elevation: 10,
              paddingVertical: 10, paddingHorizontal: 10, borderBottomLeftRadius: 6, 
              borderBottomRightRadius: 6}}>
          <Text style={{color: "#ffffff"}}>
            Kamu bisa menghubungi admin melalui beberapa sosial media disini! [klik disini]
          </Text>
        </Box>
        </Button>
        )
      } 
      </Box>

      <Box style={{flex: 1}}>
        <Pressable style={{height:50, weight: 50, 
          backgroundColor: "#ffffff", elevation: 4, 
          borderRadius: 5, p: 10, paddingVertical: 10, 
          paddingHorizontal: 30, marginHorizontal: 15, flexDirection: 'row'}} 
          onPress={()=> setshowFAQ(!showFAQ)} >
        <Box style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{ fontSize: 16, color:"#ec685f", fontWeight: "bold"}}>
          Apa saja fitur yang ada di aplikasi ini?
        </Text>
        </Box>

        <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="arrow-drop-down-circle" size={24} color="#ec685f" />
        </Box>
        </Pressable>
      {showFAQ && (
          <Box style={{marginHorizontal: 20, backgroundColor: "#ec685f",p: 2, elevation: 10,
              paddingVertical: 10, paddingHorizontal: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}>
          <Text style={{color: "#ffffff"}}>
            Aplikasi ini masih dalam tahap pengembangan😇
          </Text>
        </Box>
        )
      } 
      </Box>

      <Box style={{flex: 1}}>
        <Pressable style={{height:50, weight: 50, 
          backgroundColor: "#ffffff", elevation: 4, 
          borderRadius: 5, p: 10, paddingVertical: 10, 
          paddingHorizontal: 30, marginHorizontal: 15, flexDirection: 'row'}} 
          onPress={()=> setshowFAQ(!showFAQ)} >
        <Box style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{ fontSize: 16, color:"#ec685f", fontWeight: "bold"}}>
          Apakah aplikasi ini free?
        </Text>
        </Box>

        <Box style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="arrow-drop-down-circle" size={24} color="#ec685f" />
        </Box>
        </Pressable>
      {showFAQ && (
          <Box style={{marginHorizontal: 20, backgroundColor: "#ec685f",p: 2, elevation: 10,
              paddingVertical: 10, paddingHorizontal: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}>
          <Text style={{color: "#ffffff"}}>
            Kamu bisa mengakses aplikasi dan menggunakan fitur-fitur di dalamnya dengan gratis!😬 
          </Text>
        </Box>
        )
      } 
      </Box>
    </NativeBaseProvider>
  );
};

export default FAQ;