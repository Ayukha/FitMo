import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Text style={styles.head1}>Hi, Arush.</Text>
          <Text style={styles.sub}>You've walked <Text style={styles.purple}>32 mins</Text> today</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            </View>
          <View style={styles.cardsContainer}>
            <Image source={require('../assets/images/stats.png')} style={styles.steps} />
            <Image source={require('../assets/images/level2.png')} style={styles.level} />
            <Image source={require('../assets/images/graph2.png')} style={styles.graph} />
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  cardsContainer:{
    flex:1,
    },
  steps:{
    width:380,
    height:180.5,
    marginLeft:25,
    marginTop:40,
  },
  level:{
    width:380,
    height:107,
    marginLeft:25,
    marginTop:20,
    },
    graph:{
      width:380,
      height:237.5,
      marginLeft:25,
      marginTop:20,
      },
  purple:{
    color: '#5D2BB5',
    },
  head1:{
    fontSize: 36,
    fontWeight:'bold',
    marginTop: 50,
    marginLeft: 24,
    marginRight:130,
    },
    sub:{
      fontSize:18,
      position:'absolute',
      marginTop: 90,
      marginLeft:25,
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom:50,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop: 40,
    marginRight: 44,
  },
  welcomeImage: {
    marginTop:20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  stepsContainer: {
    alignItems: 'center',
    width:380,
    height:100,
    backgroundColor:'#5D2BB5',
    marginTop:40,
    marginHorizontal:24,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
