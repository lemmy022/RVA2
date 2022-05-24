import React, { useState } from "react";

const Contact = () => {

    const [customer, setCustomer] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const formData = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return(
            <>
                <div className="bela-sekcija">
                    <p>
                        Welcome to Emulator Source, here you will find various emulators that will help you play games that you've played many years ago.
                        You will find a short introduction to every emulator and instructions how to use it.
                        All content on this web site is free. Enjoy! <br />
                    </p>
                </div>
                <div className="bela-sekcija">
                    <form>
                            <legend>If you wish to contact us for any given reason please fill in this form</legend>
                            <label htmlFor="name">First Name:</label>
                            <input id="name" type="text" placeholder="Insert Your First Name" onChange={(e) => setCustomer({...customer, name: e.target.value})}/> <br />
                            <label htmlFor="lastName">Last Name:</label>
                            <input id="lastName" type="text" placeholder="Insert Your Last Name" onChange={(e) => setCustomer({...customer, lastName: e.target.value})}/> <br />
                            <label htmlFor="eMail">E-mail:</label> <br />
                            <input id="eMail" type="email" placeholder="email@example.com" required onChange={(e) => setCustomer({...customer, eMail: e.target.value})}/> <br />
                            <label htmlFor="emulatorId">I am having an issue with the emulator</label> <br />
                            <input id="emulatorId" type="text" placeholder="Which emulator do you have an issue with?" onChange={(e) => setCustomer({...customer, emulatorId: e.target.value})}/> <br />
                            <label htmlFor="message">Your message:</label> <br />
                            <input id="message" type="text" placeholder="Write your message here" rows="4" cols="50" required onChange={(e) => setCustomer({...customer, message: e.target.value})}/>
                            
                            <input type="submit" onClick={formData}></input>
                    </form>
                </div>
                        {submitted && 
                            <div className="bela-sekcija">
                                <p>Your message has been sent containing the folloving data:</p>
                                <p>Name: {customer?.name} {customer?.lastName}</p>
                                <p>E-mail: {customer?.eMail}</p>
                                <p>Emulator: {customer?.emulatorId}</p>
                                <p>Message: {customer?.message}</p>
                            </div>
                        }
             </>
       

    );
};

export default Contact;