import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post src="https://images.newscientist.com/wp-content/uploads/2019/04/08111018/screenshot-2019-04-08-10.24.34.jpg" alt="inst"/>
                <Post src="https://cdn.images.express.co.uk/img/dynamic/151/590x/Black-hole-picture-please-time-date-first-image-black-hole-event-horizon-telescope-1112295.jpg?r=1554889792953" alt="second"/>
            </div>
        )
    }
}