import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, GestureResponderEvent} from 'react-native';

interface Props
{
        setExercises: Function
}

function AddExercise(props: Props)
{
        const [exerciseName, setExerciseName] = useState('');

        function handleChangeText(text: string)
        {
                setExerciseName(text);
        }

        function handleButtonPress(event: GestureResponderEvent)
        {
                props.setExercises((previousExercises: string[]) =>
                {
                        props.setExercises([exerciseName, ...previousExercises]);
                });
        }

        return (
                <View>
                        <TextInput style={styles.input} placeholder="New exercise..." onChangeText={handleChangeText} />
                        <TouchableOpacity style={styles.button} onPress={handleButtonPress} >
                                <Text style={styles.buttonText}>Add Exercise</Text>
                        </TouchableOpacity>
                </View>
        );
}

const styles = StyleSheet.create({
        input: {
                height: 60,
                padding: 8,
                fontSize: 16
        },
        button: {
                padding: 9,
                backgroundColor: '#FFC4EB',
                margin: 5
        },
        buttonText: {
                color: 'black',
                fontSize: 20,
                textAlign: 'center'
        }
});

export default AddExercise;