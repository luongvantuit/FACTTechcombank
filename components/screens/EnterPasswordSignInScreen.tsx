import {Theme, useTheme} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  TextInput,
  Platform,
  Pressable,
  StatusBar,
  Dimensions,
} from 'react-native';
import {UndrawMyPassword} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';
import * as Progress from 'react-native-progress';

export default function EnterPasswordSignInScreen({
  navigation,
}: any): JSX.Element {
  const [shownAlert, setShownAlert] = useState<boolean>(false);
  return shownAlert === true ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <Progress.Circle
        borderWidth={6}
        indeterminate
        color={Colors.blueLight}
        strokeCap={'butt'}
        size={98}
        animated={true}
      />
    </View>
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={'position'}>
        <StatusBar
          barStyle={'dark-content'}
          translucent={Platform.OS === 'android'}
          backgroundColor={Colors.transparent}
        />
        <ImageBackground
          source={UndrawMyPassword}
          style={{
            height: 340,
          }}
        />
        <Text
          style={{
            fontWeight: '900',
            marginTop: 8,
            marginHorizontal: 32,
            fontSize: 28,
            color: Colors.text,
          }}>
          Enter Your Password
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
            marginHorizontal: 32,
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 16,
              color: Colors.text,
              marginRight: 4,
            }}>
            {user.numberPhone}
          </Text>
          <EntypoIcons name={'check'} color={Colors.green} size={20} />
        </View>
        <TextInput
          placeholder={'6-Digit'}
          keyboardType={'numeric'}
          maxLength={6}
          style={{
            marginHorizontal: 32,
            marginTop: 16,
            marginBottom: 12,
            paddingVertical: Platform.OS === 'android' ? 16 : 20,
            paddingHorizontal: 16,
            borderRadius: 8,
            fontWeight: '900',
            ...shadowBox,
            color: Colors.text,
            backgroundColor: Colors.neutralLightest,
          }}
          placeholderTextColor={Colors.neutralLight}
          secureTextEntry={true}
        />
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
            if (shownAlert === false) {
              setShownAlert(true);
              let timeOut: NodeJS.Timeout = setTimeout(() => {
                clearTimeout(timeOut);
                setShownAlert(false);
                navigation.navigate('app-user');
              }, 1200);
            }
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Sign In
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 32,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            marginVertical: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.yellowDark,
          }}
          onPress={() => {
            navigation.navigate('sign-in');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.text,
            }}>
            Change Phone Number
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
