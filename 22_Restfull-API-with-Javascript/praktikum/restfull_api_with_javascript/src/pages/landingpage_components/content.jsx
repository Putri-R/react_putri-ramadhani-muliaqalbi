import Hero from './asset/hero-img.png.png';

export default function Content(){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Landing Page</title>

        {/* Body */}
        <div className="description">
            {/* Hero Page */}
            <div className="hero-group">
            <div className="description-group">
                {/* judul */}
                <h1>Better Solutions For Your Business</h1>
                {/* deskripsi judul */}
                <span>
                We are team of talented designers making websites with Bootstrap
                </span>
                {/* button pertama */}
                <div className="hero-btn">
                    {/* menambahkan href di button get started sehingga dapat berpindah halaman ke Create Account */}
                    <a className="get-started" type="button" href="/create-product">
                        Get Started
                    </a>
                    <a className="watch-video" type="button" href="">
                        Watch Video
                    </a>
                </div>
            </div>
            {/* gambar */}
            <div>
                <img src={Hero} alt="hero-img" />
            </div>
            </div>
            {/* join our newsletter */}
            <div className="join-us">
                <h1>Currency Converter System</h1>
                {/* input data */}
                <form className='landingpage-form'>
                    <div className="join-form">
                        <label htmlFor="join">
                            Tamen quem nulla quae legam multos aute sint culpa legam noster
                            magna
                        </label>
                        <div className="join-input">
                            {/* button submit */}
                            <a className="converter" type="button" href="/currency-converter">
                            Converter
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}