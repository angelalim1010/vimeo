import React, {Component} from 'react';
import Monsoon from "../../components/Monsoon";
import Beams from "../../components/Beams";
import "./Homepage.scss";

class Homepage extends Component{
    render(){
        return(
            <div>
                <Monsoon/>
                <div className = "gray-gradient">
                    <Beams/>
                </div>
            </div>
        )
    }
}

export default Homepage;