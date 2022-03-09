import React from 'react'
import './About.css'

export default function About() {
    return (
        <div>
            <div className="about-section">

                <h1>About Us Page</h1>
                <p>Welcome to Delicious Food Blog, your number one source for all delicious food such as chinese, domestic,
                    breakfast, lunch.<br /> <br /> We're dedicated to giving you the very best with a focus on dependability,
                    customer service and uniqueness.<br /> <br />
                    Founded in 2021 by Shoaib Ahmed, Delicious Food Blog has come a long way from its beginnings in Karachi.
                    <br /> <br />
                    We hope you enjoy our dishes as much as we enjoy offering them to you.<br /> <br /> If you have any
                    questions
                    or comments, please don't hesitate to contact us.
                </p>
            </div>

            <br />
            <br />
            <hr />

            <div className="row mb-2 mt-3">
                <div className="text-center mb-3">
                    <h1>Our Team</h1>
                    <hr />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={require('../images/team1.png').default} alt="Jane" style={{ width: '100%' }} />
                            <div class="container">
                                <h2>Jane Doe</h2>
                                <p class="title">Co-Founder</p>
                                <p>I work as a COO in this company.</p>
                                <p>jane @abc.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={require('../images/team2.png').default} alt="Mike" style={{ width: '100%' }} />
                            <div class="container">
                                <h2>Mike Ross</h2>
                                <p class="title">Co-Founder</p>
                                <p>I work as a COO in this company.</p>
                                <p>mike @abc.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={require('../images/team3.png').default} alt="John" style={{ width: '100%' }} />
                            <div class="container">
                                <h2>John Doe</h2>
                                <p class="title">Co-Founder</p>
                                <p>I work as a COO in this company.</p>
                                <p>john @abc.com</p>
                                <p><button class="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
