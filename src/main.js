import React from 'react'
import ReactDom from 'react-dom'
import {Menu } from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./dataCheckPlatform/home"
import Other from "./dataCheckPlatform/other"


const { SubMenu } = Menu;

/*分割线，以下部分是引入测试的页面--------------------------------------------------- */
const mainPageJsx=(
    <div>test</div>
    
)

/*分割线--------------------------------------------------------------------------- */
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
        <Router>
            <div style={{ width: 226}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    onClick={this.clickMenu}
                    inlineCollapsed={this.state.collapsed}
                >
                        <SubMenu key="sub1" title="数据管理平台">
                            <Menu.Item key="1"><Link to="/">数据校验</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/other">其他页</Link></Menu.Item>
                            <Menu.Item key="3">Option 6</Menu.Item>
                            <Menu.Item key="4">Option 7</Menu.Item>
                            <Menu.Item key="5">Option 8</Menu.Item>
                        </SubMenu>
                </Menu>
                <Route exact path="/" component={Home}/>
                <Route path="/other" component={Other}/>
            </div>
        </Router>
        )
        return sidebar
      }
  }


ReactDom.render(<Sidebar></Sidebar>, document.getElementById("sidebar"));
ReactDom.render(mainPageJsx, document.getElementById("app"));
