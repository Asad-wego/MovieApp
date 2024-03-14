import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import R from '../../styles';

interface SearchInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChangeText,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    onChangeText(text);
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={handleTextChange}
        style={styles.input}
      />
      {searchQuery !== '' && (
        <TouchableOpacity onPress={clearSearchQuery} style={styles.clearButton}>
          <Image source={R.images.crossIcon} style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: R.colors.secondary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  clearButton: {
    padding: 8,
  },
  clearIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default SearchInput;
