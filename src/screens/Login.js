import { Button, Container, Content, Form, Input, Item, Label } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Login({navigation}) {
    return (
      <Container style={styles.container}>
        <Content>
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
          </Form>
        </Content>
    </Container>
    )
}

const styles = StyleSheet.create({

    input: {
      padding:5,
    },
    container: {
      padding: 5, 
      width:"100%",
    },

    loginButton: {
      backgroundColor: "#50D2C2",
      marginTop:25
    },

    loginBtnText: {
      color: "white",
    }
});
