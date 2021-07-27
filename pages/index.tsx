import React, { useEffect, useState } from 'react'
import Api from './api/Api'
import Link from 'next/link'




const Home = () => {
  const { data, loading } = Api();

  return (
    <div>
      OLA
      {loading ? <h1>Loading</h1> : null}
      {data?.map((user:any) => 
      <li key={user?.id}>
        <Link href={'/items/' + user?.id}>
          <a className="items">{user?.name}</a>
          </Link>
      </li>)}
    </div>
  )
}

export default Home;
