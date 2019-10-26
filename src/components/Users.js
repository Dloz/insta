import React from 'react';
import User from './User';

export default function Users(){
    return (
        <div className="right">
            <User 
                src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                alt="man" 
                name="Scott"/>
            <div className="users__block">
                <User 
                    src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://tribktla.files.wordpress.com/2019/02/santaana1.jpg?quality=85&strip=all&resize=1200,1362" 
                    alt="man" 
                    name="Scott"
                    min/>    
            </div>
        </div>
    )
}