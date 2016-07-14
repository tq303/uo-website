import React from 'react'

const Summary = ({
	embed,
	link,
	title,
}) => (
    <div className="col-md-4 video-container">

        <iframe src={ embed }
                width="320"
                height="240"
                frameborder="0"
                webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>

        <p>
            <a href={ link } target="_blank">{ title }</a>
        </p>

    </div>
)

export default Summary
