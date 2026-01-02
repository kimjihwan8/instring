
import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";

export default function MypageScreen() {
  return (
    <View>
      <Text style={styles.text}>마이페이지 입니다</Text>
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