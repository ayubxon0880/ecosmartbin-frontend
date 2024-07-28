import React, {useState} from 'react';
import {Form, Button, Container, Alert} from 'react-bootstrap';
import axios from 'axios';
import {API} from "../../components/API";
import {toaster} from "../../components/service";
import {Toaster} from "react-hot-toast";
import "./member.css";

const MemberForm = () => {
    const [loading, setLoading] = useState(false);

    const [member, setMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        telegram: '',
        phone: '',
        image: '',
        direction: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMember({
            ...member,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(API + '/team/add', member);
            setSuccess('Member added successfully!');
            setMember({
                firstName: '',
                lastName: '',
                email: '',
                linkedin: '',
                telegram: '',
                phone: '',
                image: '',
                direction: ''
            });
            toaster(200, response.data.message);
            setLoading(false);
            toaster(200, 'Member created');
        } catch (error) {
            setLoading(false);
            toaster(400, 'Failed to add member. Please try again.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <div className="form-container">
                <h2 className="text-center mb-4">Add New Member</h2>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={member.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={member.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={member.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLinkedin">
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control
                            type="text"
                            name="linkedin"
                            value={member.linkedin}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formTelegram">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control
                            type="text"
                            name="telegram"
                            value={member.telegram}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={member.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formImage">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="image"
                            value={member.image}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDirection">
                        <Form.Label>Direction</Form.Label>
                        <Form.Control
                            type="text"
                            name="direction"
                            value={member.direction}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {
                        loading ? <div className={"loader"}></div> :
                        <Button variant="primary" type="submit">
                            Add Member
                        </Button>
                    }
                </Form>
            </div>
        </Container>
    );
};

export default MemberForm;
