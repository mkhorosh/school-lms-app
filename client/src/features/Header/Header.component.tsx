import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React from 'react';
import { StyledHeader } from './Header.style';

export const Header = () => (
    <StyledHeader>
        <Menu mode="horizontal" theme={'dark'}>
            <Menu.Item key="1">
                <BellOutlined />
            </Menu.Item>
            <Menu.Item key="2">
                <Avatar icon={<UserOutlined />} />
            </Menu.Item>
        </Menu>
    </StyledHeader>
);
