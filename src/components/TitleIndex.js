import React from 'react';
import '.././css/common/buttons.css';
import '.././css/TitleIndex.css';
import $ from 'jquery';
import 'smartmenus';
import {Router,Link} from 'react-router'




export default class NavIndex extends React.Component{
    render(){
        return(
            <div id="divIndex">
                <img classname="inline" src={require('.././assets/images/myblog-normal.png')} 
                    width='150vh'/>
                <button id="buttonIndex" type="button" 
                        className="inline button button-glow button-rounded button-raised button-primary">
                    首页
                </button>
                <fieldset id="fieldIndex"className="inline button-rounded button-glow">
                    <input id='textSearch' type="text" defaultvalue="搜索" /> 
                    <button id="buttonSearch" type="button"></button>
                </fieldset>
                <button id="buttonNewArticle" type="button" 
                        className='inline button button-glow button-rounded button-raised button-primary'  >             
                    新文章
                </button>
                <select id='indexSelect'className="inline button-glow button-rounded">
                    <option valule="index"> 目录显示 </option>
                    <option valule="abstract"> 摘要显示 </option>
                </select>
                <hr color="grey" border="none"/>
            </div>
        );
    }
}