import React from 'react';
//import './App.css';
import './css/icon-font.css';
import './sass/main.scss';
import logo from './img/logo-white.png'
import fullLogo from './img/logo-green-2x.png';
import nat1 from './img/nat-1-large.jpg';
import nat2 from './img/nat-2-large.jpg';
import nat3 from './img/nat-3-large.jpg';
import nat8 from './img/nat-8.jpg';
import nat9 from './img/nat-9.jpg';
import vid from './img/video.mp4';
import vidweb from './img/video.webm';

function App() {
    return (
        <>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#" className="navigation__link">About Natous</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Your benefits</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
                    </ul>
                </nav>

            </div>

            <div className="header">

                <div className="header__logo-box">
                    <img src={logo} alt="Logo" class="header__logo"/>
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>
                    <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
                </div>

            </div>

            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people!
                    </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consectetur dolor inventore minima, sapiente sit soluta ullam veritatis voluptas voluptatem.
                                Consectetur debitis eius, eligendi enim eveniet excepturi nulla quod repellendus? Illo.</p>

                            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like never before</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta dolore eos explicabo itaque minima nisi quaerat, ratione reprehenderit sequi temporibus ut veritatis voluptate. Amet at dolorem non sunt ullam.</p>
                            <a href="#" className="btn-text">Learn more &rarr; </a>
                        </div>

                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src={nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                                <img src={nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                                <img src={nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-features">


                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <span className="feature-box__icon lnr lnr-leaf" />
                                <h3 className="heading-tertiary">Explore the nature</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugit odio, quo suscipit tempore voluptas.
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <span className="feature-box__icon lnr lnr-leaf" />
                                <h3 className="heading-tertiary">Explore the nature</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugit odio, quo suscipit tempore voluptas.
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <span className="feature-box__icon lnr lnr-leaf" />
                                <h3 className="heading-tertiary">Explore the nature</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugit odio, quo suscipit tempore voluptas.
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <span className="feature-box__icon lnr lnr-leaf" />
                                <h3 className="heading-tertiary">Explore the nature</h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugit odio, quo suscipit tempore voluptas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Top rated tours
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">The sea explorer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 3 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Difficulty: easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">299$</p>

                                            <a href="#" className="btn btn--white">Book now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">The forest hiker</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 day tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">499$</p>

                                            <a href="#" className="btn btn--white">Book now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">The sea explorer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">899$</p>

                                            <a href="#" className="btn btn--white">Book now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="u-center-text u-margin-bottom-big">
                        <a href="" className="btn btn--green">Discover all tours</a>
                    </div>
                </section>

                <section className="section-stories">
                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay={true} muted loop>
                            <source src={vid} type="video/mp4" />
                            <source src={vidweb} type="video/webm"/>
                            Your browser is not supported!
                        </video>
                    </div>

                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>

                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img className="story__img" src={nat8} alt="Person on a tour"/>
                                    <figcaption className="story__caption">
                                        Mary Smith
                                    </figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary">I had the best week ever with my family</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam deserunt, officiis perferendis quod recusandae!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi impedit incidunt ipsa ipsam nulla officiis quod sint unde, voluptate. Architecto assumenda beatae deleniti in minus nisi obcaecati rem reprehenderit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img className="story__img" src={nat9} alt="Person on a tour"/>
                                    <figcaption className="story__caption">
                                        Jack Wilson
                                    </figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary">WOW my life is completely different now!</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam deserunt, officiis perferendis quod recusandae!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi impedit incidunt ipsa ipsam nulla officiis quod sint unde, voluptate. Architecto assumenda beatae deleniti in minus nisi obcaecati rem reprehenderit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <u-center-text className="u-margin-top-huge"><a href="#" className="btn-text">Read all stories &rarr;</a>
                        </u-center-text>
                    </div>
                </section>

                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form action="#" className="form">
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">Start booking now</h2>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Full name" id="name" required/>
                                        <label htmlFor="name" className="form__label">Full name</label>
                                    </div>
                                    <div className="form__group">
                                        <input className="form__input" type="email" placeholder="Email address" id="email" required/>
                                        <label htmlFor="email" className="form__label">Email address</label>
                                    </div>
                                    <div className="form__group u-margin-bottom-big">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="small" name="size"/>
                                            <label htmlFor="small" class="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Small tour group
                                            </label>
                                        </div>
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="large" name="size"/>
                                            <label htmlFor="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Large tour group
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <button className="btn btn--green">Next step &rarr;</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <footer className="footer">
                <div className="footer__logo-box"><img src={fullLogo} alt="Full logo" class="footer__logo"/></div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Company</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Contact us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Careers</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Privacy policy</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                            <p className="footer__copyright">
                                Built as part of the coursework from lectures by Jonas Schmedtmann. For his online courses on <a href="#" className="footer__link"> advanced css techniques.  </a>
                            </p>
                    </div>
                </div>
            </footer>

            {/*

            <section className="grid-test">
                <div className="row">
                    <div className="col-1-of-2">
                    col 1 of 2
                </div>
                    <div className="col-1-of-2">
                        col 1 of 2
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                       col 1 of 3
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-2-of-3">
                        col 2 of 3
                    </div>

                </div>
                <div className="row">
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                </div>

                    <div className="row">
                        <div className="col-1-of-4">
                            col 1 of 4
                        </div>
                        <div className="col-1-of-4">
                            col 1 of 4
                        </div>
                        <div className="col-2-of-4">
                            col 2 of 4
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1-of-4">
                            col 1 of 4
                        </div>
                        <div className="col-3-of-4">
                            col 3 of 4
                        </div>
                    </div>
            </section>
            */}

        </>
    );
}

export default App;
