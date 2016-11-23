import { Workout } from './workout';
import { Exercise } from './exercise';

var userMock = "pede_ring@hotmail.com";

var EXERCISES: Exercise[] = [
    {_id: 1, name: "Squats", description: "Bend legs with bar", sets: 3, repetitions: 15},
    {_id: 2, name: "Burpies", description: "Fly down with legs crossed", sets: 4, repetitions: 20},
    {_id: 3, name: "Crunches", description: "Do a barrel roll", sets: 3, repetitions: 15}
]

export const WORKOUTS: Workout[] = [
    {_id: 1, name: "Legs", user: userMock, exercises: EXERCISES},
    {_id: 2, name: "Body", user: userMock, exercises: EXERCISES},
    {_id: 3, name: "Arms", user: userMock, exercises: EXERCISES},
    {_id: 2, name: "Head", user: userMock, exercises: EXERCISES}
];
