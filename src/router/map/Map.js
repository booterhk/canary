import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import TSView from './TSView'
import {MapContext} from './context'
class Map extends React.Component {
  constructor(props){
    super(props)
    console.log('Map constructor')
  }
  render() {
    return (
      <MapContext.Provider value={'dark'}>
        <TSView/>
      </MapContext.Provider>
    )
  }
}
const mapStateToProps = state =>({
  ...state
}) 
export default connect(mapStateToProps)(Map);