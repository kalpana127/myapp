import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Propscomp extends Component {
    render(props) {
        
        return (
            <div>
                <p>{this.props.name}</p>
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}

// Propscomp.propTypes = {
//     name: PropTypes.string
//   };