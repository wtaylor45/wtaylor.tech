import React from 'react';
import './NavBar.css';
import $ from 'jquery';
import pages from '../pages.json';

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

    getCurrentSection = () => {
        let self = this;
        var scrollDistance = $(window).scrollTop();
        console.log(scrollDistance)
        $('.InfoSection').each(function (i) {
            if ($(this).position().top - window.innerHeight / 2 <= scrollDistance) {
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
            ))
        }

        return links;
    }

    clickHandler = (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#" + e.target.getAttribute('section')).offset().top
        }, 500);
    }

    render() {
        return (
            <div className="NavBar">
                <ul>
                    {this.createNavLinks(pages)}
                </ul>
            </div>
        )
    }

}

export default NavBar;