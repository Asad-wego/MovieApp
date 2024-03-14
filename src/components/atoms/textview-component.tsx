import React from 'react';
import {Text, TextStyle} from 'react-native';

interface CustomTextViewProps {
  style?: TextStyle;
  children: React.ReactNode;
}

const CustomTextView: React.FC<CustomTextViewProps> = ({style, children}) => {
  return <Text style={[{fontFamily: 'Roboto'}, style]}>{children}</Text>;
};

export default CustomTextView;
