// src/components/MemberList.js
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import './member.css';
import {API} from "../../components/API"; // Import custom CSS if needed

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get(API+'/team/all');
                setMembers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load members. Please try again later.');
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        <Container className="my-4">
            {error && <Alert variant="danger">{error}</Alert>}
            <h2 className="text-center mb-4">Team Members</h2>
            <Row>
                {members.map(member => (
                    <Col md={4} lg={3} className="mb-4" key={member.id}>
                        <Card>
                            {member.image && (
                                <Card.Img variant="top" src={member.image} alt={member.firstName} />
                            )}
                            <Card.Body>
                                <Card.Title>{member.firstName} {member.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.email}</Card.Subtitle>
                                <Card.Text>
                                    <strong>LinkedIn:</strong> {member.linkedin}<br />
                                    <strong>Telegram:</strong> {member.telegram}<br />
                                    <strong>Phone:</strong> {member.phone}<br />
                                    <strong>Direction:</strong> {member.direction}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MemberList;
