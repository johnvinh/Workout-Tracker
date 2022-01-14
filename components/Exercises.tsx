import {View, Text, TouchableOpacity, FlatList, ListRenderItem} from 'react-native';
import {useState} from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

function Exercises()
{
        const [exercises, setExercises] = useState([
                'Chest Press',
                'Pull-downs',
                'Triceps Extension',
                'Biceps Curl',
                'Other Biceps Curl'
        ]);

        return (
                <FlatList<string> data={exercises} renderItem={({item}) =>
                {
                        return (
                                <TouchableOpacity>
                                        <Text key={uuidv4()}>{item}</Text>
                                </TouchableOpacity>
                        );
                }} />
        );
}

export default Exercises;