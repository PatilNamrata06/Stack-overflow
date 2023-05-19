import React from "react";

const WidgetTags = () =>{

    const tags = ['C', 'CSS', 'Java', 'Python', 'HTML', 'Javascript', 'SQL', 'Mongodb', 'PHP','ReactJS','Express','MySQL', 'Django', 'C++'];

    return(
    <div className="widget-tags">
        <h3>Watched Tags</h3>
        <div className="widget-tags-div">
            {
                tags.map((tag) =>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
    )
} 

export default WidgetTags