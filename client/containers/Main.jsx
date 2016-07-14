import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// components
import Btn from '../components/Button'

// actions
import { reset } from '../actions'

// UI
class Main extends Component {

    render() {
        return (
            <div class="container">
        
		        <div id="uo-cv">

		            <h1>{{title}}</h1>
		            <p>{{description}}</p>

		            <div class="row videos">
		                
		                <div class="col-md-4 video-container">

		                    <iframe src="{{ embed }}"
		                            width="320"
		                            height="240"
		                            frameborder="0"
		                            webkitallowfullscreen mozallowfullscreen allowfullscreen>
		                    </iframe>

		                    <p>
		                        <a href="{{ link }}" target="_blank">{{ title }}</a>
		                    </p>

		                </div>

		            </div>

		            <div class="social">

		                <p v-repeat="social">
		                    <a href='{{ url }}' target="_blank" class='symbol' title='{{ cssTitle }}'></a>
		                </p>

		            </div>

		        </div>

		    </div>
        )
    }

}

Main.propTypes = {}

const mapStateToProps = ( state, ownProps ) => ({})

const mapDispatchToProps = ( dispatch, ownProps ) => ({})

export default connect( mapStateToProps, mapDispatchToProps )( Main )
