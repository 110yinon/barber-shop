import React from 'react'
import aboutPic from '../assets/about.png'

const About = () => {
    return (
        <div className="about grid">
            <h2 className="title">נעים להכיר - יוסי יקיר</h2>
            <img src={aboutPic} alt="about-pic" className="about-pic" />
            <p className="about-context">
                עם ותק של מעל 10 שנים בתחום<br />
                המומחיות שלי היא עיצוב זקנים<br />
                ותספורות לגברים<br />
                <br />
                תספורות ילדים עם חוברות צביעה<br />
                וקיר צילום צבעוני<br />
                <br />
                כל מה שאתם צריכים לעשות הוא<br />
                לקפוץ לביקור ולהתחיל להתפנק
            </p>
        </div>
    );
}
export default About;