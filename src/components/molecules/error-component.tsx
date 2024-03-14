import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextView, CustomButton} from '../atoms';
import label from '../../translations/en.json';

interface ErrorProps {
  message: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({
  message,
  buttonText = label.try_again,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
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
});

export default ErrorComponent;
