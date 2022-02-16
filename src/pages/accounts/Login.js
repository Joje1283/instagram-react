import React, {useState} from "react";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";
import {Card, Form, Input, Button, notification} from "antd"
import {axiosInstance} from "../../core/api";
import {useHistory, useLocation} from "react-router-dom";
import {setToken, useAppContext} from "../../core/store";
import {parseErrorMessages} from "../../core/parsers";

function Login() {
  const {dispatch} = useAppContext();
  const location = useLocation();
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory();

  const {from: loginRedirectUrl} = location.state || {from: {pathname: "/"}}

  console.log("location.state: ", location.state);

  const onFinish = values => {
    const {username, password} = values;
    const data = {username, password};
    setFieldErrors({});
    axiosInstance.post("/accounts/api/token/", data)
      .then(response => {
        const {data: {access: jwtToken, refresh}} = response;
        dispatch(setToken({jwtToken, refresh}));
        notification.open({
          message: '로그인 성공',
          description: '로그인 페이지로 이동합니다.',
          icon: <SmileOutlined style={{color: "#108ee9"}}/>
        });
        history.push(loginRedirectUrl);
      })
      .catch(error => {
        notification.open({
          message: '로그인 실패',
          description: '아이디/암호를 확인해주세요.',
          icon: <FrownOutlined style={{color: "#ff3333"}}/>
        });
        if (error.response) {
          const {data: fieldsErrorMessages} = error.response
          parseErrorMessages(fieldsErrorMessages);
        }
      });
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="로그인">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            }
          ]}
          hasFeedback
          {...fieldErrors.username}
          {...fieldErrors.non_field_errors}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
          {...fieldErrors.password}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;