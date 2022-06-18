import React from 'react';

const subjects = [
    'Алгебра',
    'Геометрия',
    'Русский язык',
    'Литература',
    'Химия',
    'Физика',
    'Экономика',
    'Черчение',
    'Обществознание',
    'Экология',
    'История'
];

let index = 1;

export const SubjectsPage = () => {
    return (
        <>
            <h1>Мои предметы:</h1>
            <ul>
                {subjects.map((subject) => (
                    <li key={index++}>{subject}</li>
                ))}
            </ul>
        </>
    );
};
