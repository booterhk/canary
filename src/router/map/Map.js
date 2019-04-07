import { View, Text } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'

class Map extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
      </View>
    )
  }
}
const mapStateToProps = state =>({
  ...state
}) 
export default connect(mapStateToProps)(Map);