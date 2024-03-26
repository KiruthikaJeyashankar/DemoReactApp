import React, { useState } from 'react'

function GitProfile({ url }) {
    const [isLoading, setIsLoading] = useState(false)

    function handleLoadData() {
        setIsLoading(true)
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            <button title='Load data' onClick={handleLoadData}>Load data</button>
        </div>
    )
}

export default GitProfile