import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { getToken } from '@/services/authStorage';

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      console.log('check start');

      const token = await getToken();
      console.log('token:', token);

      if (token) {
        console.log('tabs로 이동');
        router.replace('/(tabs)');
      } else {
        console.log('login으로 이동');
        router.replace('/(auth)/login');
      }

      setIsLoading(false);
    };

    check();
  }, []);

  if (isLoading) {
    console.log("3");
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return null;
}
