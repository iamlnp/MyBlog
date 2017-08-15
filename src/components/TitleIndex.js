import React from 'react';
import '.././css/TitleIndex.css';
import $ from 'jquery';
import 'smartmenus';




export default class NavIndex extends React.Component{
    componentDidMount(){
        return (
            $(function() {
            $('#main-menu').smartmenus();
            })
        );
    }
    render(){
        return(
            <div>
                <ul id="main-menu" class="sm sm-blue">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a>
                    <ul>
                    <li><a href="#">Item 2-1</a></li>
                    <li><a href="#">Item 2-2</a></li>
                    <li><a href="#">Item 2-3</a></li>
                    </ul>
                </li>
                <li><a href="#">Item 3</a></li>
                </ul>
            </div>
        );
    }
}