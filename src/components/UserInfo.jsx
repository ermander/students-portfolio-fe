import React, { Component } from 'react';
import "../style/card.css"

class UserInfo extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="container">
                    <div className="box">
                        <div className="icon">1</div>
                        <div className="content"></div>
                        <h3>Service name</h3>
                            <p>
                                Lorem ipsum
                            </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;