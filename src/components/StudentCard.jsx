import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

class StudentCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img className="cardImage" variant="top" src={this.props.image} />
                        <Card.Body>
                        <Card.Title>{this.props.name} {this.props.surname}</Card.Title>
                        <Card.Text>
                            Date of birth: {this.props.dateOfBirth}
                        <br/>
                            Country: {this.props.country}
                        <br/>
                            Email: {this.props.email}
                        </Card.Text>
                        <Link to={`/details/:${this.props.id}`} >
                            <Button variant="primary">Info about {this.props.name}...</Button>
                        </Link>
                        </Card.Body>
                </Card>                
            </div>
        );
    }
}

export default StudentCard;