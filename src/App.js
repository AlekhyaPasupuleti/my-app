
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ViewActivities from './pages/ViewActivities';
import LogHours from './pages/LogHours';
import ClassEnroll from './pages/ClassEnroll';
import ClassSchedule from './pages/ClassSchedule';

 const App = () => {
    return (
        <BrowserRouter>
        <Sidebar>
        <Routes>
           <Route path ="/"element={<Home/>}/>
           <Route path ="/home"element={<Home/>}/>
           <Route path ="/classSchedule"element={<ClassSchedule/>}/>
           <Route path ="/ViewActivities"element={<ViewActivities/>}/>
           <Route path ="/ClassEnroll"element={<ClassEnroll/>}/>
           <Route path ="/LogHours"element={<LogHours/>}/>
        </Routes> 
        </Sidebar>
        </BrowserRouter>
    );
 };
 export default App;