import {useState, useEffect} from 'react';
import {View, Text, Route, StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {NavigationProp} from '@react-navigation/native';

interface Props
{
        exercise: string;
        navigation: NavigationProp<any>;
        route: Route
}

function Exercise(props: Props)
{
        const {exercise} = props.route.params;
        const [workouts, setWorkouts] = useState({

        });

        return (
                <View>
                        <Text style={styles.title} >{exercise}</Text>
                </View>
        );
}

const styles = StyleSheet.create({
        title: {
                fontWeight: 'bold',
                fontSize: 50,
                textAlign: 'center'
        }
});

export default Exercise;