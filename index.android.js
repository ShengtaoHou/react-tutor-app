/**
 * Shiyouhelp.com
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Navigator,
  Dimensions,
  icon,
  BackAndroid,
  TouchableOpacity
} from 'react-native';

// import HomeScene from './app/views/HomeScene';
// import TabBar from './app/views/TabBar';
import WelcomePage from './app/views/WelcomePage';
var Icon = require('react-native-vector-icons/Ionicons');

   var _navigator; 
   BackAndroid.addEventListener('hardwareBackPress', () => { 
     if (_navigator && _navigator.getCurrentRoutes().length > 2) { 
       _navigator.pop(); 
       return true; 
     } 
     return false; 
   }); 



// debug
// import Chat from './app/views/Chat';
class MyProject extends React.Component{

  renderScene (route, navigator) {
    let Component = route.component;
    let navi = navigator;
    _navigator=navigator;
    var vw = Dimensions.get('window').width;
    if(route.bar>1){
      return (
        <View>
          <View style={styles.titleBar} ref='test'>
            <TouchableOpacity>
              <Icon name='chevron-left' size={30} color='#fff'
                onPress={() => navi.pop()}
                style={{paddingTop:4,paddingBottom: 6,left:6}}
              />
            </TouchableOpacity>
            <View style={{width:96,alignItems:'center',justifyContent:'center',position:'absolute',right:0.5*vw-48,bottom: 18}}>
              <Text style={{color: '#fff',fontSize:16,fontWeight:'bold',top: 3}}>
                {route.name}
              </Text>
            </View>
          </View>
          <Component navigator={navigator} route={route} />
        </View>
      )
    }else{
      return (
        <Component navigator={navigator} route={route} />
      )
    }
  }
  render () {
    return (
      <Navigator
        initialRoute = {{
          name: '师友',
          component: WelcomePage,
          bar:0,
        }}
        renderScene = {this.renderScene}
        />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
  },
  titleBar:{
    paddingTop: 15,
    backgroundColor:'#8956A1',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
