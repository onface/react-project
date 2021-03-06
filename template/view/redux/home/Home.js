import React, { PropTypes } from 'react'
import exampleExplain from "./exampleExplain"
import Explain from "./Explain"
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

const style = exampleExplain.style

class Home extends React.Component {
    render () {
        const self = this
        return (
            <div style={{padding: 10}} >
                tabs:
                {
                    self.props.tags.map(function (tag, index) {
                        return (
                            <span
                                key={index}
                                style={style.tag}
                            >
                                {tag.label}
                                <span
                                    style={style.removeTag}
                                    onClick={function () {
                                        self.props.removeTag(tag.value)
                                    }}
                                >&times;</span>
                            </span>
                        )
                    })
                }
                <div>
                    <Link to="/list">list</Link>
                </div>
                <Explain />
            </div>
        )
    }
}

export default Home;
