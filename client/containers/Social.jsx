import React from 'react'

const Summary = ({
	url,
	cssTitle,
}) => (
    <p>
        <a href={ url } target="_blank" className="symbol" title={ cssTitle }></a>
    </p>
)

export default Summary
