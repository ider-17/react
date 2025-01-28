const users = [
    {
        name: "Jack",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Jack@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Ursa",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "99823872",
        mail: "Ursa@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Ider",
        lastName: "Ariunaa",
        mergejil: "developer",
        phoneNumber: "99817543",
        mail: "Ider@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Chingun",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "99137874",
        mail: "Chingun@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Naran-gerel",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "99126347",
        mail: "Naran-gerel@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Turuu",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "99017343",
        mail: "Turuu@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Aygul",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "98123478",
        mail: "Aygul@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Itgel",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Itgel@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Telmuum",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "91823894",
        mail: "Telmuun@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Jamyan",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "09178344",
        mail: "Jamyan@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Chinguun",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "91826348",
        mail: "Chinguun@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Baljan",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Baljan@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Nomii",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Nomii@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Huvitogoldor",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Huvitogoldor@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Tugsuu",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Tugsuu@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Arii",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Arii@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Baasan-dash",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Baasan-dash@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    },
    {
        name: "Oyunbat",
        lastName: "Medehgui",
        mergejil: "developer",
        phoneNumber: "9121872",
        mail: "Oyunbat@gmail.com",
        address: "UlaanBaatar",
        companyName: "Pinecone"
    }
]
function Card(props) {
    
    return (
        <div style={{width: "100%", height: "100vh", margin: "0"}}>

            <div style={{width: 350, height: 192, border: "solid 1px", borderRadius: 20, position: "relative", top: 20, left: 30}}>

            <svg style={{position: "absolute", top: 0, left: 190, borderRadius: "0 20px 20px 0"}} width="161" height="192" viewBox="0 0 161 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 192C29 138.5 13.8527 32.5 0.352661 0H4.35266C48.3527 80.8 22.686 161.667 4.35266 192H0Z" fill="#0071BC" />
                    <path d="M4 192C39.0609 116.4 18.9903 32.5 4.38162 0H8.71012C56.3236 80.8 28.5491 161.667 8.71012 192H4Z" fill="#F7931E" />
                    <path d="M8 192C47 110.5 23.5 38 8.38162 0H12.7101C60.3236 80.8 32.5491 161.667 12.7101 192H8Z" fill="#7A5491" />
                    <path d="M163 0H12C52 84.5 35.5 142 12 192H163V0Z" fill="#141717" />
                </svg>

                <p style={{position: "absolute", top: "10%", left: "10%", color: "#0171bd"}}>{props.user.lastName}</p>

                <p style={{position: "absolute", top: "20%", left: "10%", color: "#f7931f"}}>{props.user.name}</p>

                <p style={{ position: "absolute", top: "30%", left: "10%", fontSize: "10px" }}>{props.user.mergejil}</p>

                <p style={{ position: "absolute", top: "60%", left: "15%", fontSize: "11px" }}>{props.user.phoneNumber}</p>

                <p style={{ position: "absolute", top: "70%", left: "15%", fontSize: "11px" }}>{props.user.mail}</p>

                <p style={{ position: "absolute", top: "80%", left: "15%", fontSize: "11px" }}>{props.user.address}</p>

                <p style={{ position: "absolute", top: "40%", right: "5%", fontSize: "14px", color: "white" }}>{props.user.companyName}</p>

                </div>

        </div>
    )
}
export default function Home() {
    const card = [];

    for (let i = 0; i < users.length; i++) {
        card.push(<Card user={users[i]}></Card>)
    }
    return (
        <div>
            {card}
        </div>
    );
}
