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
import Order from './Order';
import Chat from './Chat';
import Icon from 'react-native-vector-icons/Ionicons';
var vh = Dimensions.get('window').height;
export default class List extends React.Component{
  state = {
    opacity: 1,
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(['小张老师','交大李老师','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队']),
  };
  changeState (e) {
    if(this.state.opacity==0){
      this.setState({
        opacity: 1,
      });
    }
    else{
      this.setState({
        opacity: 0,
      });
    }
  }
  renderRow (rowData) {
    if(!rowData){rowData=0;}
    return (
      <TouchableOpacity
        style={styles.listRow}
        onPress={
           () => {
             let nav = this.props.navigator;
             let bar=this.props.route.bar;
             if(nav) {
                  nav.push({
                    name: '聊天',
                    component: Chat,
                    bar:bar+1,
                  });
                } else{
                  throw error;
                }
              }}
      >
        <View style={{padding:10}}>
          <Image
            source={{uri:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2823961627,3572677526&fm=58'}}
            height={45}
            width={45}
            style={styles.touxiang}
          />
        </View>

        <View style={styles.wordsContainer}>
          <Text style={styles.name}>
            {rowData}
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
    if(this.state.dataSource.getRowCount() === 0) {
      content =
        <Text style={styles.blanktext}>
          检查网络再试哦~
        </Text>;
    } else {
      content =
        <ListView
          ref="listview"
          height={vh-159}
          dataSource={this.state.dataSource}
          renderRow={e=>this.renderRow(e)}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode = 'on-drag'/>

    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>联系人
            </Text>
          </View>
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
      </View>
    );
  }
}

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#8956a1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 12
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
  searchContainer: {
    paddingTop: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 6,
    backgroundColor: '#DCDCDC'
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
  hide:{
    height:50,
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
