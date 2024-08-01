"use client"
import React from 'react';
import { Form, Input, Button, Typography, Row, Col } from 'antd';
import Link from 'next/link';
// import 'antd/dist/antd.css';

const { Title, Text } = Typography;

export default function SignupPage() {
  const onFinish = (values) => {
    const { confirmPassword, ...signupData } = values;
    console.log('Received values of form: ', signupData);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{marginBottom: '1rem' }}>Sign Up</Title>
        <Form
          name="signup"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="fullName" 
                className='border'
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                 <Input placeholder="Full Name" style={{  fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px'}} />
                
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                 rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
              >
                <Input placeholder="Email" style={{  fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phoneNumber"
                 rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input placeholder="phone Number" style={{ fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="location"
                 rules={[{ required: true, message: 'Please input your location!' }]}
              >
                <Input placeholder="Location" style={{  fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="password"
             rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" style={{ fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
             dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="confirmPassword" style={{  fontSize: '15px', padding: '8px', border: '1px solid',borderRadius:'4px' }} />
          </Form.Item>
          <Form.Item>
            <Button className='!bg-[#000] !py-2' type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Text style={{ display: 'block', textAlign: 'center' }}>
          Already have an account? <Link legacyBehavior href="/login">Log In</Link>
        </Text>
      </div>
    </div>
  );
}
