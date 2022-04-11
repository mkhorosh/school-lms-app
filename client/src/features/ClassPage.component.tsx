import { Avatar, List } from 'antd';
import React from 'react';

const testData = [
    {
        id: 234,
        name: { first: 'Марина', last: 'Хорошилова' },
        email: 'marina@gmail.com'
    },
    {
        id: 245,
        name: { first: 'Марина', last: 'Хорошилова' },
        email: 'marina@gmail.com'
    },
    {
        id: 225647,
        name: { first: 'Марина', last: 'Хорошилова' },
        email: 'marina@gmail.com'
    },
    {
        id: 78,
        name: { first: 'Марина', last: 'Хорошилова' },
        email: 'marina@gmail.com'
    },
    {
        id: 90,
        name: { first: 'Олеся', last: 'Сергеева' },
        email: 'olesya@gmail.com'
    }
];

export const ClassPage = () => {
    return (
        <>
            <h1>Мой класс:</h1>
            <List
                dataSource={testData}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    src={
                                        'https://i.pinimg.com/736x/7f/93/e0/7f93e0cc3e18f2f65ad76993e0e88150.jpg'
                                    }
                                />
                            }
                            title={
                                <a href="https://ant.design">
                                    {item.name.first} {item.name.last}
                                </a>
                            }
                            description={item.email}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};
