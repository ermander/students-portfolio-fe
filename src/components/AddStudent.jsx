import React, { Component } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap"
import "../App.css"

class AddStudent extends Component {

    state = {
        name: "",
        surname: "",
        email: "",
        country: "",
        dateOfBirth: "",
        image: ""
    }

    studentAddedAllert = () => {
        alert("The new student has been succefully added!")
    }

    studentNotAddedAllert = () => {
        alert("An error has occured sending the new student")
    }


    createStudent = async () => {
        const newStudent = {
            ...this.state,
            "image": "https://cdn.robadadonne.it/wp-content/uploads/sites/11/2019/12/09153739/Pingu_in_the_City-59e2198aa46fc20191209023739_bb8ce539663db0b3ab346076357c85d020191209023739_f8263dcf8108117c16058c20a1adc89f.jpg"
        }

        try {
            const url = "https://students-portfolio-be.herokuapp.com/students"
            const sendNewStudent = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newStudent)
            })

            if(sendNewStudent.ok){
                this.studentAddedAllert()
                console.log("Everything is ok!")
                this.setState({
                    name: "",
                    surname: "",
                    email: "",
                    country: "",
                    dateOfBirth: ""
                })

        }
            
        } catch (error) {
            console.log("An error has occured sending the new student: ", error)   
            this.studentNotAddedAllert()         
        }

        
    }

    render() {
        return (
            <div>
                <h1>New Student Form</h1>
                <Form>
                    <Row>
                        <Col >
                            <Form.Group className="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter name"
                                onChange={(e) => this.setState({ name: e.currentTarget.value })}
                                value={this.state.name} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="surname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter surname"
                                onChange={(e) => this.setState({ surname: e.currentTarget.value })}
                                value={this.state.surname} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                type="text" 
                                placeholder="Enter country"
                                onChange={(e) => this.setState({ country: e.currentTarget.value })}
                                value={this.state.country} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>   
                        </Col>
                        <Col>
                            <Form.Group className="dateOfBirth">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter date of birth"
                                onChange={(e) => this.setState({ dateOfBirth: e.currentTarget.value })}
                                value={this.state.dateOfBirth} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => this.setState({ email: e.currentTarget.value })}
                        value={this.state.email} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.createStudent}>
                        Submit
                    </Button>
                </Form>           
            </div>
        );
    }
}

export default AddStudent;