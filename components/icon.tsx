import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleProp, TextStyle } from 'react-native';
import { IconName } from '../constants/icons';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export default function Icon({
  name,
  size = 24,
  color = '#000',
  style,
}: Props) {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
}
