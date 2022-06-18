import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Comment } from 'antd';
import moment from 'moment';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { News, SistemComment } from '../common/News';
import { getNews } from '../store/actions/news.actions';
import { RootState } from '../store/reducers/rootReducer';

interface NewsPageProps {
    news: News[];
    getNewsAction: () => void;
}

export const NewsPage: FC<NewsPageProps> = ({
    news,
    getNewsAction
}: PropsWithChildren<NewsPageProps>) => {
    useEffect(() => {
        getNewsAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1>Новости и объявления:</h1>
            <br />
            {news.map((item: News) => (
                <div key={item.id}>
                    <Card title={item.title}>
                        <p>{item.text}</p>
                    </Card>
                    {item.comments.map((com: SistemComment) => (
                        <Comment
                            key={com.id}
                            author={com.author.name}
                            avatar={<Avatar icon={<UserOutlined />} />}
                            content={<p>{com.message}</p>}
                            datetime={
                                <span>
                                    {moment(com.date)
                                        .locale('ru')
                                        .format('D MMMM  YYYY')}
                                </span>
                            }
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    news: state.news.news
});

export default connect(mapStateToProps, {
    getNewsAction: getNews
})(NewsPage);
