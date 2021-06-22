import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';



import AppInput from '../components/AppInput';
import AppScreen from '../components/AppScreen';

const LogIn = ({ navigation }) => {
    const handleSubmit = () => { navigation.navigate("OTP") };
    return (
        <AppScreen style={styles.screen}>
            <Image resizeMode="contain" source={require('../assets/bg.jpeg')} style={styles.image} />
            <AppInput />
            <View style={styles.details}>
                <Icon name="info" size={20} style={{ margin: 5 }} />
                <Text style={{ fontSize: 12 }}>If you have account type the number you used to Signup</Text>
            </View>
            <View style={styles.button}>
                <Button title="Submit" color="#EF4F4F" onPress={handleSubmit} />
            </View>
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginBottom: 180
    },
    screen: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: "#3EDBF0",
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        width: 250
    },
    image: { width: 200, height: 300, borderRadius: 20 }
})
export default LogIn;