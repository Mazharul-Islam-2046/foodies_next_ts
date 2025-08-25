"use client";
import React from 'react';
import { Button } from '../ui/button';
import { logout } from '@/actions/auth';

const Logout = () => {
    return (
        <Button onClick={logout}>Logout</Button>
    );
};

export default Logout;