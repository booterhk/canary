import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import {MapContext} from './context'
const TSView = (props, context) => {
    // const ContextContent = await import('./Map.js')
    console.log('ContextContent', props, context);
  return (
    <MapContext.Consumer>
      {(value)=> {
        return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
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
export default connect(mapStateToProps)(TSView);