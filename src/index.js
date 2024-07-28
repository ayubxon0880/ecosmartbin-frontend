import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import {AdminNavbar} from "./components/PublicNavbar";

import Menu from "./router-for-admin/Menu";
import NewsView from "./router-for-admin/news/NewsView";
import Login from "./Login";
import NewsForm from "./router-for-admin/news/NewsForm";
import MemberForm from "./router-for-admin/member/MemberForm";
import Members from "./router-for-admin/member/Members";
import News from "./router-for-admin/news/News";

const App = () => {
    const token = localStorage.getItem("token");

    let isAuthenticated = false;

    if (token !== null) {
        isAuthenticated = true;
    }
    console.log(isAuthenticated)

    return (
        <Router>
        {
            isAuthenticated ? 
                        <>
                            <AdminNavbar/>
                            <Routes>
                                <Route path="/" element={<Menu/>}/>
                                <Route path="/member-form" element={<MemberForm/>}/>
                                <Route path="/news-form" element={<NewsForm/>}/>
                                <Route path="/members" element={<Members/>}/>
                                <Route path="/news" element={<News/>}/>

                                <Route path="/view-news" element={<NewsView/>}/>

                                <Route path='*' element={<Navigate to='/'/>}/>
                            </Routes>
                        </>
                        :
                <>
                    <Login/>
                </>
        }
        </Router>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);