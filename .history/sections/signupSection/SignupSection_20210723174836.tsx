import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import Router from 'next/router'


import classes from "./SignupSection.module.scss";

const SignupSection = () => {
  const onFinish = (values: any) => {
    console.log(values)
    const formdata: object = {
      name: values?.name,
      email: values.email,
      password: values.password
    };
    console.log("Form: ", formdata);
    axios
      .post("http://localhost:8010/proxy/api/auth/register_login", formdata, {withCredentials: true})
      .then((res) => {
        console.log(res)
        if (res?.data?.success){
          Router.push('/');
      }
      } 
      )};

  return (
    <Card className={classes.card}>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div
          className={"d-flex justify-content-center align-items-center mb-2"}
        >
          <h1>Because History should be fun</h1>
        </div>
        <div style={{ width: "100%", height: "80px", position: "relative" }}>
          <Image
            src={"/humanEvolution.png"}
            objectFit="contain"
            layout="fill"
            alt="Japanese samourai sun"
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                validateTrigger: "onBlur",
                type: "email",
                message: "Please input a valid E-mail!",
                required: true,
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password must be 8 characters minimum",
                min: 8,
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <span className="ms-2">Or </span>
            <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default SignupSection;
