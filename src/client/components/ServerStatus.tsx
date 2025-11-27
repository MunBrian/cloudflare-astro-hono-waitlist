import React, { useEffect, useState } from 'react'

const ServerStatus = () => {

    const [response, setResponse] = useState<React.ReactNode>("");

   

    useEffect(() => {
       fetch("/api/health").then(res => res.json()).then(data => setResponse(data))
    }, [])
  return (
    <div>
        <h1 className='text-center text-xl'>Server Status</h1>
        <p className='text-center text-lg text-green-500 font-medium'>{response}</p>
    </div>
  )
}

export default ServerStatus