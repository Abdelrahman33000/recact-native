import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const TodoListScreen = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default TodoListScreen;