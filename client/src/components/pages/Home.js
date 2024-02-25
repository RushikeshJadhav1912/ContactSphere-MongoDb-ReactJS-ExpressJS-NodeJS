import React from "react";

function Home() {
    const link = "";
    const target = "_blank";

    return (
        <div className="home-container">
            <h1>MERN Stack CRUD</h1>
            <p>
                <b>Front-end</b>: React.js v17+ with RRDv6+
            </p>
            <p>
                <b>Back-end</b>: Node.js, Express.js
            </p>
            <p>
                <b>Database</b>: MongoDB Atlas with Mongoose ODM
            </p>
            <p>
                <b>Developed By</b>: Rushikesh Jadhav
                <p>
                    <a href={link} target={target}>
                        
                    </a>
                </p>
            </p>
            <style jsx>{`
                .home-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }

                a {
                    color: #007bff;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}

export default Home;
