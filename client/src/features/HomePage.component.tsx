import { Layout } from 'antd';
import { Header } from './Header/Header.component';
import { Sider } from './Sider/Sider.component';

export const HomePage = () => {
    const { Content, Footer } = Layout;

    return (
        <Layout>
            <Sider />
            <Layout>
                <Header />
                <Content style={{ padding: '50px' }}>
                    <div
                        style={{
                            minHeight: '580px',
                            padding: '24px',
                            background: '#fff'
                        }}
                    >
                        Content
                    </div>
                </Content>
                <Footer>2022 mkhorosh</Footer>
            </Layout>
        </Layout>
    );
};
