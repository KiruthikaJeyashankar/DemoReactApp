import axios from 'axios'
import React, { useState } from 'react'

function GitProfile({ url }) {
    const [isLoading, setIsLoading] = useState(false)
    const [userName, setUserName] = useState()

    function handleLoadData() {
        setIsLoading(true)
        axios.get(url).then(function (response) {
            // handle success
            setUserName(response.data.login)
        })
        //logic
    }

    return (
        <div>
            {userName && <div>Hello {userName}!</div>}
            {isLoading && <div>Loading...</div>}
            {!isLoading && <button title='Load data' onClick={handleLoadData}>Load data</button>}
        </div>
    )
}

export default GitProfile