import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'

class Map extends React.Component {
  render() {
    const {width, height} =  Dimensions.get('screen')
    return (
      <ScrollView
        scrollEventThrottle={16}
        removeClippedSubviews={true}
        snapToEnd={false}
        snapToStart={false}
        snapToOffsets={[0, 1000, 1600]}
      >
        <View style={{height: height*3, width, backgroundColor: 'pink', alignItems: 'center'}}>
          <Text>1</Text>
        </View>
        <View style={{height: height*3, width, backgroundColor: 'green', alignItems: 'center'}}>
          <Text>2</Text>
        </View>
        <View style={{height: height*3, width, backgroundColor: 'blue', alignItems: 'center'}}>
          <Text>3</Text>
        </View>
      </ScrollView>
    )
  }
}
const mapStateToProps = state =>({
  ...state
}) 
export default connect(mapStateToProps)(Map);