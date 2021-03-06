import { Button, Form, Icon, Input, Item, Label } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Login({navigation}) {
    return (

        <View style={styles.container}>
          <View style={styles.containerInner}>
            <View style={styles.iconContainer}>
              <Icon style={styles.loginIcon} type="AntDesign" name="user" />
              {/* <Text>Task App</Text> */}
            </View>
            <Form>
              <Item floatingLabel style={styles.input}>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last style={styles.input}>
                <Label>Password</Label>
                <Input />
              </Item>

              <Button block class rounded style={styles.loginButton} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.loginBtnText}>Log In</Text>
              </Button>

              <View style={styles.notSignedupContainer}>
                <Text>Not Signed Up?</Text>
                <Button transparent onPress={()=> navigation.navigate('Signup')}>
                  <Text style={styles.signupButtonText}> Sign Up </Text>
                </Button>
              </View>
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

    notSignedupContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection:"row",
      paddingTop: 10,
      paddingRight:25,
    },
    signupButtonText: {
      color: "#50D2C2"
    }
    
});
