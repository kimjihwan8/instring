
import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";

export default function RecordingsScreen() {
  return (
    <View>
      <Text style={styles.text}>녹음페이지 입니다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    marginTop: 100,
  },
});