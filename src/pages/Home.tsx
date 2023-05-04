import React from "react";
import Footer from "../components/Footer";

import "../CSS/home.css";

function Home(): JSX.Element {
    const typeWords: string[] = ["Web Developer", "Chess Enthusiast", "Roblox Player", "Student"];
    const skills: string[] = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "Python", "C", "Java", "Chess"];
    const chessUsername: string = "Haneesh000";

    const [displayWord, setDisplayWord] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [chessProfile, setChessProfile] = React.useState<any>({});
    const [winPercentage, setWinPercentage] = React.useState("N/A");

    const [brBottomNone, setBrBottomNone] = React.useState(false);

    function delay(time: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    React.useEffect(() => {
        const d = new Date();
        const y = d.getFullYear();
        setAge(y - 2009);

        let wordIndex = 0;
        let letterIndex = 0;
        let waitCount = 0;

        setInterval(() => {
            if(wordIndex === typeWords.length - 1 && letterIndex === typeWords[wordIndex].length) {
                if(waitCount === 8) {
                    wordIndex = 0;
                    letterIndex = 0;
                    waitCount = 0;
                } else {
                    waitCount = waitCount + 1;
                }
            } else if(letterIndex === typeWords[wordIndex].length) {
                if(waitCount === 8) {
                    wordIndex = wordIndex + 1;
                    letterIndex = 0;
                    waitCount = 0;
                } else {
                    waitCount = waitCount + 1;
                }
            } else {
                letterIndex = letterIndex + 1;
            }
            const word = typeWords[wordIndex].slice(0, letterIndex);
            setDisplayWord(word);
        }, 150);

        fetch(`https://api.chess.com/pub/player/${chessUsername}/stats`)
            .then(res => res.json())
            .then(res => {
                setChessProfile(res);
                const winPercent = String((res["chess_rapid"].record.win / (res["chess_rapid"].record.win + res["chess_rapid"].record.loss + res["chess_rapid"].record.draw)) * 100);
                setWinPercentage(winPercent.slice(0, winPercent.indexOf(".") + 3));
            })

        if(window.innerWidth < 635) {
            setBrBottomNone(true);
        }
    }, []);

    return <div className="home">
        <div className="heading section-gray block-divider" style={{paddingBottom: "3rem"}}>
            <div className="block-left">
                <img src="/Profile.jpg" alt="Haneesh" className="profile-photo" draggable={false} onContextMenu={e => e.preventDefault()} />
            </div>
            <div className="block-right" style={{ bottom: brBottomNone ? "0" : "3rem" }}>
                Hi! I'm Haneesh.
                <div className="sub-heading">
                    I'm a <span className="type-area">{displayWord}</span><span className="type-cursor blink">|</span>
                </div>
            </div>
        </div>
        <div className="home-content">
            <div className="section about-me">
                <div className="title">About Me</div>
                <div className="content">
                    I'm a {age}-year-old student from India.
                    {
                        age <= 15 ?
                            <span>I'm currently studying in a high school in India. I'm currently in grade {age - 5}.</span>
                            : ""
                    } I am interested in learning and exploring new things. I am a web developer and I am currently
                    learning TypeScript. I am also a chess enthusiast and I love  playing chess. I am also a big fan of
                    the Harry Potter series. My skills include
                    {
                        skills.map((skill, index) => {
                            let content = "";
                            if(index === skills.length - 2) {
                                content = skill + " and";
                            } else if(index < skills.length - 2) {
                                content = skill + ",";
                            } else {
                                content = skill;
                            }

                            return <span key={index}> {content}</span>
                        })
                    }.
                </div>
            </div>
            <hr/>
            <div className="section chess-stats">
                <div className="title">My Chess Stats</div>
                <div className="content">
                    My username in <a href="https://chess.com" target="_blank" rel="noreferrer">Chess.com</a>
                    {" "} is <a href={"https://chess.com/member/"+chessUsername} target="_blank" rel="noreferrer">{chessUsername}</a>
                    . I won {winPercentage}% of my games. Here are my stats:
                    <br/>
                    <br/>
                    <div className="stats">
                        <div className="rapid-stats">
                            <div className="subTitle">Rapid Mode Game</div>
                            <div className="content">
                                My Current Rating: {chessProfile["chess_rapid"] ? chessProfile["chess_rapid"].last.rating : "N/A"}
                                <br/>
                                My Best Rating: {chessProfile["chess_rapid"] ? chessProfile["chess_rapid"].best.rating : "N/A"}
                                <br/>
                                I won {chessProfile["chess_rapid"] ? chessProfile["chess_rapid"].record.win : "N/A"} games,
                                lost {chessProfile["chess_rapid"] ? chessProfile["chess_rapid"].record.loss : "N/A"} games
                                and {chessProfile["chess_rapid"] ? chessProfile["chess_rapid"].record.draw : "N/A"} of my
                                games were draw in Rapid.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="section programming-stats">
                <div className="title">My Programming Stats</div>
                <div className="content">
                    I have been programming since 2020. I have learnt many programming languages and frameworks. I have
                    also made many projects. Here are my stats:
                    <div className="stats">
                        <div className="programming-stats">
                            <div className="stat-label">JavaScript: </div>
                            <div className="stat-expansion">
                                <div className="js"></div>
                            </div>
                        </div>
                        <div className="programming-stats">
                            <div className="stat-label">HTML: </div>
                            <div className="stat-expansion">
                                <div className="html"></div>
                            </div>
                        </div>
                        <div className="programming-stats">
                            <div className="stat-label">CSS: </div>
                            <div className="stat-expansion">
                                <div className="css"></div>
                            </div>
                        </div>
                        <div className="programming-stats">
                            <div className="stat-label">Python: </div>
                            <div className="stat-expansion">
                                <div className="python"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="section frameworks-info">
                <div className="title">Frameworks I'm good at</div>
                <div className="content">
                    As we all know, we all live in a Hi-Tech world. To make our work easier, we use frameworks.
                    I have learnt many frameworks. Here are the frameworks I'm good at:
                    <div className="stats content">
                        <ol>
                            <li><a href="https://react.dev" target="_blank" rel="noreferrer">ReactJS</a></li>
                            <li><a href="https://nodejs.org" target="_blank" rel="noreferrer">NodeJS</a></li>
                            <li><a href="https://expressjs.com" target="_blank" rel="noreferrer">ExpressJS</a></li>
                            <li><a href="https://firebase.google.com" target="_blank" rel="noreferrer">Firebase - by Google</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Home;
