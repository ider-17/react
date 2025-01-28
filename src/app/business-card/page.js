import Image from "next/image";

export default function Home() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <div id="card1" style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                    <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                    <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                    <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                </svg>


                <div>
                    <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                    <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                    <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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
                    <img style={{ position: "absolute", top: "10%", right: "13%", width: "50px", height: "30px"}} src="./HP-logo+2021.jpg"></img>
                    <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                        <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                    </svg>


                </div>
                <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
            </div>


            {/* 2 */}

            <div id="card2" style={{ position: "relative", top: "30%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>John</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Chingun</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>97682928274</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Chingun@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Tokyo</p>
                        <img style={{ position: "absolute", top: "10%", right: "13%", width: "50px", height: "30px"}} src="./_89663605_instagram_logo_976.jpg"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "70%", fontSize: "14px", color: "white" }}>Instagram</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 3 */}

            <div id="card3" style={{ position: "relative", top: "50%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Doe</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ursa</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9768237382</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Ursa@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>China</p>
                        <img style={{ position: "absolute", top: "10%", right: "13%", width: "50px", height: "30px"}} src="./8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "72%", fontSize: "14px", color: "white" }}>Microsoft</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 4 */}

            <div id="card4" style={{ position: "relative", top: "70%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Mike</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Jack</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>97692937327</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Jack@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px"}}>Dubai</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "50px", height: "40px", backgroundColor: "white" }} src="./facebook-icon-preview-1.png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "70%", fontSize: "14px", color: "white" }}>Facebook</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 5 */}

            <div id="card5" style={{ position: "relative", top: "90%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Sub-Zero</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Narangerel</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9768290371</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Narangerel@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Malasia</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "50px", height: "40px", backgroundColor: "white" }} src="./images (1).jpeg"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "74%", fontSize: "14px", color: "white" }}>Intel</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 6 */}

            <div id="card6" style={{ position: "relative", top: "110%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Scorpion</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Aygul</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>976782378</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Aygul@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>India</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "50px", height: "40px", backgroundColor: "white" }} src="./images (1).png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "72%", fontSize: "14px", color: "white" }}>Adidas</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 7 */}

            <div id="card7" style={{ position: "relative", top: "130%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Kitana</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Itgel</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9768273987</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Itgel@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>France</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "50px", height: "40px", backgroundColor: "white" }} src="./images (3).png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "74%", fontSize: "14px", color: "white" }}>Puma</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 8 */}

            <div id="card8" style={{ position: "relative", top: "150%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Lui Keng</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Telmuun</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9769237981</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Telmuun@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Italy</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "50px", height: "40px", backgroundColor: "white" }} src="./images (4).png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "74%", fontSize: "14px", color: "white" }}>Tesla</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 9 */}

            <div id="card9" style={{ position: "relative", top: "170%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Zlatan</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Jamyan</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9769237986</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Jamyan@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Germany</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "60px", height: "40px", backgroundColor: "white" }} src="./images.jpeg"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "74%", fontSize: "14px", color: "white" }}>Pepsi</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>

            {/* 10 */}

            <div id="card10" style={{ position: "relative", top: "190%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Cristiano</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Chinguun</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9760971311</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Chinguun@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>North-Korea</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "60px", height: "40px", backgroundColor: "white" }} src="./images.png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "71%", fontSize: "14px", color: "white" }}>USA Tel</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 11 */}

            <div id="card11" style={{ position: "relative", top: "210%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Lionel</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Baljan</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9769187323</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Baljan@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Canada</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "60px", height: "40px", backgroundColor: "white" }} src="./Reebok-Logo.png"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "71%", fontSize: "14px", color: "white" }}>Reebok</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 12 */}

            <div id="card12" style={{ position: "relative", top: "230%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Bold</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Nomin-erdene</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                    </div>
                    <div>
                        <svg style={{ position: "absolute", top: "60%", left: "11%" }} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>9769982731</p>
                        <svg style={{ position: "absolute", top: "71.5%", left: "11%" }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                            <path d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234" stroke="black" stroke-width="0.833333" stroke-linecap="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>Nomin-erdene@gmail.com</p>
                        <svg style={{ position: "absolute", top: "81%", left: "11%" }} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z" stroke="black" stroke-width="0.8375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Cuba</p>
                        <img style={{ position: "absolute", top: "5%", right: "13%", width: "60px", height: "40px", backgroundColor: "white" }} src="./unnamed.jpg"></img>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "71%", fontSize: "14px", color: "white" }}>Youtube</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 13 */}

            <div id="card13" style={{ position: "relative", top: "250%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>

            {/* 14 */}

            <div id="card14" style={{ position: "relative", top: "270%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>

            {/* 15 */}

            <div id="card15" style={{ position: "relative", top: "290%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 16 */}

            <div id="card16" style={{ position: "relative", top: "310%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 17 */}

            <div id="card17" style={{ position: "relative", top: "330%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>


            {/* 18 */}

            <div id="card18" style={{ position: "relative", top: "350%" }}>

                <div style={{ backgroundColor: "white", width: "350px", height: "193px", borderRadius: "22px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                    <svg style={{ position: "absolute", top: "0", right: "0", borderRadius: "0px 21px 21px 0px" }} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                        <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                        <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                        <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                    </svg>


                    <div>
                        <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                        <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                        <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
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

                        <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>Your address goes here <br /> 125
                            Street, USA</p>
                        <svg style={{ position: "absolute", top: "10%", left: "73%", fontSize: "11px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03469 28.3478C-6.37137 26.681 -0.29016 -4.15265 18.359 6.26444C12.6827 3.76429 -3.53354 17.5143 9.03469 28.3478Z" fill="#0071BC" />
                            <path d="M22.2395 18.5713H29.1893C28.0091 23.9113 24.5328 26.278 22.9344 27.1427C15.5076 30.5462 8.33981 26.1027 8.33984 21.2322C15.0749 28.2152 20.2076 22.5615 22.2395 18.5713Z" fill="#F7931E" />
                            <path d="M29.1896 12.8578C27.8923 -4.14221 14.3247 -0.614436 7.7031 3.27445C19.3788 0.607734 22.2977 8.55219 22.2977 12.8578C24.7301 12.9967 29.5139 13.1912 29.1896 12.8578Z" fill="#7A5491" />
                        </svg>
                        <svg style={{ position: "absolute", top: "65%", left: "73%", fontSize: "11px", backgroundColor: "white" }} width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.382812" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="0.382812" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="1.87207" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="3.36133" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="4.85059" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="6.33984" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="7.8291" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="9.31934" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="10.8086" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="12.2979" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="13.7871" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="15.2764" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="16.7656" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="18.2549" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="19.7441" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="21.2344" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="10.8086" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="22.7236" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="24.2129" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="25.7021" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="27.1914" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="28.6807" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="24.2129" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="30.1699" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="31.6592" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="13.7871" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="16.7656" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="33.1484" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="15.2764" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="22.7236" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="25.7021" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="27.1914" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="34.6377" width="1.48936" height="1.48936" fill="black" />
                            <rect x="0.382812" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="1.87207" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="3.36133" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="4.85059" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="6.33984" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="7.83008" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="9.31934" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="12.2979" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="18.2549" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="19.7441" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="21.2334" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="28.6807" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="30.1699" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="31.6592" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="33.1484" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="34.6377" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                            <rect x="36.1279" y="36.1279" width="1.48936" height="1.48936" fill="black" />
                        </svg>


                    </div>
                    <p style={{ position: "absolute", top: "30%", left: "64%", fontSize: "14px", color: "white" }}>Company Name</p>
                    <p style={{ position: "absolute", top: "40%", left: "70%", fontSize: "7px", color: "white" }}>Tag Line Goes Here</p>
                </div>
            </div>
        </div>
    );
}
