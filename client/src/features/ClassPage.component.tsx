import { Avatar, List } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { User } from '../common/User';
import { getClassmates } from '../store/actions/user.actions';
import { RootState } from '../store/reducers/rootReducer';

interface ClassPageProps {
    classmates: User[];
    getClassmatesAction: () => void;
}

export const ClassPage = ({
    classmates,
    getClassmatesAction
}: ClassPageProps) => {
    useEffect(() => {
        getClassmatesAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [classmates]);
    return (
        <>
            <h1>Мой класс:</h1>
            <List
                dataSource={classmates}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    src={
                                        'https://i.pinimg.com/736x/7f/93/e0/7f93e0cc3e18f2f65ad76993e0e88150.jpg'
                                    }
                                />
                            }
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.email}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    classmates: state.user.classmates
});

export default connect(mapStateToProps, {
    getClassmatesAction: getClassmates
})(ClassPage);
