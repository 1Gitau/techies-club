import Title from "../Title/title";
import './testmonies.css';
import Carousel from 'react-elastic-carousel';
import testimoniesData from "../../data/testimoniesData";

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
                <Carousel enableAutoPlay={true}>
                {testimoniesData.map((testimony, index) =>(
                        <Testmoniescard
                        key={index}
                        AlumniAvata={testimony.AlumniAvata}
                        AlumniName={testimony.AlumniName}
                        Title={testimony.Title}
                        Text={testimony.Text}
                        />
                    ))
                }
                </Carousel>
            </div>

        </section>
    )
}
export default Testmonies;