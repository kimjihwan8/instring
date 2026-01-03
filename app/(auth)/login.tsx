import { StyleSheet } from "react-native";
import { Text, View, Button } from "react-native";

import { setToken, getToken } from "@/services/authStorage";
import { useRouter } from "expo-router";
import { Screen } from "@/components/screen";

export default function MypageScreen() {
  const router = useRouter();
  return (
    <Screen>
      <Text style={styles.text}>로그인페이지 입니다</Text>
      <Button
        title="로그인"
        onPress={async () => {
          await setToken("1");
          const t = await getToken();
          console.log("✅ 저장된 토큰:", t);
          router.replace("/(tabs)");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 24,
    marginTop: 100,
  },
  btn: {
    width: 30,
    height: 20,
  },
});
