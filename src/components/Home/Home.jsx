import React from 'react'
import './home.css'

function Home() {
    return (
        <section className="Main">
            <div className="Describe">
                <h2 className='Describe--Text'>
                    Hello! De - Sheng Chen, study in{" "}
                    <span style={{
                        background: "linear-gradient(45deg, #08AEEA 0%, #2AF598 100%)",
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>NYUST</span>, a{" "}
                    <span style={{
                        background: "-webkit-linear-gradient(225deg, #FAD961 0%, #F76B1C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",         
                    }}>Designer</span> and{" "}
                    <span style={{
                        background: "-webkit-linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>Developer </span>
                    here.
                </h2>
                <p className='Inline--Text'>
                    Passionate in Frontend Dev and UI/UX Design. Likes to build fast-performance and well-designed website interfaces using the latest technologies.
                </p>

                <button className="Btn Btn-primary">Download CV</button>
            </div>
            <div className="Profile--Image">
                <div className='Image' src="https://scontent.frmq2-2.fna.fbcdn.net/v/t1.6435-9/123136908_170188244732123_1634315602398268329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TxHMC2FC6W0AX_q2ct3&tn=wfIykJdd3abDQbvB&_nc_ht=scontent.frmq2-2.fna&oh=00_AfBBuvdKMNaHJjteVVpYfy0INWqvecoE4O-u3aI52t18qA&oe=63927A51" border="0" />
            </div>
        </section>
    )
}

export default Home