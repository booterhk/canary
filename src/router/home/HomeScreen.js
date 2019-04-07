import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>{this.props.navigation.push('Map')}}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = state =>({
  ...state
}) 
export default connect(mapStateToProps)(HomeScreen);