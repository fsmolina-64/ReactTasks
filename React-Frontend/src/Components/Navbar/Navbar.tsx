import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './navbar.css'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to="/">Inicio</Link>,
    key: 'home',
    icon: <MailOutlined />,
    
  },
  {
    label: <Link to="/tasks">Tareas</Link>,
    key: 'tasks',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/stats">Estadisticas</Link>,
    key: 'statistics',
    icon: <AppstoreOutlined />,
  },

];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;