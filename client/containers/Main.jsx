import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// components
import Btn from '../components/Button'

// actions
import { reset } from '../actions'

require('../styles/style.scss');

// UI
class Main extends Component {

    render() {
        return (
            <div></div>
        )
    }

}

Main.propTypes = {}

const mapStateToProps = ( state, ownProps ) => ({})

const mapDispatchToProps = ( dispatch, ownProps ) => ({})

export default connect( mapStateToProps, mapDispatchToProps )( Main )
