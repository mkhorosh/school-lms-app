import {
    AppstoreOutlined,
    BarChartOutlined,
    BookOutlined,
    HomeOutlined,
    PicCenterOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { StyledSider } from './Sider.style';

export const Sider = () => (
    <StyledSider collapsible theme={'light'}>
        <img
            src="https://schoollog.in/assets/images/logo-non-outlined.svg"
            alt="logo"
            width="80%"
        />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                Текущее
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Неделька
            </Menu.Item>
            <Menu.Item key="3" icon={<PicCenterOutlined />}>
                Новости школы
            </Menu.Item>
            <Menu.Item key="4" icon={<BookOutlined />}>
                Мои предметы
            </Menu.Item>
            <Menu.Item key="5" icon={<BarChartOutlined />}>
                Мои оценки
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
                Мой класс
            </Menu.Item>
        </Menu>
    </StyledSider>
);
