import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import {MapContext} from './Map'
const TsChild = () => {
  return (
    <MapContext.Consumer>
      {(value)=> {
        return (
        <View>
          <Text>{value}</Text>
        </View>
        )
      }}
    </MapContext.Consumer>
  )
}
const mapStateToProps = state =>({
  ...state
}) 
export default connect(mapStateToProps)(TsChild);