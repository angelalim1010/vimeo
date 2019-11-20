import React, {Component} from 'react';
import Monsoon from "../../components/Monsoon";
import Beams from "../../components/Beams";
import Move from "../../components/Move"
import MyCarousel from "../../components/MyCarousel";
import "./Homepage.scss";

class Homepage extends Component{
    
    render(){
        return(
            <div>
                <Monsoon/>
                <div className = "gray-background">
                     <Beams/>
                </div>
                <div className = "gray-gradient">
                    <Move/>
                </div>
                <div>
                    <MyCarousel/>
                </div>
            </div>
        )
    }
}

export default Homepage;