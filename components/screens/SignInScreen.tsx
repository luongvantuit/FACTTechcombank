import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Pressable,
  Platform,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {UndrawAccessAccount} from '../../assets';
import Colors from '../../assets/colors';
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignInScreen({navigation}: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <StatusBar
          barStyle={'dark-content'}
          translucent={Platform.OS === 'android'}
          backgroundColor={Colors.transparent}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 72,
          }}>
          <ImageBackground
            source={UndrawAccessAccount}
            style={{
              height: 340,
            }}
          />
          <Text
            style={{
              fontWeight: '900',
              fontSize: 24,
              marginHorizontal: 32,
              marginVertical: 8,
              color: Colors.text,
            }}>
            Hey
          </Text>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 28,
              marginHorizontal: 32,
              marginBottom: 8,
              color: Colors.text,
            }}>
            Sign In, Now.
          </Text>
          <TextInputRegister />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 32,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: Colors.text,
              }}>
              Forgot Password?
            </Text>
            <Pressable style={{marginHorizontal: 8}} onPress={() => {}}>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  color: Colors.text,
                }}>
                Reset
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 8,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.text,
            }}
            onPress={() => {
              navigation.navigate('otp-sign-in');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.neutralLightest,
              }}>
              Next Step
            </Text>
          </Pressable>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '800',
              fontSize: 12,
              marginTop: 8,
              color: Colors.text,
            }}>
            Your Haven't Account
          </Text>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 16,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.yellowDark,
            }}
            onPress={() => {
              navigation.navigate('sign-up');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.text,
              }}>
              Create New Account
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
