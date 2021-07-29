import React from 'react'

const ProjectDetails = (props) => {

    const { id } = props.match.params;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex accusantium iusto natus nobis inventore. Necessitatibus optio quidem deleniti dolorem officiis, tempora repudiandae consequatur magnam, quaerat quam vitae nisi corporis inventore.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
