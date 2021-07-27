import React, { useEffect, useState } from 'react'
import Api from './api/Api'
import Link from 'next/link'
import { Card } from '../components/Card/Card';
const Home = () => {
  const { data, loading } = Api();

  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="py-5">
             <h1>Take your backpack, and discover the breathing nature</h1> 
            </div>
            <div className="form pb-5">
              <input type="text" placeholder="Search" className="searchbar"/>
            </div>
          </div>
        </div>
      </section>

      <section>
          
      </section>
      {loading ? <h1>Loading</h1> : null}
      {data?.map((user:any) => 
      <div className="mb-4" key={user?.id}>
        <Link href={'/items/' + user?.id}>
          <a className="items"><Card name={user?.name}
           rate={user?.rate}
           bgImg={user?.imagem} /></a>
          </Link>
      </div>)}
    </div>
  )
}

export default Home;
