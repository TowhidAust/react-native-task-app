import React from 'react'
import { View, Text } from 'react-native'

import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';


export default function Home() {
    return (
    <Container>
        <Text>GG</Text>
        <Footer>
          <FooterTab style={{backgroundColor:"white"}}>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active style={{backgroundColor:"#50D2C2"}}>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
}
