import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button, Form, Icon, Input, Item, Label } from 'native-base';


export default function Signup({navigation}) {
    return (

        <View style={styles.container}>
          <View style={styles.containerInner}>
            <View style={styles.iconContainer}>
              <Icon style={styles.loginIcon} type="AntDesign" name="addusergroup" />
              {/* <Text>Task App</Text> */}
            </View>
            <Form>
              <Item floatingLabel style={styles.input}>
                <Label>Name</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.input}>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel last style={styles.input}>
                <Label>Password</Label>
                <Input secureTextEntry={true}/>
              </Item>

              <Button block class rounded style={styles.loginButton} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.loginBtnText}>Sign Up</Text>
              </Button>

             
            </Form>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({

    input: {
      padding:5,
    },
    container: {
      padding: 15, 
      width:"100%",
      flex: 1,
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: "center",
    },

    iconContainer:{
      height:45,
      width: "100%",
      display: "flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      
    },

    loginIcon:{
      backgroundColor: "#50D2C2",
      color: "white",
      padding: 21,
      fontSize: 38,
      borderRadius: 100,
    },

    containerInner: {
      width: "100%",
    },

    loginButton: {
      backgroundColor: "#50D2C2",
      marginTop: 25
    },

    
    loginBtnText: {
      color: "white",
    },
    
});

