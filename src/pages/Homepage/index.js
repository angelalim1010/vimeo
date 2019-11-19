import React, {Component} from 'react';
import Monsoon from "../../components/Monsoon";
import Beams from "../../components/Beams";
import Move from "../../components/Move"
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
            </div>
        )
    }
}

export default Homepage;