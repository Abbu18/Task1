import React , {Component} from 'react';
import '../styles/HomePageStyles.css';
import { Link } from 'react-router-dom';

class HomePageData extends Component{
    render(){
        return(
            <div className='first-des'>
            <div className='des-text'>
                <h2>{this.props.heading1}</h2>
                <p>{this.props.text1}</p>
                <Link to="/services">
                    <button className='show'>SERVICES</button>
                </Link>

                <h2>{this.props.heading2}</h2>
                <p>{this.props.text2}</p>
                <Link to="/reviews">
                    <button className='show'>CLIENT REVIEWS</button>
                </Link>

                <h2>{this.props.heading3}</h2>
                <p>{this.props.text3}</p>
                <Link to="/contact">
                    <button className='show'>CONTACT US</button>
                </Link>
                
            </div>
            <div className='image'>
                <img alt='img' src={this.props.img1}></img>
                <img alt='img' src={this.props.img2}></img>
            </div>
        </div>
        )
    }
}

export default HomePageData;
