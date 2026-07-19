import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div>
        <div className="flex flex-col items-center h-screen justify-center gap-4">
          <h1 className="text-3xl font-bold text-emerald-600">Hello this is a test</h1>
          <Link href="/contact" className="text-3xl font-bold text-amber-800">
            Hellooooo
            </Link>
        </div>
    </div>
  )
}

export default page