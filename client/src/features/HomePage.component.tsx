import { Row, Col, Card } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAssignments } from '../store/actions/user.actions';
import { RootState } from '../store/reducers/rootReducer';

interface HomePageProps {
    task: any;
    getAssignmentsAction: () => void;
}

export const HomePage = ({ task, getAssignmentsAction }: HomePageProps) => {
    useEffect(() => {
        getAssignmentsAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [task]);
    return (
        <>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="сегодня" bordered={false}>
                        <Row>
                            <p>1.</p>
                            <p>Химия</p>
                            <p>-каб. 17</p>
                        </Row>
                        <Row>
                            <p>2.</p>
                            <p>Геометрия</p>
                            <p>-каб. 17</p>
                        </Row>
                        <Row>
                            <p>3.</p>
                            <p>Обществознание</p>
                            <p>-каб. 17</p>
                        </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="ДЗ" bordered={true}>
                        <input type="checkbox" checked={task.isDone} />
                        <label className="todo-label" htmlFor="todo-2">
                            {task.text}
                        </label>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="завтра" bordered={false}>
                        <Row>
                            <p>1.</p>
                            <p>Химия</p>
                            <p>-каб. 17</p>
                        </Row>
                        <Row>
                            <p>2.</p>
                            <p>Физика</p>
                            <p>-каб. 17</p>
                        </Row>
                        <Row>
                            <p>3.</p>
                            <p>Биология</p>
                            <p>-каб. 17</p>
                        </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="ДЗ" bordered={true}>
                        <input type="checkbox" checked={task.isDone} />
                        <label className="todo-label" htmlFor="todo-2">
                            {task.text}
                        </label>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    task: state.user.assignments
});

export default connect(mapStateToProps, {
    getAssignmentsAction: getAssignments
})(HomePage);
