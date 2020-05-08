import React from 'react'
import {Menu, Button} from 'antd'

const { SubMenu } = Menu;

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';


class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        };
    }

    clickMenu(item, key, keyPath, domEvent){
        console.log("click",item, key, keyPath, domEvent)
    }
  
    render() {
        var sidebar=(
            <div style={{ width: 226,}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    onClick={this.clickMenu}
                    inlineCollapsed={this.state.collapsed}
                >
                        <SubMenu key="sub1" title="数据管理平台">
                            <Menu.Item key="1">数据校验</Menu.Item>
                            <Menu.Item key="2">Option 5</Menu.Item>
                            <Menu.Item key="3">Option 6</Menu.Item>
                            <Menu.Item key="4">Option 7</Menu.Item>
                            <Menu.Item key="5">Option 8</Menu.Item>
                        </SubMenu>

                </Menu>
            </div>
        )
        return sidebar
      }
  }

export default  Sidebar;