import React, {Component} from 'react';
import '../styles/ServicesStyles.css';


class ServicesData extends Component {
    render() {
        return (
                <div className={this.props.cName}>
                    <div className='des-text'>
                        <h2>{this.props.heading1}</h2>
                        <p>{this.props.text1}</p>
                        <h2>{this.props.heading2}</h2>
                        <p>{this.props.text2}</p>
                    </div>

                    <div className='ser-images'>
                        <img alt='img' src={this.props.img1}></img>
                        <img alt='img' src={this.props.img2}></img>
                    </div>
                </div>
        )
    }
}

export default ServicesData;