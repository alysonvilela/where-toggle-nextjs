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
        <div className="container">
          <div className="row">
            {loading ? <h1>Loading</h1> : null}
            {data?.map((user:any) => 
              <Link href={'/items/' + user?.id} 
              key={user?.id}>
                <a className="col-12 col-sm-6 mb-5"><Card name={user?.name}
                rate={user?.rate}
                bgImg={user?.imagem} /></a>
                </Link>)}
          </div>
        </div>  
      </section>
    </div>
  )
}

export default Home;
