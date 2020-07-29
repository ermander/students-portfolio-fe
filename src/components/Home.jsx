import React, { Component } from 'react';
import { Spinner, Row, Col } from "react-bootstrap"
import "../App.css"
import StudentCard from './StudentCard';

class Home extends Component {

    state = {
        students: [],
        fetchingStudents: true
    }

    fetchAllStudents = async () => {
        const rawStudentsData = await fetch("http://localhost:3002/students/")
        const parsedStudentsData = await rawStudentsData.json()
        this.setState({
            students: parsedStudentsData.students,
            fetchingStudents: false
        })
        console.log(this.state.students)
    }

    componentDidMount(){
        this.fetchAllStudents()
    }

    render() {
        return (
            <>
            <Row className="homeRow">
                {this.state.fetchingStudents ? ( 
                <Spinner animation="border" role="status" className="homeSpinner">
                <span className="sr-only">Loading...</span>
                </Spinner>
                )
                :
                (
                    this.state.students.map(
                        (student) => {
                            return (
                                <Col key={student._id} sm={4}>
                                    <StudentCard
                                        id={student._id}
                                        image={student.image}
                                        name={student.name}
                                        surname={student.surname}
                                        dateOfBirth={student.dateOfBirth}
                                        country={student.country}
                                        email={student.email}
                                    />
                                </Col>
                            )
                        }
                    )
                )
                }
            </Row>
            </>
        );
    }
}

export default Home;