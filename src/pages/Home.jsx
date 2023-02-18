import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/Section/Section';

const Home = () => {
    const education=[
        'For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself',
        'For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself',
        'For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself'
    ]
    const experiences=[
        'For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself','For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself','For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself','For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself','For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself','For all the tiem s that you rian my parade all the clubs.you get in using my names.If you like the way you look that much you should go and love yourself'
    ]
    return (
        <div>
            <Layout>
             <Section items={education} tittle="Education Section"></Section>
             <Section items={experiences} tittle="Experiences Section"></Section>
             
            </Layout>
        </div>
    );
};

export default Home;