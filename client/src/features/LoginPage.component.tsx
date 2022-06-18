import { Button, Form, Input } from 'antd';
import React from 'react';

export const LoginPage = () => {
    return (
        <Form>
            <Form.Item
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Укажите логин!'
                    }
                ]}
            >
                <Input placeholder="Логин" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Укажите пароль!'
                    }
                ]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Вход
                </Button>
            </Form.Item>
        </Form>
    );
};
