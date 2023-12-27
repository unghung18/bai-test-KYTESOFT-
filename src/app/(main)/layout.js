"use client"
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <>
                {children}
            </>
            <Footer />
        </>
    )
}

export default MainLayout