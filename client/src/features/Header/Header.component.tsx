import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Menu } from 'antd';
import React from 'react';
import { StyledHeader } from './Header.style';

export const Header = () => (
    <StyledHeader>
        <Menu mode="horizontal" theme={'dark'}>
            <Menu.Item key="1">
                <Badge count={1}>
                    <BellOutlined />
                </Badge>
            </Menu.Item>
            <Menu.Item key="2">
                <Avatar icon={<UserOutlined />} />
            </Menu.Item>
        </Menu>
    </StyledHeader>
);
