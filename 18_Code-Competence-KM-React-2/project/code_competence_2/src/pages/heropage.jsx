import './style.css';
import heroImage from './asset/heropage-img2.png'

export default function Heropage(){
    return(
        <>
            <section className="hero-page">
                <div className="hero-group1">
                    <p>40% off this September</p>
                    <h1>Dazzle with new colors and styles with us</h1>
                    <p className="desc">Take a look at our collection and choose your style</p>
                    <button type="button" className="shopnow-button">
                    Shop now
                    </button>
                </div>
                <div className="hero-group2">
                    <img src={heroImage} alt="" />
                </div>
            </section>
        </>
    )
}