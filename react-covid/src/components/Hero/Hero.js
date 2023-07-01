import StyledHero from "./Hero.styled";
import img from "../../asset/img/hero_img.png"

const Hero = () => {
    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>COVID  ID</h2>
                    <p className="hero__genre">
                        Monitoring Perkembangan Covid
                    </p>
                    <p className="hero__desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit tenetur tempora dolor commodi omnis, repellendus in natus dolore, doloremque minima ad quasi, nulla libero perferendis aperiam sit reiciendis! Suscipit, tenetur.
                    </p>
                  <button>Vaccine</button>
                </div>
                <div className="hero__right">
                    <img
                        src={img} 
                        alt="ImageCovid" 
                    />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;