import "./about.css"
import about from "../../assets/about.jpg";
import Title from "../Title/title";
function About(){
    return(
        <section className="about-us">
            <Title mainTitle="about us" subTitle="know us more"  />
        <div className="about-container">
            <div className="about-text">
               
                <p>Makers and University Technology Club (MUTC) is a community of passionate students and innovators dedicated to advancing technological learning and fostering innovation. Our club offers members the opportunity to engage in hands-on projects, workshops, and collaborations, all with the goal of nurturing creativity and technical skills.</p>
            </div>
            <div className="about-image">
                <img src={about} alt="MUTC Club Image"/>
            </div>
        </div>

        <div className="about-details">
            <div className="detail-item">
                <h2>Our Mission</h2>
                <p>Our mission is to inspire and empower students to explore and innovate through technology, fostering an environment where learning is driven by curiosity and creativity.</p>
            </div>
            <div className="detail-item">
                <h2>Our Values</h2>
                <ul>
                <li>Innovation</li>
                    <li>Collaboration</li>
                    <li>Continuous Learning</li>
                    <li>Integrity</li>
                    <li>Inclusivity</li>
                </ul>
            </div>
            <div className="detail-item">
                <h2>Our Objectives</h2>
                <ul>
                    <li>Provide members with hands-on experiences through projects and workshops.</li>
                    <li>Facilitate collaboration with industry professionals and tech leaders.</li>
                    <li>Create an inclusive environment that encourages exploration and learning.</li>
                    <li>Foster a strong community of tech enthusiasts and innovators.</li>
                </ul>
            </div>
            <div className="detail-item">
                <h2>visions</h2>
                <ul>
                <li>Innovation</li>
                    <li>Collaboration</li>
                    <li>Continuous Learning</li>
                    <li>Integrity</li>
                    <li>Inclusivity</li>
                </ul>
            </div>
            
        </div>
    </section>
    )
}
export default About;