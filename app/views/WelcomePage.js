'use strict';

import React, {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Component,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MyTab from './MyTab';
import HomeScene from './HomeScene';
var TimerMixin = require('react-timer-mixin');


export default class extends React.Component{
  componentDidMount() {
    this.timer = setTimeout(
      () => { let nav = this.props.navigator;
                if(nav) {
                  nav.push({
                    name: "师友",
                    component:MyTab,
                    bar: true,
                  });
                } else{
                  throw error;
                } },
      3000
    );
  }
    componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    var {height, width} = Dimensions.get('window');
    return (

        <Image style={{height: height, width: width}} source={require('../images/welcome.png')}>
        <View style={[styles.container,{height: height, width: width}]}>
        <View style={[styles.Ccontainer, {width: width, height: height/5, marginTop: height/20}]}>
        
        <Text style={{}}></Text>
    
        </View>
        <View style={[styles.Tcontainer, {width: width, height: height/10, marginBottom: height/12}]}>
        <Text style={[styles.shi, {fontSize: height/15, marginLeft: width/5}]}></Text>
        <Text style={[styles.ning, {fontSize: height/30, marginLeft: width/20}]}></Text>
        </View>
        </View>
        </Image>

    )
  }

  
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  Ccontainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  shi: {
    fontFamily: 'FangSong_GB2312',
  },
  ning: {
    fontFamily: '',
  },
  Tcontainer:{
    flexDirection: 'row',
    alignItems: 'center',
  }
})