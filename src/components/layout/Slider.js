import React, {Component} from 'react';
import slider_1 from '../../img/resort1.jpg'
import slider_2 from '../../img/resort2.jpg'
import slider_3 from '../../img/resort3.jpg'
import M from 'materialize-css'
import "../../css/main.css"

class Slider extends Component{

    componentDidMount() {
        const slider = document.querySelector('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 500,
            transition:500,
            interval:6000
        });
    }

    render() {

        const ac = document.querySelector('.autocomplete');
        M.Autocomplete.init(ac, {
           data:{
               Nairobi: null,
               Mombasa: null,
               Eldoret: null,
               Nakuru: null,
               Kisumu: null,
               Kitale: null,
               Garissa: null,
           }
        });
        const ss = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(ss, {});
        return (

            <div>

                <section className={"slider scrollspy"}>
                    <ul className="slides">
                        <li>
                            <img src={slider_1} alt={"img"}/>
                            <div className="caption center-align">
                                <h2>Take your dream vacation!</h2>
                                <h5 className="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={slider_2} alt={"img"}/>
                            <div className="caption left-align">
                                <h2>We work with all budgets</h2>
                                <h5 className="light grey-text text-lighten-3 hide-on-small-only" >Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={slider_3} alt={"img"}/>
                            <div className="caption right-align">
                                <h2>Group and individual getaways</h2>
                                <h5 className="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={slider_1} alt={"img"}/>
                            <div className="caption center-align">
                                <h2>This is our big Tagline!</h2>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                    </ul>
                </section>

            </div>

        );
    }

}
export default Slider;