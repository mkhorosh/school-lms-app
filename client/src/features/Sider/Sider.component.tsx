import {
    AppstoreOutlined,
    BarChartOutlined,
    BookOutlined,
    HomeOutlined,
    PicCenterOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledSider } from './Sider.style';

export class Sider extends Component {
    state = {
        collapsed: false
    };

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <StyledSider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                theme={'light'}
            >
                <img
                    src="https://schoollog.in/assets/images/logo-non-outlined.svg"
                    alt="logo"
                    width="80%"
                />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Текущее
                        <Link to="/home" />
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        Неделька
                        <Link to="/week" />
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PicCenterOutlined />}>
                        Новости школы
                        <Link to="/news" />
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BookOutlined />}>
                        Мои предметы
                        <Link to="/subjects" />
                    </Menu.Item>
                    <Menu.Item key="5" icon={<BarChartOutlined />}>
                        Мои оценки
                        <Link to="/marks" />
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}>
                        Мой класс
                        <Link to="/class" />
                    </Menu.Item>
                </Menu>
            </StyledSider>
        );
    }
}