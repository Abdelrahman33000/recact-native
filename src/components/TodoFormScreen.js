import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoFormScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (name && description) {
      dispatch(addTodo({ name, description }));
      setName('');
      setDescription('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter title"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default TodoFormScreen;