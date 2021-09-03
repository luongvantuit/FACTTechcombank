import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import AppTheme from '../../themes/app-theme';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function ProfileScreen({navigation}: any) {
  const theme: AppTheme = useTheme();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: (props: any) => (
        <View
          style={{
            paddingTop: Platform.OS === 'android' ? 0 : 54,
            backgroundColor: theme.app?.backgroundHeaderColor,
          }}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              margin: 16,
            }}>
            <EntypoIcons
              name="chevron-small-left"
              size={32}
              color={theme.app?.iconHeaderColor}
            />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('app-register');
        }}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}