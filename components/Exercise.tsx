import {useState, useEffect} from 'react';
import {View, Text, Route, StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {NavigationProp} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

interface Props
{
        exercise: string;
        navigation: NavigationProp<any>;
        route: Route
}

function Exercise(props: Props)
{
        const {exercise} = props.route.params;

        useEffect(() =>
        {
                props.navigation.setOptions({
                        title: exercise
                });
        }, []);
        const [workouts, setWorkouts] = useState({

        });

        return (
                <View>
                        
                </View>
        );
}

const styles = StyleSheet.create({

});

export default Exercise;