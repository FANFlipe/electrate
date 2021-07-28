
import React from "react";
import { Menu } from 'antd';
import {
    BarChartOutlined,
    CalculatorOutlined,
    UnorderedListOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppMenu = ({selectedkey}) => {
    return (

        <>
            <Menu mode="horizontal" defaultSelectedKeys={[selectedkey]} theme={'dark'} >

                <Menu.Item
                    key="1"

                    icon={<CalculatorOutlined />}
                >    <Link to="/">
                        Calculadora
                    </Link>

                </Menu.Item>



                <Menu.Item
                    key="2"

                    icon={<BarChartOutlined />}
                >

                    <Link to="/imc">
                        imc
                    </Link>
                </Menu.Item>

                <Menu.Item
                    key="3"

                    icon={<PieChartOutlined />}
>
               <Link to="/todo">
                        Todo
                </Link>
                            
                        </Menu.Item>
                        <Menu.Item
                    key="4"

                    icon={<CalculatorOutlined />}
                >    <Link to="/getpizzas">
                    Getpizzas
                    </Link>
                    </Menu.Item>
                    </Menu>

        </>
                )
}
export default AppMenu;
