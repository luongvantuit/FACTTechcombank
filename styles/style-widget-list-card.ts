import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../values';
export const styleWidgetListCard = StyleSheet.create({
  boxContainer: {
    width: Dimensions.get('window').width - 92,
    marginHorizontal: 8,
    marginVertical: 16,
    backgroundColor: colors.white,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  boxContainerInner: {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textNameBank: {
    fontWeight: 'bold',
    color: colors.black1,
  },
  textName: {
    color: colors.black1,
    fontWeight: 'bold',
  },
  textNumberCard: {
    marginTop: Platform.OS === 'android' ? 28 : 36,
    color: colors.black1,
    fontWeight: 'bold',
  },
  boxContainerExpiryEnd: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  textExpiryEnd: {
    marginLeft: 16,
    color: colors.black1,
    fontWeight: 'bold',
  },
  boxContainerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
  },
  boxContainerLeft: {
    flexGrow: 3,
  },
});
