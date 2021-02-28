import React from 'react';
import {View, Button} from 'react-native';

const CustomizableButton = (props) => {
  const {style, onPress} = props;
  return (
    <View style={style}>
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
