// import { Text } from "@/components/Text";
// import { Input } from "@/components/Input";
// import { Button } from "@/components/Button";
// import { Heading } from "@/components/Heading";
// import { NavigationBar } from "@/components/NavigationBar";
// import { CheckBox } from "@/components/CheckBox";

// import Link from "next/link";
// import React from "react";

// export default function LoginPage() {
//   return (
//     <div className="flex w-full flex-col items-center bg-foundation-white-white_500-0 py-5">
//       <div className="container-xs mb-1 flex flex-col items-center gap-[132px] lg:gap-[99px] lg:p-5 md:gap-[99px] md:p-5 sm:gap-[66px]">
//         <NavigationBar />
//         <div className="flex w-[48%] flex-col items-start gap-[26px] rounded-[16px] border border-solid border-foundation-maastricht_blue-maastricht_blue_blue_500-0 bg-foundation-white-white_500-0 px-11 py-10 shadow-xl lg:w-full md:w-full md:px-5 sm:p-4">
//           <div className="flex flex-col gap-6 self-stretch">
//             <div className="flex flex-col gap-7">
//               <div className="flex flex-col items-start gap-[26px]">
//                 <Link href="#" className="md:text-[28px] sm:text-[22px]">
//                   <Heading size="textxl" as="h1">
//                     Log in
//                   </Heading>
//                 </Link>
//                 <Input
//                   shape="round"
//                   type="text"
//                   name="Input fill"
//                   placeholder={`User Name`}
//                   className="self-stretch"
//                 />
//                 <Input
//                   shape="round"
//                   type="password"
//                   name="Input fill"
//                   placeholder={`Password`}
//                   className="self-stretch"
//                 />
//               </div>
//               <div className="flex justify-between gap-5">
//                 <CheckBox
//                   name="Label"
//                   label="Remember me"
//                   id="Label"
//                   className="gap-2.5 text-[16px] text-foundation-maastricht_blue-maastricht_blue_500-0"
//                 />
//                 <Link href="/forgotpassword">
//                   <Text
//                     as="p"
//                     className="!text-foundation-maastricht_blue-maastricht_blue_600"
//                   >
//                     Forgot password?
//                   </Text>
//                 </Link>
//               </div>
//             </div>
//             <Button
//               size="3x1"
//               variant="outline"
//               className="self-stretch rounded-md font-montserrat font-medium py-[16px]"
//             >
//               Login
//             </Button>
//           </div>
//           <Text
//             as="p"
//             className="mb-[66px] !text-foundation-primary_black-primary_black_400"
//           >
//             <span className="text-foundation-primary_black-primary_black_400">
//               Already have an account?{" "}
//             </span>
//             <Link href="signup" className="inline">
//               <span className="text-foundation-maastricht_blue-maastricht_blue_500-0">
//                 Sign up
//               </span>
//             </Link>
//           </Text>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Link from 'next/link';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

const { Title, Text } = Typography;

export default function LoginPage() {
  const handleLoging = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '3rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{  marginBottom: '1rem' }}>Log In</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLoging}
        >
          <Form.Item
            name="email"
          
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className='py-2 text-[15px]' prefix={<UserOutlined />} placeholder="Enter mail"
           
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password className='py-2 text-[15px]' prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link href="/forgotpassword" legacyBehavior>
              <a style={{ float: 'right' }}>Forgot password?</a>
            </Link>
          </Form.Item>
          <Form.Item>
            <Button className='!bg-[#000]' type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
        <Text style={{ display: 'block', textAlign: 'center' }}>
          Don't have an account? <Link href="/signup">signup</Link>
        </Text>
      </div>
    </div>
  );
}

