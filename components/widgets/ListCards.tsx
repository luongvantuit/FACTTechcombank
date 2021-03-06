import React, {useState} from 'react';
import {View, Text, FlatList, Platform, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../assets/colors';
import listCards from '../../datas/list-cards';
import FontAwesomeIcons from '../../fonts-icon/font-awesome-icons';
import shadowBox from './ShadowBox';
Icon.loadFont();
export default function ListCards() {
  const [page, setPage] = useState<number>(0);
  return (
    <View>
      <FlatList
        data={listCards}
        bounces={false}
        overScrollMode={'never'}
        alwaysBounceHorizontal={false}
        snapToAlignment="center"
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={
          Platform.OS === 'android'
            ? Dimensions.get('window').width - 70
            : Dimensions.get('window').width - 48
        }
        onScroll={e => {
          setPage(
            Math.round(
              e.nativeEvent.contentOffset.x /
                (Dimensions.get('window').width - 72),
            ),
          );
        }}
        renderItem={({item, index}) => (
          <LinearGradient
            colors={
              item.color || [Colors.blueDark, Colors.blueDark, Colors.blueLight]
            }
            style={{
              marginHorizontal: 8,
              marginVertical: index === page ? 16 : 26,
              display: 'flex',
              flexDirection: 'row',
              padding: 16,
              borderRadius: 8,
              width: Dimensions.get('window').width - 64,
              ...shadowBox,
              height: index === page ? 200 : 180,
            }}>
            <View
              style={{
                display: 'flex',
                flexGrow: 3,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 18,
                  color: Colors.neutralLightest,
                }}>
                {item.nameBank}
              </Text>
              <View>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.neutralLightest,
                  }}>
                  {item.numberCard}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: Colors.neutralLightest,
                    }}>
                    Expiry end
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 8,
                      fontWeight: '800',
                      color: Colors.neutralLightest,
                    }}>
                    {item.expiryEnd}
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 24,
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.neutralLightest,
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexGrow: 3,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <FontAwesomeIcons
                name={
                  item.service === 'master-card' ? 'cc-mastercard' : 'cc-visa'
                }
                size={32}
                color={Colors.neutralLightest}
              />
              <Text
                style={{
                  marginVertical: 4,
                  fontWeight: '800',
                  fontSize: 16,
                  color: Colors.neutralLightest,
                }}>
                {item.type}
              </Text>
            </View>
          </LinearGradient>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}>
        {listCards.map((e, index) => {
          return (
            <View
              key={index}
              style={{
                width: index === page ? 24 : 8,
                height: 8,
                backgroundColor: Colors.matteBlack,
                borderRadius: 4,
                marginHorizontal: 4,
                marginVertical: 16,
                ...shadowBox,
                shadowColor: Colors.matteBlack,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
