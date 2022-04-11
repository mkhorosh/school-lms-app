import { Card } from 'antd';
import React from 'react';

const testData = [
    { no: 1, title: 'Алгебра' },
    { no: 2, title: 'Геометрия' },
    { no: 3, title: 'Химия' },
    { no: 4, title: 'Алгебра' },
    { no: 5, title: 'Физика' },
    { no: 6, title: 'Литература' },
    { no: 7, title: 'Обществознание' }
];

const listItems = testData.map((item) => (
    <li>
        {item.no}. {item.title}
    </li>
));

export const WeekPage = () => {
    return (
        <>
            <Card title="Понедельник">{listItems}</Card>
            <Card title="Вторник">{listItems}</Card>
            <Card title="Среда">{listItems}</Card>
            <Card title="Четверг">{listItems}</Card>
            <Card title="Пятница">{listItems}</Card>
            <Card title="Суббота">{listItems}</Card>
        </>
    );
};
