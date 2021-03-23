import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft.js';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight.js';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle.js';
import './gallery.scss';
class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            currentTab: 0,
            tabs: []
        }
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }
    componentDidMount() {
        import('./data/slides.json')
        .then(data => 
            this.setState({ 
                tabs: data.default
            })
        )
    }
    nextSlide() {
        const { currentTab, tabs } = this.state;
        if(currentTab + 1 >= tabs.length) {
            this.setState({
                currentTab: 0
            });
        } else {
            this.setState(prevState => ({
                currentTab: prevState.currentTab + 1
            }));
        }
    }
    prevSlide() {
        const { currentTab, tabs } = this.state; 
        if(currentTab - 1 < 0) {
            this.setState({
                currentTab: tabs.length - 1
            });
        } else {
            this.setState(prevState => ({
                currentTab: prevState.currentTab - 1
            }));
        }
    }
    render() {
        const { currentTab, tabs } = this.state;
        const slides = tabs.map(item => {
            let bgImg = require(`assets/img/${item.img}`);
            return (
                <section 
                    key={item.id} 
                    className="gallery" 
                    style={{backgroundImage: `url(${bgImg})`}}
                >
                    <div className="overlay">
                        <div className="prev-slide" onClick={this.prevSlide}>
                            <FontAwesomeIcon 
                                className='arrow' 
                                icon={faChevronLeft}                                 
                            />
                        </div>
                        <div className="text">
                            <h2>{item.text}</h2>
                            <h3>{item.subtext}</h3>
                        </div>
                        <div className="next-slide" onClick={this.nextSlide}>
                            <FontAwesomeIcon 
                                className='arrow' 
                                icon={faChevronRight}                                 
                            />
                        </div>
                    </div>
                </section>
            )
        })
        return (
            <>
                { slides[currentTab] }
            </>
        );
    }
}
export default Gallery;