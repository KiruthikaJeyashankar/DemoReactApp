import React, { useState } from 'react'
import axios from 'axios'

function GitProfile({ url }) {
    const [isLoading, setIsLoading] = useState(false)
    const [userName, setUserName] = useState(null)

    async function handleLoadData() {
        setIsLoading(true)
        const response = await axios.get(url);
        setUserName(response.data.login)
        setIsLoading(false)
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {userName && <div>hello {userName}!</div>}
            {!isLoading && <button title='Load data' onClick={handleLoadData}>Load data</button>}
        </div>
    )
}

export default GitProfile