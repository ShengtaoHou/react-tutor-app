import React, { Component,Image,StyleSheet,View, Text,ScrollView } from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import Announce from './Announce';
import HomeScene from './HomeScene';
import FriendList from './FriendList';
import Mynamecard from './Mynamecard';
const glypy = glypyMapMaker({
  Home: 'e900',
  Camera:'e901',
  Stat: 'e902',
  Settings: 'e903',
  Favorite: 'e904'
});
export default class MyTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
  }
  tabbarToggle() {
    this.refs['myTabbar'].getBarRef().show(this.toggle);
    this.toggle = !this.toggle;
  }
    componentDidMount() {
    // let toggle = "tab2";
    // setInterval(() => {
    //   console.log(`goto ${toggle}`);
    //   this.refs['myTabbar'].gotoTab(toggle);
    //   toggle = toggle == "tab2"? "tab3" : "tab2";
    // }, 1000);
    //
    //
    //
    // let toggleShow = true;
    // setInterval(() => {
    //   toggleShow = !toggleShow;
    //   this.refs['myTabbar'].getBarRef().show(toggleShow);
    // }, 200);


    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab('tab2');
    // }, 2000);
    //
    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab("tab3");
    // }, 4000);
  }
  render() {
    return (
      <Tabbar ref="MyTab" barColor={'#8956a1'}>
        <Tab name="home">
          <IconWithBar label="首页"  type={glypy.Home} from={'icomoon'}/>  
            <RawContent>
              <HomeScene navigator={this.props.navigator} route={this.props.route}/>
            </RawContent>  
        </Tab>
        <Tab name="Announce">
          <IconWithBar label="公告" type={glypy.Stat} from={'icomoon'}/>
          <RawContent>
           <Announce navigator={this.props.navigator} route={this.props.route}/>          
          </RawContent>
        </Tab>
        <Tab name="stats">
          <IconWithBar label="联系人" type={glypy.Favorite} from={'icomoon'}/>
          <RawContent>
            <FriendList navigator={this.props.navigator} route={this.props.route}/>
          </RawContent>
        </Tab>
        <Tab name="settings">
          <IconWithBar label="我" type={glypy.Settings} from={'icomoon'}/>
          <RawContent>
          <Mynamecard navigator={this.props.navigator} route={this.props.route}/>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}



