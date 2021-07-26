import React, { useState } from 'react';
import { Menu } from 'antd';
import Calc from './components/Calc';
import Imc from './components/Imc';
import { BarChartOutlined, CalculatorOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Todo from './components/Todo';

const App = () => {

  const [pageControl, setControl] = useState('calc');

  const Content = () => {
    switch (pageControl) {
      case 'calc':
        return <Calc />
      case 'imc':
        return <Imc />
      case 'todo':
        return <Todo />
    }
  }
  return (
    <>
      <Menu mode="horizontal" defaultChecked={['1']} theme={'dark'} >
        <Menu.Item
          key="1"
          onClick={() => setControl('calc')}
          icon={<CalculatorOutlined />}
        >
          Calculadora

        </Menu.Item>


        <Menu.Item
          key="2"
          onClick={() => setControl('imc')}
          icon={<BarChartOutlined />}
        >


          imc
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => setControl('todo')}
          icon={<UnorderedListOutlined />}

          
      >Todo</Menu.Item>
      </Menu>
        <Content />
    </>
      )

}
      export default App;
