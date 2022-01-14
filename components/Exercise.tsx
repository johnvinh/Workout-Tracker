import {useState, useEffect} from 'react';
import {View, Text, Route} from 'react-native';
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
                        <Text>{exercise}</Text>
                </View>
        );
}

export default Exercise;