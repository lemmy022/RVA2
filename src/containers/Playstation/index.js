import React from "react";



const Playstation = () => {
    return(
<>

        <article/> 

            <section class="bela-sekcija">

                <img class="mamelogo" src={"./images/ps.png"}/><br/>
                The PlayStation is a series of video game consoles created and developed by Sony Computer Entertainment
                <br/>with consoles in the fifth to eighth generations. The brand was first introduced on December 3, 1994 in
                <br/>Japan with the launch of the original PlayStation console. It now consists of a total of four core
                <br/>home consoles, as well as a media center, an online service, a line of controllers, two handhelds
                <br/>and a phone, as well as multiple magazines.
            </section>

            <section class="bela-sekcija">
                <h2>Instructions</h2>
                
                Using a PS1 emulator you can play Sony PlayStation games without actually buying
                <br/> the console or the games. PS1 emulator is typically a software application
                <br/>that uses the PlayStation program on a desktop or laptop which enables you to
                <br/>play the games as you would have played on PlayStation 1. The only difference would
                <br/>be that instead of using the joysticks and gamepads, you would be using the keyboards
                <br/> and keypads to play the game.
                <br/>
                <a class="ctabutton" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Get PlayStation Emulator</a>


            </section>
            <section class="bela-sekcija">

                <div class="two-emulator-grid">
                    <div class="two-grid-column"> <img class="ss1" src="./images/crash.jpg"/></div>
                    <div class="two-grid-column"><img class="ss2" src="./images/metal.jpg"/></div>
                    <div class="two-grid-column"><img class="ss3" src="./images/tekken3.jpg"/></div>
                    <div class="two-grid-column"><img class="ss5" src="./images/thps.jpg"/></div>
                </div>
            </section>
        <article/>
        </>
    );
};

export default Playstation;