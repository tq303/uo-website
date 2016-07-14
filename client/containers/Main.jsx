import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// components
import Btn from '../components/Button'

// sections
import Header  from './Header'
import Summary from './Summary'
import Social  from './Social'

// actions
import { reset } from '../actions'

// UI
class Main extends Component {

    render() {

        return (
        	<div>

	        	<Header />

	            <div className="container">        		

			        <div id="uo-cv">

			            <h1>{ this.props.title }</h1>
			            <p>{ this.props.description }</p>


			            <div className="videos row">
			            	{ // list videos
			            		this.props.videos.map( v => {
									return(<Summary embed={ v.embed } link={ v.link } title={ v.title } />)
			            		})
			            	}
		            	</div>

		            	<div class="social">

		            		{ // list social media
		            			this.props.social.map( s => {
									return <Social url={ s.url } cssTitle={ s.cssTitle } />
			            		})
		            		}

						</div>

			        </div>

			    </div>

        	</div>
        )
    }
}

Main.propTypes = {}

const mapStateToProps = ( state, ownProps ) => ({
	title:       state.title,
	videos:      state.videos,
	social:      state.social,
	description: state.description,
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({})

export default connect( mapStateToProps, mapDispatchToProps )( Main )
