import React, { Component } from 'react';
import "../style/card.css"
import { Row, Col, Image } from "react-bootstrap"

class UserInfo extends Component {

    state = {
        userInfo: [],
        userProjects: []
    }

    userInfosFetch = async () => {
        const rawUserData = await fetch("http://localhost:3002/students/" + this.props.match.params.id)
        const parsedUserData = await rawUserData.json()
        this.setState({
            userInfo: parsedUserData
        })

        console.log(this.state.userInfo._id)

        const rawUserProjects = await fetch("http://localhost:3002/students/" + this.state.userInfo._id + "/projects")
        const parsedUserProjects = await rawUserProjects.json()        
        console.log(parsedUserProjects)
        this.setState({
            userProjects: parsedUserProjects
        })
        console.log(this.state.userProjects)
    }

    componentDidMount(){
        this.userInfosFetch()
    }

    render() {
        return (
            <>
            <Row className="mt-5">
                <Col sm={6}>
                    <Image className="userInfoImage" src={this.state.userInfo.image}/>
                </Col>
                <Col sm={6}>
                    <h2 className="userInfos space">Name: <span>{this.state.userInfo.name}</span></h2>
                    <h2 className="userInfos space">Surname: <span>{this.state.userInfo.surname}</span></h2>
                    <h2 className="userInfos space">Country: <span>{this.state.userInfo.country}</span></h2>
                    <h2 className="userInfos space">Date Of Birth: <span>{this.state.userInfo.dateOfBirth}</span></h2>
                    <h2 className="userInfos space">Email: <span>{this.state.userInfo.email}</span></h2>
                </Col>
            </Row>
            </>            
        );
    }
}

export default UserInfo;