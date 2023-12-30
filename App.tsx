import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,

  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [bgchange, setBgChange] = useState('#ffffff');

  const genColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBgChange(color);
  };

  return (
    <>
      <StatusBar backgroundColor={bgchange} />
      <View style={[styles.container,{backgroundColor:bgchange}]}>
        <TouchableOpacity onPress={genColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionTxt: {
    fontSize: 24,
    color: 'black',
    textTransform: 'uppercase',
  },
});

export default App;
