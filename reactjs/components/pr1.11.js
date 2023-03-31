import React from 'react';
import { useState } from "react";
function About() {
    
    const [donationAmount, setDonationAmount] = useState(0);

    const handleDonation = (event) => {
        setDonationAmount(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Thank you for donating ${donationAmount} dollars!`);
      }
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <br></br><br></br>
            <center>
            <h1>GEMS CHARITY</h1>
            </center>
            <div>
            <img src="https://megaincomestream.com/wp-content/uploads/2022/08/Fundraising.jpg" alt="Example Image" width={1300} height={400}></img>
            </div>
            <h1>Building a better world for and with children</h1>
            <h3>Charity Name was founded in 2020 with the goal of helping people in need. We believe that everyone deserves a chance to live a happy and healthy life.</h3>
            <center>
            <img src="afg2.jpg" alt="Example Image" width={530} height={300}></img>
            </center>
            <h1>Donate to Charity Name</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="donation-amount">Donation Amount:</label>
                <input type="number" id="donation-amount" value={donationAmount} onChange={handleDonation} />
                <button type="submit">Donate</button>
            </form>
            <footer>
                <p>&copy; 2023 Reliance</p>
            </footer>
        </main>
    );
}

export default About;
