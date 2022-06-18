import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassPage from '../features/ClassPage.component';
import HomePage from '../features/HomePage.component';
import { LoginPage } from '../features/LoginPage.component';
import { MarksPage } from '../features/MarksPage.component';
import NewsPage from '../features/NewsPage.component';
import { SubjectsPage } from '../features/SubjectsPage.component';
import { UserPage } from '../features/UserPage.component';
import { WeekPage } from '../features/WeekPage.component';
import { Layout, notification } from 'antd';
import './App.css';
import { Header } from '../features/Header/Header.component';
import { Sider } from '../features/Sider/Sider.component';
import { SistemNotification } from '../common/SistemNotification';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { getNotifications } from '../store/actions/notification.actions';

interface AppProps {
    notificationList: SistemNotification[];
}

const { Content, Footer } = Layout;
export const App = ({ notificationList }: AppProps) => {
    useEffect(() => {
        getNotifications();
        notificationList.map((notif: SistemNotification) => {
            notification.open({
                message: notif.title,
                description: notif.text
            });
        });
    }, [notificationList]);
    return (
        <BrowserRouter>
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
                            <Routes>
                                <Route path="/home" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/week" element={<WeekPage />} />
                                <Route path="/news" element={<NewsPage />} />
                                <Route
                                    path="/subjects"
                                    element={<SubjectsPage />}
                                />
                                <Route path="/marks" element={<MarksPage />} />
                                <Route path="/user" element={<UserPage />} />
                                <Route path="/class" element={<ClassPage />} />
                                <Route
                                    path="*"
                                    element={<h1>page not found 404</h1>}
                                />
                            </Routes>
                        </div>
                    </Content>
                    <Footer>2022 mkhorosh</Footer>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

const mapStateToProps = (state: RootState) => ({
    notificationList: state.notifications.notificationList
});

export default connect(mapStateToProps, {
    getNotificationsAction: getNotifications
})(App);
