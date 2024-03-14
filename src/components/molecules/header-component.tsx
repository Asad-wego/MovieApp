import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import R from '../../styles';
import {TextView} from '../atoms';

interface HeaderViewProps {
  title: string;
  onBackPress: () => void;
  onFavoritePress?: () => void;
}

const HeaderView: React.FC<HeaderViewProps> = ({
  title,
  onBackPress,
  onFavoritePress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image source={R.images.crossIcon} style={styles.icon} />
      </TouchableOpacity>
      <TextView style={styles.title}>{title}</TextView>
      {/* TODO: improve it later */}
      {onFavoritePress && (
        <TouchableOpacity
          onPress={onFavoritePress}
          style={styles.favoriteButton}>
          <Image source={R.images.crossIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: R.colors.background,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: R.colors.secondary,
  },
  backButton: {
    padding: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HeaderView;
