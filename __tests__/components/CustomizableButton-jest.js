import React from 'react';
import {Button} from 'react-native';
import renderer from 'react-test-renderer';

// Components
import CustomizableButton from '../../src/components/CustomizableButton';

// Mocks
const customizableButtonMock = {
  style: {
    marginVertical: '2%',
    alignSelf: 'center',
  },
  onPress: jest.fn(),
};

describe('CustomizableButton component tests', () => {
  test('CustomizableButton snapshot', () => {
    const component = renderer.create(
      <CustomizableButton
        onPress={customizableButtonMock.onPress}
        style={customizableButtonMock.style}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('CustomizableButton onPress', () => {
    const component = renderer.create(
      <CustomizableButton
        onPress={customizableButtonMock.onPress}
        style={customizableButtonMock.style}
      />,
    );

    component.root.findByType(Button).props.onPress();
    expect(customizableButtonMock.onPress).toHaveBeenCalled();
  });
});
