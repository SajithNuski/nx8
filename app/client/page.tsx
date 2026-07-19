"use client"

import React, { use } from 'react'
import { useState } from 'react';

const page = () => {
    const [count,setCount]=useState(0);

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4">
        <button onClick={() => setCount(count + 1)} >Click me</button>
        <p>You clicked <span className='text-8xl text-fuchsia-600'>{count}</span> times</p>
    </div>
  )
}

export default page