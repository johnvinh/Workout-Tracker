import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

function AddExercise()
{
        const [exerciseName, setExerciseName] = useState('');

        return (
                <View>
                        <TextInput style={styles.input} placeholder="New exercise..." />
                        <TouchableOpacity style={styles.button} >
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