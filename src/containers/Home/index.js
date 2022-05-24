import React from "react";

const Home = () => {
    return (

<>

        <article>
            <section class="bela-sekcija">
            <p>
                Welcome to Emulator Source! Here, you will find various emulators that will help you play games that you've played many years ago.
                From Mame32, to Playstation and Playstation2, you can easily download an emulator and start playing your favorite childhood games on your PC.<br /><br />
                You will find a short introduction to every emulator that we have available and step-by-step instructions on how to download it and use it.<br /><br />
                All content on this web site is free to use for personal use. Enjoy!
            </p>
            </section>

            <section class="main">
            <h2 class="centriran-naslov">Our Best Emulators</h2>
            <div class="emulator-grid">
                <div class="grid-column">
                    <h3>Mame32</h3>
                    <img src="images/mame32-logo.webp" alt="mame32 logo" /><br />
                    <p>
                        The intent of this Multiple Arcade Machine Emulator is preservation; the ability to play games is considered a "side-effect." MAME supports thousands of classic arcade games. As of version 0.162 MAME absorbed its sister-project MESS (Multi Emulator Super System) which means it is also capable of playing games for classic game consoles. <br />
                    </p><br /> <a class="ctabutton" href="mame32.html">Get Mame32 Emulator</a>
                </div>
                <div class="grid-column">
                    <h3>Playstation</h3>
                    <img src="images/playstation-logo.webp" alt="Playstation logo" /><br />
                    <p>
                        The PlayStation (officially abbreviated as PS and commonly known as the PS1 or its codename PSX) is a home video game console developed and marketed by Sony Computer Entertainment. It was first released on 3 December 1994 in Japan, On September 2018, Sony unveiled the PlayStation Classic to mark the 24th anniversary of the original console. <br />
                    </p>
                    <br />
                    <a class="ctabutton" href="ps.html">Get Playstation Emulator</a>
                </div>
                <div class="grid-column">
                    <h3>Playstation 2</h3>
                    <img src="images/playstation-2-logo.webp" alt="Playstation2-logo" /><br />
                    <p>
                        PCSX2 is a free and open-source version of PlayStation 2 emulator. Its purpose is to emulate the PS2's hardware, using a combination of different MIPS CPU Interpreters, Recompilers and a Virtual Machine which manages hardware states and PS2 system memory.
                        The project has been running for almost 20 years for any PlayStation 2 game fanatic.
                    </p><br /><a class="ctabutton" href="ps.html">Get Playstation 2 Emulator</a>
                    <p id="PS2area"></p>
                </div>


            </div>
            </section>
            <section class="bela-sekcija">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" /></svg>

            <h2>What is an Emulator?</h2>

            <p>
                In computing, an emulator is hardware or software or both that duplicates (or emulates) the functions of one computer system (the guest) in another computer system (the host),different from the first one, so that the emulated behavior closely resembles the behavior of the real system (the guest).

                <br /><br /> This focus on exact reproduction of behavior is in contrast to some other forms of computer simulation,in which an abstract model of a system is being simulated. For example,a computer simulation of a hurricane or a chemical reaction is not emulation.
            </p>
            </section>
            <section class="tamna-pozadina">
                <h2>How to Install an Emulator?</h2>
                <div class="column-grid21">
                    <div class="grid-column22">
                        <p>
                            <h3>Microsoft Windows</h3><br />
                            You simply have to download the latest binary archive available from <a href="http://www.mamedev.org">mamedev.org</a> and to extract its content to a folder. You will end up with many files (below you will find explanations about some of these), and in particular mame.exe. This is a command line program. The installation procedure ends here. Easy, isn’t it?
                            <h3>Other Operating Systems</h3><br />
                            In this case, you can either look for pre-compiled (SDL)MAME binaries (e.g. in the repositories of your favorite Linux distro) which should simply extract all the needed files in a folder you choose, or compile the source code by yourself. In the latter case, see our section on compiling MAME.
                        </p>
                    </div>
                    <div class="grid-column21">

                        <img src="images/sonic1.png" alt="Sonic" />

                    </div>
                </div>
            </section>
            <section class="plava-sekcija">
                <h2 class="centriran-naslov">Contact Us</h2>
            <div class="column-grid21">
            <div class="grid-column22">
            <form>
                <fieldset>
                    <legend>If you wish to contact us for any given reason please fill in this form.</legend><br />
                    <span>First Name:</span><br />
                    <input type="text" placeholder="Insert Your First Name" /><br />
                    <span>Last Name:</span><br />
                    <input type="text" placeholder="Insert Your Last Name" /><br />
                    <span>E-mail:</span><br />
                    <input type="email" placeholder="email@example.com" required /><br />
                    <span>I am having an issue with the emulator</span><br />
                    <input list="emulator" placeholder="Select emulator type" />
                        <datalist id="emulator">
                        <option value="Mame32" />
                        <option value="Playstation" />
                        <option value="Playstation 2" />
                        <option value="None" />
                        </datalist><br />
                    <span>Your message:</span><br />
                    <textarea rows="4" cols="50" placeholder="Write your message here">
                    </textarea>
                </fieldset>
                <input type="submit"></input>
            </form></div>
                    
                    <div class="grid-column21">
                        <p>You can always find us at:</p>      
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.129736909811!2d-104.98170318350223!3d39.736736504634464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7ed37f6bc97b%3A0x527079d106a02b14!2sYour%20Mom&#39;s%20House!5e0!3m2!1sen!2srs!4v1649761682578!5m2!1sen!2srs" width="80%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div></div>
                
                </section>
        </article>
      </>  
    );
};

export default Home;