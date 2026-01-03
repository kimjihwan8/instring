import { Colors } from "@/constants/theme"
import { Image, StyleSheet, View } from "react-native"

export const Header = () => {
  return (
    <View style={styles.Head}>
      <Image style={styles.Logo} source={require("@/assets/images/header.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Head: {
    width: 412,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.sub_title,
  },
  Logo: {
    width: 116,
    height: 42,
  }
})