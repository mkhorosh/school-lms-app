import { Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Предмет',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '',
        dataIndex: 'mark1',
        key: 'mark1'
    },
    {
        title: '',
        dataIndex: 'mark2',
        key: 'mark2'
    },
    {
        title: '',
        dataIndex: 'mark3',
        key: 'mark3'
    },
    {
        title: '',
        dataIndex: 'mark4',
        key: 'mark4'
    },
    {
        title: '',
        dataIndex: 'mark5',
        key: 'mark5'
    },
    {
        title: '',
        dataIndex: 'mark6',
        key: 'mark6'
    }
];

const data = [
    {
        id: '3435',
        name: 'Алгебра',
        mark1: '5',
        mark2: '5',
        mark3: '5',
        mark4: '5',
        mark5: '5',
        mark6: '5'
    },
    {
        id: '343435',
        name: 'Литература',
        mark1: '5',
        mark2: '4',
        mark3: '5',
        mark4: '3',
        mark5: '5',
        mark6: '5'
    },
    {
        id: '34fd35',
        name: 'История',
        mark1: '5',
        mark2: '4',
        mark3: '4',
        mark4: '3',
        mark5: '3',
        mark6: '5'
    },
    {
        id: '34315',
        name: 'Биология',
        mark1: '5',
        mark2: '4',
        mark3: '5',
        mark4: '2',
        mark5: '5',
        mark6: '5'
    }
];

export const MarksPage = () => {
    return <Table dataSource={data} columns={columns} rowKey="id" />;
};
