import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import '../css/aboutus.css';

const About: FunctionComponent = () => {
    const creators = [
        {
            id: 1,
            name: 'Ulrich Zhan',
            image: './images/aboutus/Ulrich.png',
            description: 'Front End Developper, passionate about web development and new technologies.'
        },
        {
            id: 2,
            name: 'Joseph Renno',
            image: './images/aboutus/Joseph.png',
            description: 'Front End Developper, the best one.'
        },
        {
            id: 3,
            name: 'Marius Something',
            image: './images/aboutus/Marius.png',
            description: 'Back end developper, Postgres and MLD master.'
        },
        {
            id: 4,
            name: 'Arnaud Durand',
            image: './images/aboutus/Arnaud.png',
            description: 'Django developper, trying to learn it all.'
        },
        {
            id: 5,
            name: 'Ilyes Benanane',
            image: './images/aboutus/Elyes.png',
            description: 'Django developper, acts like the boss though.'
        }
    ];

    return (
        <div className='main-content'>
            <div className='row'>
                <h2 className='center-align'>About Us</h2>
                <div className='about-text col s12 m8 offset-m2'>
                    <p>Welcome to our application! We are a team passionate about audiovisual technology, dedicated to bringing you the best products and services.</p>
                    <p>Here's a little bit about each of us:</p>
                </div>
            </div>
            <div className="row creators-container">
                {creators.map((creator) => (
                    <div className="col s12 m6 l4" key={creator.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={creator.image} alt={creator.name} />
                                <span className="card-title">{creator.name}</span>
                            </div>
                            <div className="card-content">
                                <p>{creator.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='row'>
                <div className='col s12 center-align'>
                    <Link to="/" className="waves-effect waves-light btn">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default About;
