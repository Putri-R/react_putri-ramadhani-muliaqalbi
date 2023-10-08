import aboutUsImage from './asset/about-us.png'

export default function AboutUs(){
    return(
        <>
        <div className="aboutus-group">
            <div className="aboutus-description">
                <h3>ABOUT US</h3>
                <p>Wear.it is one of the best clothing and shoe stores you can visit. We always strive to provide the best service with the best products. Visit our store or feel free to shop online through this website and enjoy the benefits we provide. Get ready to look stunning with new colors and styles with us.
                    <br></br><br></br>Wear.it always strives to provide the most convenient service and the best products. Please visit our social media or visit our store directly to see the various products available. We will always provide various types of your needs, both from seasonal clothing types, to those that are trending.
                </p>
            </div>
            <div className="aboutus-img">
                <img src={aboutUsImage} alt="" />
            </div>
        </div>
        </>
    )
}