import React from 'react'
import ReactDom from 'react-dom'
import {Menu } from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./dataCheckPlatform/home"
import Other from "./dataCheckPlatform/other"

const { SubMenu } = Menu;

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
            <div className="sidebar" style={{width:226,float:'left',backgroundColor:"#001529"}}>
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
            </div>
            <div style={{marginLeft:230}}>
                <Route exact path="/" component={Home}/>
                <Route path="/other" component={Other}/>
            </div>
        </Router>
        )
        return sidebar
      }
  }


ReactDom.render(<Sidebar></Sidebar>, document.getElementById("root"));
