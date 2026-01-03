import { Colors } from '@/constants/theme';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function Screen({ children }: { children: React.ReactNode }) {
  
  return ( 
    <SafeAreaProvider>
    <SafeAreaView style={styles.safe}>
      <View style={styles.bg}>
        {children}
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background,margin:0, padding:0 },
  bg: { flex: 1, backgroundColor: Colors.background },
});
