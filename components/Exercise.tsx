import React, {useState, useEffect, SetStateAction} from 'react';
import {View, Text, Route, StyleSheet, TouchableOpacity, Platform, FlatList} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {NavigationProp} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props
{
        exercise: string;
        navigation: NavigationProp<any>;
        route: Route;
}

interface Workout
{
        date: string;
        sets: string[];
}

function Exercise(props: Props)
{
        const {exercise} = props.route.params;
        const [date, setDate] = useState<Date>(new Date());
        const [show, setShow] = useState<boolean>(false);
        const [workouts, setWorkouts] = useState<Workout[]>([]);

        // Give the page the name of the exercise instead of the generic "Exercise"
        useEffect(() =>
        {
                props.navigation.setOptions({
                        title: exercise
                });
        }, []);

        function navigateToWorkoutDay(date: string)
        {

        }

        return (
            <View>
                    <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
                            <Text style={styles.buttonText}>Add new workout day...</Text>
                    </TouchableOpacity>
                    {
                            show && <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={(event: any, selectedDate?: Date | undefined) =>
                                {
                                        const currentDate = selectedDate || date;
                                        setShow(Platform.OS === 'android');
                                        setDate(currentDate);
                                        const newWorkout: Workout = {
                                                date: `${currentDate.getUTCFullYear()}-${currentDate.getUTCMonth()}-${currentDate.getUTCDay()}`,
                                                sets: []
                                        };
                                        setWorkouts([...workouts, newWorkout]);
                                }}
                            />
                    }
                    <FlatList<Workout> keyExtractor={(item) => uuidv4() } data={workouts} renderItem={(item) =>
                    {
                            return (
                                <TouchableOpacity onPress={() => navigateToWorkoutDay((item as unknown as Workout).date)}>
                                        <View>
                                                <Text>{item}</Text>
                                        </View>
                                </TouchableOpacity>
                            );
                    }}>
                    </FlatList>
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

export default Exercise;