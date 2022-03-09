import React from 'react'

import './Contact.css'


export default function Contact() {
    return (
        <div>
            <br />
            <hr />
            <div className="row mb-2 mt-3">
                <div className="text-center mb-3">
                    <h1>Contact Us Page</h1>
                    <hr />
                </div>
            </div>

            <div className="container">
                <form>

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Pakistan</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="canada">England</option>
                        <option value="usa">Australia</option>
                        <option value="canada">New Zealand</option>
                        <option value="usa">India</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>

            <br />
            <br />
            <br />

        </div>
    )
}
