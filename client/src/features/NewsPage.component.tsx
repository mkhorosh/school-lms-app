import { Card } from 'antd';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { News } from '../common/News';
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
        try {
            getNewsAction();
        } catch (e) {
            console.log(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1>Новости и объявления:</h1>
            {news.map((item: News) => (
                <Card title={item.title}>
                    <p>{item.description}</p>
                    <p>{item.author}</p>
                </Card>
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
