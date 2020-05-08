import React from 'react'
import ReactDom from 'react-dom'
//import App from './antd/01.Form' 没有暴露的对象直接import文件即可


/*分割线，以下部分是引入测试的页面--------------------------------------------------- */
const mainPageJsx=(
    <div>test</div>
)
/*分割线--------------------------------------------------------------------------- */
ReactDom.render(mainPageJsx, document.getElementById("app"));

