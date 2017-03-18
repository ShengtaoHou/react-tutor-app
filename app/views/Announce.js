'use strict';

import React , {
  View,
  Text,
  Image,
  TouchableOpacity,
  Navigator,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native';

var vh = Dimensions.get('window').height;
var BASE_URL = 'https://ensorrow.applinzi.com/Api/App/tutor_detail';
export default class extends React.Component{
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
      <TouchableOpacity style={styles.rowItem}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>{dataSource.name}
          </Text>
          <Image
            source={{uri: dataSource.id}}
            style={{width: 108,height: 68,backgroundColor: '#d2d2d2'}}
          />
        </View>
        <View style={styles.rowBorder}>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    let content;
    if(!this.state.loaded){
      content = (
        <View height={vh-140} style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text>加载中。。。</Text>
        </View>
      )
    }else {
      content = (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          height={vh-119}
          automaticallyAdjustContentInsets={false}
        />
      )
    }
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>公告
          </Text>
        </View>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusbar: {
    height: 20,
    backgroundColor: '#8956a1'
  },
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
  rowBorder: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flex: 1
  },
  rowContainer: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 8
  },
  hide:{
    height:50,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 11
  }
})
