import React from "react";
import "./RightSidebar.css";
import comment from '../../assets/comment-png-22752.png';
import pen from '../../assets/pencil-icon.png'
import blackicon from '../../assets/blackicon.png'
import WidgetTags from './WidgetTags.jsx'

const Widget = () =>{
    return(
    <div className="widget">
        <h4>The OverfFow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width={18}/>
                <p>Obervalability is key of future of software (and your DevOps career)</p>
            </div>
                        <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width={18}/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>

        <h4>Futured On Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width={18}/>
                <p>Review queue workflows- Final release...</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width={18}/>
                <p>Please welcome valued associates: #958-V2Blast #959 - SpencerG</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blackicon} alt="blackicon" width={18}/>
                <p>Outdated Answers: accepted answer is now unpinned on Stact Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>20</p>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>14</p>
                <p>Is a link to the "How to ask" help page a usefull comment?</p>
            </div>
        </div>
    </div>
    )
} 
export default Widget