import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Testmonies from "../../components/Testmonies/testmonies";

function HomePage(){
    return (
        <div>
            <Hero/>
            <About/>
            <Testmonies/>
        </div>
    );
}

export default HomePage;