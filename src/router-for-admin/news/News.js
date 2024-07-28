// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import './news.css';
import {API} from "../../components/API"; // Import custom CSS if needed

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(API+'/news/latest'); // Adjust endpoint as needed
                setNews(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load news. Please try again later.');
                setLoading(false);
            }
        };

        fetchNews();
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
            <h2 className="text-center mb-4">News Articles</h2>
            <Row>
                {news.map((article) => (
                    <Col md={4} lg={3} className="mb-4" key={article.id}>
                        <Card>
                            {article.images && article.images.length > 0 && (
                                <Card.Img variant="top" src={article.images[0]} alt={article.title} />
                            )}
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewsList;
