import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from 'components/Header';
import { FirstChallenge } from 'containers/FirstChallenge';
import { SecondChallenge } from 'containers/SecondChallenge';
import { ThirdChallenge } from 'containers/ThirdChallenge';
import FourthChallenge from 'containers/FourthChallenge';
import { NotFound } from 'components/NotFound';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>                
                <Route path="/first" element={
                    <FirstChallenge/>
                }/>
                <Route path="/second" element={
                    <SecondChallenge/>
                }/>
                <Route path="/third" element={
                    <ThirdChallenge/>
                }/>
                <Route path="/fourth" element={
                    <FourthChallenge/>
                }/>
                <Route path="/not-found" element={
                    <NotFound/>
                }/>
                <Route path="*" element={
                    <Navigate to="/not-found" />
                }/>
            </Routes>
        </BrowserRouter>
    )
}
