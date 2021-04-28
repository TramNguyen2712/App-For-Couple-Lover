import * as React from 'react' 
import {Text, TouchableOpacity, View} from 'react-native'
import {Header} from 'react-native-elements' 
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Heading, Page} from '../components'
import { sendPushNotification } from '../service/api';


const ButtonContainer = styled (View) `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const token = 'ExponentPushToken[-cFoyVEH8mH4NNzMEEg0Pa]'
const SummonButton = styled(TouchableOpacity)`
    background-color: ${p => p.color || 'red'};  
    flex: 48%  0 0 ;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`
const SummonButtonText = styled(Text)`
    color: white;
    font-size: 18px`
const GirlScreen : React.FC = () => {
    return (
        <View>
            <Header centerComponent={{text:'For Girl Screen 👩🏼', style: {color: '#fff'}}}/>
            <Page>
                <View>
                    <Input label ="Code for Verification" placeholder="Inser code for vertification here!"/>
                    <Button title='Enter'/>
                </View>
                <View style = {{marginTop: 20}}>
                    <Heading>Summoning My Boyfriend</Heading>
                    <ButtonContainer>
                        <SummonButton color = "#e74c3c" onPress={() => sendPushNotification(token, '🍜 I am so hungry', 'Come and pick me up to eat, bae 😘 ')}>
                            <SummonButtonText>🍜 I'm hungry</SummonButtonText>
                        </SummonButton>
                        <SummonButton color = "#2980b9" onPress={() => sendPushNotification(token, '😭 I miss you', 'Miss you so much bae 💋')}>
                            <SummonButtonText>😭 I miss you</SummonButtonText>
                        </SummonButton>
                        <SummonButton color = "#2ecc71" onPress={() => sendPushNotification(token, '🥤 I want buble tea', 'I crave StarBuck alot ')}>
                            <SummonButtonText>🥤 I want buble tea</SummonButtonText>
                        </SummonButton>
                        <SummonButton color = "#f1c40f" onPress={() => sendPushNotification(token, '🤙 Call me ', 'Why didnt call me yesterday? You dont even care about me 😢 ')}>
                            <SummonButtonText>🤙 Call me maybe</SummonButtonText>
                        </SummonButton>
                    </ButtonContainer>
                </View>
            </Page>
        </View>
    )
}

export default GirlScreen