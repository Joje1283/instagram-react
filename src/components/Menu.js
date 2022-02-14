import { Menu as AntdMenu } from 'antd';
import { SearchOutlined, HomeOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useAppContext, deleteToken} from "../core/store";

const { SubMenu } = AntdMenu;

export default function Menu() {
  const [current, setCurrent] = useState('home');
  const {dispatch} = useAppContext();
  const history = useHistory()
  const handleClick = e => {
    console.log('click ', e);
    if (e.key === 'home') {
      history.push("/");
    }
    else if (e.key === 'logout') {
      dispatch(deleteToken())
    }
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
        <SubMenu key="SubMenu" icon={<UserOutlined />} title="profile">
            <AntdMenu.Item key="profile">프로필</AntdMenu.Item>
            <AntdMenu.Item key="logout">로그아웃</AntdMenu.Item>
        </SubMenu>
      </AntdMenu>
    </>

  );
}
