import Image from "next/image";

export default function Home() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <div style={{ backgroundColor: "white", width: "350px", height: "200px", borderRadius: "20px", border: "1px solid", position: "absolute", top: "10%", left: "15%" }}>
                <div>
                    <p style={{ position: "absolute", top: "20%", left: "10%", color: "#0171bd" }}>Ariunaa</p>
                    <p style={{ position: "absolute", top: "30%", left: "10%", color: "#f7931f" }}>Ider</p>
                    <p style={{ position: "absolute", top: "40%", left: "10%", fontSize: "10px" }}>Developer</p>
                </div>
                <div>
                    <p style={{position: "absolute", top: "60%", left: "15%", fontSize: "11px"}}>97698181857</p>
                    <p style={{position: "absolute", top: "70%", left: "15%", fontSize: "11px"}}>ider@gmail.com</p>
                    <p style={{position: "absolute", top: "80%", left: "15%", fontSize: "11px"}}>Your address goes here <br/> 125 
                    Street, USA</p>
                </div>
                <p style={{position: "absolute", top: "30%", left: "64%", fontSize: "14px"}}>Company Name</p>
                <p style={{position: "absolute", top: "40%", left: "70%", fontSize: "7px"}}>Tag Line Goes Here</p>
            </div>
        </div>
    );
}