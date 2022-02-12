import React from "react";
import {axiosInstance} from "../../core/api";
import {Button} from "antd";

export default function TestAxios() {
  const callApi = async () => {
    const username = 'joje1283';
    const password = '1234'
    const data = {username, password};
    const response = await axiosInstance.post('/accounts/api/token/', data);
    console.log(response);
  }
  return <>
    <Button onClick={callApi}>Button</Button>
  </>
}