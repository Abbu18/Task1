import React, { Component } from 'react';
import '../styles/ReviewsStyles.css';

class ReviewsData extends Component {
    render() {
        return (
            <div>
                <div className='rev-image'>
                    <img src={this.props.img1} alt='Logo' />
                    <img src={this.props.img2} alt='Logo' />
                    <img src={this.props.img3} alt='Logo' />
                    <img src={this.props.img4} alt='Logo' />
                    <img src={this.props.img5} alt='Logo' />
                </div>

                <div className='rev-des'>
                    <h2>{this.props.heading1}</h2>
                    <p>{this.props.text1}</p>

                    <h2>{this.props.heading2}</h2>
                    <p>{this.props.text2}</p>

                    <h2>{this.props.heading3}</h2>
                    <p>{this.props.text3}</p>

                    <h2>{this.props.heading4}</h2>
                    <p>{this.props.text4}</p>
                    <p>{this.props.text5}</p>
                    <p>{this.props.text6}</p>
                </div>
            </div>
        )
    }
}

export default ReviewsData;