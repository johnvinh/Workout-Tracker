import {View, Text, TouchableOpacity, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {useState} from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {NavigationProp} from '@react-navigation/native';
import AddExercise from './AddExercise';

interface Props
{
        navigation: NavigationProp<any>
}

function Exercises(props: Props)
{
        const [exercises, setExercises] = useState([
                'Chest Press',
                'Pull-downs',
                'Triceps Extension',
                'Biceps Curl',
                'Other Biceps Curl',
                "Abdominal",
                "Crunches"
        ]);

        function navigateToExercise(exercise: string)
        {
                props.navigation.navigate('Exercise',
                        {
                                exercise: exercise
                        });
        }

        return (
                <>
                        <AddExercise setExercises={setExercises} />
                        <FlatList<string> keyExtractor={(item) => uuidv4() } data={exercises} renderItem={({item}) =>
                        {
                                return (
                                        <TouchableOpacity key={uuidv4()} style={styles.item} onPress={() => navigateToExercise(item)}>
                                                <View style={styles.itemView}>
                                                        <Text key={uuidv4()}>{item}</Text>
                                                </View>
                                        </TouchableOpacity>
                                );
                        }} />
                </>
        );
}

const styles = StyleSheet.create({
        item: {
                padding: '10%',
                backgroundColor: '#f8f8f8'
        },
        itemView: {
                flexDirection: 'row'
        }
});

export default Exercises;