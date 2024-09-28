import Title from "../Title/title";
import './testmonies.css';
import alumni1 from '../../assets/alumni1.jpg';

function Testmoniescard({AlumniAvata, AlumniName, Title, Text}){
    return(
        <div className="testmonies-card">
            <div className="testmonies-card-alumni-details">
                <img src={AlumniAvata} alt={AlumniName} />
                <h4 className="testmonies-card-alumni-name">{AlumniName}</h4>
            </div>
            <h4 className="tesmonies-title">{Title}</h4>
            <p className="testmonies-text">{Text}</p>
        </div>
    )
}
function Testmonies(){

    return(
        <section>
            <Title mainTitle="testmonies" subTitle="quotes from alumni"/>
            <div className="testmonies-container">
                <Testmoniescard
                AlumniAvata={alumni1}
                AlumniName="Grace Gitau"
                Title="cyber security analyst"
                Text="qwertyuiopasdasdfghjkwertyucvbasdfghasdfghasdfgsdfsdfgxcvsdfg"/>
            </div>

        </section>
    )
}
export default Testmonies;