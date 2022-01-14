import {useState, useEffect} from 'react';
import {View} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface Props
{
        exercise: string
}

function Exercise(props: Props)
{
        const [workouts, setWorkouts] = useState({

        });

        return (
                <View>

                </View>
        );
}

export default Exercise;