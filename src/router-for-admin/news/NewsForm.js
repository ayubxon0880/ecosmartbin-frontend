import React, { useState } from 'react';
import axios from 'axios';
import {API} from "../../components/API";
import {Toaster} from "react-hot-toast";
import {toaster} from "../../components/service";

const NewsForm = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        formData.append('newsCreateDTO', JSON.stringify({content,title}));

        try {
            const response = await axios.post(API+'/news/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('News created successfully:', response.data);
            setLoading(false);
            toaster(200,"News created !")
        } catch (error) {
            console.error('Error creating news:', error);
        }
    };

    return (
        <div className="container mt-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2>Create News</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="images" className="form-label">Upload Images</label>
                    <input
                        type="file"
                        className="form-control"
                        id="images"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="name" placeholder="Title"
                           onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="newsCreateDTO" className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        id="newsCreateDTO"
                        rows="5"
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                {
                    loading ? <div className={"loader"}></div> :
                    <button type="submit" className="btn btn-primary">Create News</button>
                }
            </form>
        </div>
    );
};

export default NewsForm;
