import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  I18nManager,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextView} from '../atoms';
import R from './../../styles';

interface LoadingProps {
  message?: string;
  size?: number | 'small' | 'large';
  color?: string;
  showBack?: boolean;
}

const LoadingComponent: React.FC<LoadingProps> = ({
  message,
  size = 'large',
  color = 'black',
  showBack = false,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Image
            style={[
              styles.backIcon,
              {
                transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
              },
            ]}
            source={R.images.crossIcon}
          />
        </TouchableOpacity>
      )}
      <ActivityIndicator size={size} color={color} />
      {message && <TextView style={styles.message}>{message}</TextView>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 22 : 0,
    left: 0,
    padding: 16,
    zIndex: 1,
  },
  backIcon: {
    height: 24,
    width: 24,
    tintColor: R.colors.primary,
  },
  message: {
    marginTop: 10,
  },
});

export default LoadingComponent;
