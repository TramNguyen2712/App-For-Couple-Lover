import * as React from 'react' 
import {Text, View} from 'react-native'
import {Header} from 'react-native-elements' 
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import {Heading, Page} from '../components'
import * as Notifications from 'expo-notifications'

async function getNotificationToken () {
    const {status} = await Notifications.getPermissionsAsync()
    if (status != 'granted') {
        const {status} = await Notifications.requestPermissionsAsync()
        if (status != 'granted') {
            alert('failed to get notification token')
            return
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log({token})
    return token
}



const BoyScreen : React.FC = () => {
    return (
        <View>
            <Header centerComponent={{text:'For Boy Screen 👱🏼', style: {color: '#fff'}}}/>
            <Page>
                <Heading>Did you get the code yet?</Heading>
                <Button title="Press to get the code" onPress={getNotificationToken} />
            </Page>
        </View>
    )
}

export default BoyScreen