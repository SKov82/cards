import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import SuperComponent from './components/SuperComponent';
import {Login} from './components/auth/Login';
import {Signup} from './components/auth/Signup';
import {Profile} from './components/Profile';
import {PasswordRecovery} from './components/auth/PasswordRecovery';
import {PasswordReset} from './components/auth/PasswordReset';

function App() {
    return (
        <div className="App">
            <Link to='/' > Главная </Link>
            <Link to='/login' > Вход </Link>
            <Link to='/signup' > Регистрация </Link>
            <Link to='/profile' > Профиль </Link>
            <Link to='/404' > 404 </Link>
            <Link to='/password_recovery' > Восстановление пароля </Link>
            <Link to='/password_reset' > Смена пароля </Link>
            <Link to='/test' > SuperComponents </Link>

            <Routes>
                <Route path='/' element={<h1>Anki Cards</h1>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/password_recovery' element={<PasswordRecovery />} />
                <Route path='/password_reset' element={<PasswordReset />} />
                <Route path='/test' element={<SuperComponent />} />
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </div>
    );
}

export default App;