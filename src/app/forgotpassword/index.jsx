"use client"
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import Link from 'next/link';
// import 'antd/dist/antd.css';

const { Title, Text } = Typography;

export default function ForgotpasswordPage() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '1rem' }}>Forgot Password</Title>
        <Text style={{marginBottom: '1.5rem' }}>
          Please enter your Email to reset your password.
        </Text>
        <Form
          name="forgotpassword"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
          >
            <Input placeholder="Enter Your Email" style={{ fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
          </Form.Item>
          <Form.Item>
            <Button className='!bg-[#000]' type="primary" htmlType="submit" block>
              Get OTP
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link legacyBehavior href="/login">
            <a>Back to Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
