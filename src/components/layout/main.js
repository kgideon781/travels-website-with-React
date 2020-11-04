import React, {Component} from 'react';

import slider_1 from '../../img/resort1.jpg'
import slider_2 from '../../img/resort2.jpg'
import slider_3 from '../../img/resort3.jpg'
import M from "materialize-css"

class Main extends Component{
    render() {
        //Material Boxed
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb, {});

        const ss = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(ss, {});
        return (
            <div>

                {/*Section search*/}
                <section className={"section section-search teal darken-1 white-text center  scrollspy"}>

                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col s12"}>
                                <h3> Search Destination</h3>
                                <div className={"input-field"}>
                                    <input type={'text'} className={"white grey-text autocomplete"} id={"autocomplete-input"} placeholder={"Nairobi, Mombasa, etc..."} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section Icon Boxes*/}
                <section className={"section section-icons grey lighten-4 center scrollspy"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col s12 m4"}>
                                <div className={"card-panel"}>
                                    <i className={"material-icons large teal-text"}>
                                        room
                                    </i>
                                    <h4>Pick where</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda
                                        corporis deserunt dicta dolores,</p>
                                </div>
                            </div>
                            <div className={"col s12 m4"}>
                                <div className={"card-panel"}>
                                    <i className={"material-icons large teal-text"}>
                                        store
                                    </i>
                                    <h4>Travel shop</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda
                                        corporis deserunt dicta dolores,</p>
                                </div>
                            </div>
                            <div className={"col s12 m4"}>
                                <div className={"card-panel"}>
                                    <i className={"material-icons large teal-text"}>
                                        airplanemode_active
                                    </i>
                                    <h4>Fly Cheap</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda
                                        corporis deserunt dicta dolores,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*section popular places*/}
                <section>
                    <div id="popular" className={"section section-popular  scrollsp"}>

                        <div className="container">
                            <div className="row">
                                <h4 className={"center"}><span className={'teal-text'}>Popular Places</span> </h4>
                                <div className="col s12 m4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={slider_1} alt={""}/>
                                            <span className={"card-title"}>
                                                Mombasa
                                            </span>
                                            <div className="card-content">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Adipisci assumenda at dolor dolores eaque earum enim
                                                facere iusto maiores modi neque odio odit quidem quod reiciendis rem,
                                                sit veniam, voluptatibus?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={slider_2} alt={""}/>
                                            <span className={"card-title"}>
                                                Mombasa
                                            </span>
                                            <div className="card-content">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Adipisci assumenda at dolor dolores eaque earum enim
                                                facere iusto maiores modi neque odio odit quidem quod reiciendis rem,
                                                sit veniam, voluptatibus?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={slider_3} alt={""}/>
                                            <span className={"card-title center"}>
                                                Mombasa
                                            </span>
                                            <div className="card-content">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Adipisci assumenda at dolor dolores eaque earum enim
                                                facere iusto maiores modi neque odio odit quidem quod reiciendis rem,
                                                sit veniam, voluptatibus?
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-follow teal darken-2 white-text">
                    <div className={"container"}>
                        <div className="row">
                            <div className="col s12">
                                <h4>Follow TravelLog</h4>
                                <p>Follow us on social media for special offers</p>
                                <a href={"/"} className={"white-text"}>
                                    <i className={"fab fa-facebook fa-4x"}>

                                    </i>
                                </a>
                                <a href={"/"} className={"white-text"}>
                                    <i className={"fab fa-twitter fa-4x"}>

                                    </i>
                                </a>
                                <a href={"/"} className={"white-text"}>
                                    <i className={"fab fa-linkedin fa-4x"}>

                                    </i>
                                </a>
                                <a href={"/"} className={"white-text"}>
                                    <i className={"fab fa-google-plus fa-4x"}>

                                    </i>
                                </a>
                                <a href={"/"} className={"white-text"}>
                                    <i className={"fab fa-pinterest fa-4x"}>

                                    </i>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                {/*section gallery*/}
                <section id="gallery" className="section section-gallery  scrollspy">
                    <div className="container">
                        <h4 className={"center"}>
                            <span className="teal-text">
                                Image Gallery
                            </span>
                        </h4>
                        <div className="row">
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?beach" alt="" className={"materialboxed responsive-img"}/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?travel" alt="" className={"materialboxed responsive-img"}/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?nature" alt="" className={"materialboxed responsive-img"}/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?beach,travel" alt="" className={"materialboxed responsive-img"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?water" alt="" className={"materialboxed responsive-img"}/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?building" alt="" className="materialboxed responsive-img"/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?cruise" alt="" className="materialboxed responsive-img"/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?trees" alt="" className="materialboxed responsive-img"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?beach,boat" alt="" className="materialboxed responsive-img"/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?bridge" alt="" className="materialboxed responsive-img"/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?beaches" alt="" className="materialboxed responsive-img"/>
                            </div>
                            <div className="col s12 m3">
                                <img src="https://source.unsplash.com/1600x900/?traveling" alt="" className="materialboxed responsive-img"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section contact*/}
                <section>
                    <div id="contact" className="section section-contact  ">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="card-panel teal white-text center scrollspy">
                                        <i className="material-icons">email</i>
                                        <h5>Contact Us For Booking</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda
                                            consequatur cupiditate error in ipsa, magni minus nostrum odit quae quos
                                            ratione sapiente similique soluta voluptas voluptatum! Facilis, in.</p>

                                    </div>
                                    <ul className="collection with-header">
                                        <li className="collection-header"><h5>Location</h5></li>
                                        <li className="collection-item"><h5>Travellog Agency</h5></li>
                                        <li className="collection-item"><h5>5461 Eldoret, Ainabkoi</h5></li>
                                        <li className="collection-item"><h5>Eldoret, Uasin Gishu</h5></li>

                                    </ul>
                                </div>
                                <div className="col s12 m6 ">
                                    <div className="card-panel grey lighten-3">
                                        <h5>Please fill out this form</h5>
                                        <div className={"input-field"}>
                                            <input type={"text"} placeholder={"name"}/>
                                        </div>
                                        <div className={"input-field"}>
                                            <input type={"text"} placeholder={"email"}/>
                                        </div>
                                        <div className={"input-field"}>
                                            <input type={"text"} placeholder={"phone"}/>
                                        </div>
                                        <div className={"input-field"}>
                                            <textarea placeholder={"message"} className={"materialize-textarea"}/>
                                        </div>
                                        <input type={"submit"} value={"Submit"} className={"btn"}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/*Footer section*/}
                <footer className={"section teal darken-2 white-text center"}>
                    <p className={"flow-text"}>Travellog &copy; 2020</p>
                </footer>
            </div>
        );
    }

}
export default Main;

