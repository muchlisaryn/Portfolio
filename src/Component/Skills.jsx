import React from "react"
import Title from "./Commons/Title"

export default class Skill extends React.Component {
    render() {
        return (
        <div className="center">
            <Title value="Skill" />
            <div className="d-flex ">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
                <ul>
                    <li>GOLANG</li>
                    <li>PHP</li>
                    <li>C++</li>
                </ul>
            </div>
        </div>
        )
    }
}

