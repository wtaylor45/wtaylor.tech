import React from 'react';
import './NavBar.css';
import $ from 'jquery';
import pages from '../pages.json';
import Hamburger from './menu.svg';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }


        let self = this;
        $(document).ready(() => {
            $(window).scroll(function () {
                self.setState({ selected: null });
                self.getCurrentSection();
            }).scroll();
        });
    }

    render() {
        return (
            <div className="NavBar">
                <button className="HamburgerIcon link-button" onClick={this.hamburgerClickHandler}>
                    <img  alt="menu" src={Hamburger}/>
                </button>
                <ul>
                    {this.createNavLinks(pages)}
                </ul>
            </div>
        )
    }

    getCurrentSection = () => {
        let self = this;
        var scrollDistance = $(window).scrollTop();
        $('.InfoSection').each(function (i) {
            if ($(this).position().top - window.innerHeight / 2 <= scrollDistance) {
                if(self.state.selected !== $(this)[0].id) 
                    self.setState({ selected: $(this)[0].id });
            }
        });
    }

    createNavLinks = pages => {
        let links = [];
        for (let i in pages) {
            let page = pages[i];
            links.push((
                <li key={i}>
                    <button className={"link-button " + (page.id === this.state.selected ? "active" : "")}
                        onClick={this.clickHandler} section={page.id}>{page.name}</button>
                </li>
            ));
        }

        return links;
    }

    clickHandler = (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#" + e.target.getAttribute('section')).offset().top
        }, 500);
        $('.NavBar').removeClass('expanded');
    }

    hamburgerClickHandler = (e) => {
        e.preventDefault();
        $('.NavBar').toggleClass('expanded');
    }

}

export default NavBar;