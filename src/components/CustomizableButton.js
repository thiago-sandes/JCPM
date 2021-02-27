import React from 'react';
import {View, Button} from 'react-native';

const CustomizableButton = (props) => {
  const {styles, onPress} = props;
  return (
    <View style={styles}>
      <Button
        title="Voltar"
        onPress={() => {
          onPress();
        }}
      />
    </View>
  );
};

export default CustomizableButton;
