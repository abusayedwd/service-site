"use client"
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
 // import 'antd/dist/antd.css';

const { Title, Text } = Typography;

export default function ResetPassword() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '1rem' }}>Reset Password</Title>
        <Text style={{ marginBottom: '1.5rem' }}>
          Your password must be 8-10 characters long.
        </Text>
        <Form
          name="resetPassword"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="newPassword"
            
            rules={[{ required: true, message: 'Please input your new password!', min: 8, max: 10 }]}
          >
            <Input.Password placeholder="New Password" style={{ fontSize: '15px', padding: '8px',border:'1px solid',borderRadius:'4px' }} />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
             dependencies={['newPassword']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your new password!', min: 8, max: 10 },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" style={{ fontSize: '15px', padding: '8px', border:'1px solid',borderRadius:'4px' }} />
          </Form.Item>
          <Form.Item>
            <Button className='!bg-[#000]' type="primary" htmlType="submit" block>
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
