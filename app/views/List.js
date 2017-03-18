'use strict';

import React, {
  AppRegistry,
  Navigator,
  View,
  Text,
  Image,
  ListView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
import Detail from './Detail';
import Order2 from './Order2';
import Icon from 'react-native-vector-icons/Ionicons';
var vh = Dimensions.get('window').height;
var BASE_URL = 'https://ensorrow.applinzi.com/Api/App/tutor_detail';
export default class List extends React.Component{
  state = {
    dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    loaded: false,
  };
  componentDidMount () {
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((resData) => {
      resData = JSON.parse(resData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resData.data),
        loaded: true
      })
    }).catch((err)=>alert('error connect '+err));
  }
  renderRow (dataSource) {
    return (
      <TouchableOpacity
        style={styles.listRow}
        onPress={() => {
          let nav = this.props.navigator;
          let bar=this.props.route.bar;
          if(nav) {
            nav.push({
              name: '家教名片',
              component: Detail,
              bar: bar+1,
            });
          } else{
            throw error;
          }
        }}
      >
        <View style={{padding:10}}>
          <Image
            source={{uri: dataSource.logo}}
            height={45}
            width={45}
            style={styles.touxiang}
          />
        </View>
        <View style={styles.wordsContainer}>
          <Text style={styles.name}>
           {dataSource.name}
          </Text>
          <Text style={styles.qianming}>
            愿我们一起实现理想！
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    var content;
    if(!this.state.loaded) {
      content =
        <Text style={styles.blanktext}>
          检查网络再试哦~
        </Text>;
    } else {
      content =
        <ListView
          height={vh-103}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode = 'on-drag'/>

    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.inputholder}>
              <TouchableOpacity style={styles.inputholderx}>
              <Icon name='android-search' style={{fontSize:20,color: '#535353',}}/>
              </TouchableOpacity>
             <TextInput
              ref='search'
              autoCapitalize = 'none'
              autoCorrect={false}
              placeholder={'搜索对话/联系人'}
              onEndEditing={() => this.onSearchChange}
              style = {[styles.defaultInput,{marginLeft:1,marginRight:10}]}
              onFocus = {e=>this.changeState(e)}
              onBlur = {e=>this.changeState(e)}/>
            </TouchableOpacity>
          </View>
        </View>
        {content}
        <TouchableOpacity
         style={styles.flBtn}
         onPress={
           () => {
             let nav = this.props.navigator;
             let bar=this.props.route.bar;
              if(nav) {
                nav.push({
                  name: '订单填写',
                  component: Order2,
                  bar: bar+1,
                });
              } else{
                throw error;
              }
            }}
         >
          <Text style={styles.white}>
          预约
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 6,
    backgroundColor: '#DCDCDC'
  },
    headerContainer: {
    paddingTop: 0,
    paddingBottom: 15,
    backgroundColor: '#8956a1'
  },
  inputholder: {
    height: 28,
    borderRadius: 5,
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  inputholderx: {
    flex: 0.1,
    borderRadius: 5,
    marginTop:4,
    marginLeft:10,
    width:20,
    height:20,
    backgroundColor: '#fff',
  },
  defaultInput: {
    height: 28,
    fontSize: 14,
    paddingLeft: 1,
    paddingRight: 10,
    paddingTop:0,
    paddingBottom:0,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1
  },
  placeholder: {
    flexDirection: 'row',
    marginTop: -22,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  listRow: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row'
  },
  wordsContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  touxiang: {
    borderRadius: 23,
  },
  name: {
    fontSize: 16,
    marginBottom: 10
  },
  qianming: {
    fontSize: 12,
  },
  white: {
    color: '#fff',
    fontWeight: 'bold'
  },
  flBtn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8956A1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  }
})
