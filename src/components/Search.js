import React from 'react';
import {View, TextInput} from 'react-native';

// Styles
import styles from './styles/Search';

const Search = (props) => {
  const {searchTerm, onChangeText, handleSearchAction} = props;
  return (
    <View style={styles.search}>
      <TextInput
        placeholder={'Pesquise pelo título...'}
        style={styles.input}
        value={searchTerm}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        onEndEditing={() => {
          handleSearchAction();
        }}
      />
    </View>
  );
};

export default Search;
