import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import {TextView, CustomButton} from '../atoms';
import label from '../../translations/en.json';
import R from '../../styles';

interface ErrorProps {
  message: string;
  buttonText?: string;
  onButtonPress?: () => void;
  showBack?: boolean;
  onBackPress?: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({
  message,
  buttonText = label.try_again,
  onButtonPress,
  showBack = false,
  onBackPress,
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
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
      <TextView style={styles.message}>{message}</TextView>
      {onButtonPress && (
        <CustomButton
          title={buttonText}
          onPress={onButtonPress}
          style={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default ErrorComponent;
