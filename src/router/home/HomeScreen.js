import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('screen')

const HomeScreen = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [originCoords, setOriginCoords] = useState({ x: 0, y: 0 })
  const [backgroundColor, setBackgroundColor] = useState('red')
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        onResponderGrant={(evt) => {
          setBackgroundColor('green')
          setOriginCoords({
            y: evt.nativeEvent.locationX,
            x: evt.nativeEvent.locationY
          })
          props.navigation.navigate('Map')
          console.log('onResponderGrant', evt.nativeEvent)
          return true
        }}
        onMoveShouldSetResponder={e => true}
        onResponderMove={(e) => {
          // console.log('onResponderMove', e.nativeEvent)
          const {x, y} = originCoords;
          setCoords({
            y: e.nativeEvent.pageY - x,
            x: e.nativeEvent.pageX - y
          })
        }}
        onResponderRelease={e => {
          setBackgroundColor('red')
          // console.log('onResponderRelease', originCoords)
          const {x, y} = originCoords;
          setCoords({
            y: e.nativeEvent.pageY - x,
            x: e.nativeEvent.pageX - y
          })
        }}
        style={[
          { height: 100, width: 100 },
          { left: coords.x, top: coords.y }
        ]}
      >
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            backgroundColor: backgroundColor
          }}
        />
      </Animated.View>
      <Text>{`坐标：`}</Text>
      <Text>{`x:${coords.x}`}</Text>
      <Text>{`y:${coords.y}`}</Text>
    </View>
  )
}
const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps)(HomeScreen);