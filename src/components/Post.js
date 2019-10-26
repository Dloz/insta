import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render(){
        return (
            <div className="post">
                <User 
                    src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                    alt="man" 
                    name="Scott"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post_name">
                    some account
                </div>
                <div className="post__descr">
                    Some Description 
                </div>
            </div>
        )
    }
}