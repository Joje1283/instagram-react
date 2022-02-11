import { Menu as AntdMenu } from 'antd';
import { SearchOutlined, HomeOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import {useState} from "react";

export default function Menu() {
  const [current, setCurrent] = useState('home');
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <AntdMenu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <AntdMenu.Item key="home" icon={<HomeOutlined />}>
          Home
        </AntdMenu.Item>
        <AntdMenu.Item key="new_post" icon={<PlusCircleOutlined />}>
          new post
        </AntdMenu.Item>
        <AntdMenu.Item key="search_person" icon={<SearchOutlined />}>
          person
        </AntdMenu.Item>
        <AntdMenu.Item key="profile" icon={<UserOutlined />}>
          profile
        </AntdMenu.Item>
      </AntdMenu>
    </>

  );
}
