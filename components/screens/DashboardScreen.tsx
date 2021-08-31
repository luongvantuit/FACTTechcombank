import React, {Component} from 'react';
import {styleDashboardScreen as styles} from '../../styles/style-dashboard-screen';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ListCard, ToolbarDashboard} from '../widgets';
export default class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <ToolbarDashboard />
        <ScrollView
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}>
          {/* <View style={styles.boxItemContainer}>
            <View style={styles.boxItemTopLeft}>
              <Text>Test</Text>
            </View>
            <View style={styles.boxItemTopRight}>
              <Text>Test</Text>
            </View>
          </View>
          <View style={styles.boxItemContainer}>
            <View style={styles.boxItemBottomLeft}>
              <Text>Test</Text>
            </View>
            <View style={styles.boxItemBottomRight}>
              <Text>Test</Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}
