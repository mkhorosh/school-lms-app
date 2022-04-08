import { Layout } from 'antd';
import React from 'react';

export const LoginPage = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
