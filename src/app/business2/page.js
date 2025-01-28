const users = [
    {
        name: "Jack",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Jack@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    }
]
function Card() {
    return (
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <div id="card1" style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                    <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                    <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                    <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                </svg>


                <div>
                    <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>{users.lastName}</p>
                    <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>{users.name}</p>
                    <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px"}}>{users.mergejil}</p>
                </div>
                <div>
                    <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>97698181857</p>
                    <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                    </svg>

                    <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>ider@gmail.com</p>
                    <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Tokyo</p>
                    <img style={{ position: "absolute", top: "10%", right: "13%", width: "50px", height: "30px" }} src="./images (4).png"></img>
                    <img style={{ position: "absolute", top: "60%", right: "15%", backgroundColor: "white"}} src="./Cells.svg"></img>


                </div>
                <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
            </div>
        </div>
    )
}
export default function Home() {
    const array = [];

    for (let i = 0; i < 18; i++) {
        array.push(<Card user={users[i]}></Card>)
    }
    return (
        <div>
            {array}
        </div>
    );
}
