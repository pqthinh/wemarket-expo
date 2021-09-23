import React from 'react'
import { StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab'
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/2.jpg'),
    backgroundColor: '#febe29'
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5'
  }
]

export default function SplashScreen() {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name='md-arrow-round-forward'
          color='rgba(255, 255, 255, .9)'
          size={24}
        />
      </View>
    )
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion name='md-checkmark' color='rgba(255, 255, 255, .9)' size={24} />
      </View>
    )
  }
  _onDone = () => {
    this.setState({ showRealApp: true })
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    />
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center'
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
