
import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import { Text, Button } from 'react-native-elements';

import AppScreen from '../components/AppScreen';

const OTPSCreen = () => {
    const [v1, setV1] = React.useState('');
    const [v2, setV2] = React.useState('');
    const [v3, setV3] = React.useState('');
    const [v4, setV4] = React.useState('');
    const [v5, setV5] = React.useState("");
    const [v6, setV6] = React.useState("");
    const [counter, setCounter] = React.useState(120);
    var r1 = React.useRef();
    var r2 = React.useRef();
    var r3 = React.useRef();
    var r4 = React.useRef();
    var r5 = React.useRef();
    var r6 = React.useRef();

    const Timer = () => {
        return setInterval(() => {
            setCounter((count) => count - 1);
        }, 1000);
    };
    React.useEffect(() => {
        const id = Timer();
        clearInterval(id)
        return () => clearInterval(id);
    });
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.title}><Text h3>ENTER OTP</Text></View>
            <View style={styles.otpContainer}>
                <TextInput ref={r1} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v1} onChangeText={(text) => {
                    setV1(text);
                    r2.current.focus();
                }} />
                <TextInput ref={r2} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v2} onChangeText={(text) => {
                    setV2(text);
                    r3.current.focus();
                }} />
                <TextInput ref={r3} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v3} onChangeText={(text) => {
                    setV3(text);
                    r4.current.focus();
                }} />
                <TextInput ref={r4} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v4} onChangeText={(text) => {
                    setV4(text);
                    r5.current.focus();
                }} />
                <TextInput ref={r5} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v5} onChangeText={(text) => {
                    setV5(text);
                    r6.current.focus();
                }} />
                <TextInput ref={r6} style={styles.otpInput} maxLength={1} keyboardType="numeric" textAlign="center" value={v6} onChangeText={(text) => setV6(text)} />
            </View>
            <Text h5>`The sent OTP will be expired within {counter} seconds`</Text>
            <Button buttonStyle={{ marginTop: 30 }} title="SUBMIT" />
        </AppScreen>
    )
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    otpInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 2,
        width: 50,
        height: 50
    },
    screen: {
        flex: 1,
        padding: 30,
        backgroundColor: "#3EDBF0"

    },
    title: { alignItems: 'center', justifyContent: 'center', margin: 30, fontSize: 23 }
});
export default OTPSCreen;