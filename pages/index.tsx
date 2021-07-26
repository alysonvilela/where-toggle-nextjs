import React, { useEffect, useState } from 'react'
import Api from './api/Api'


const Home = () => {
  const { data, loading} = Api();

  const dataLoaded = data?.map((user:any) => <li key={user?.name}>{user?.name}</li>);
  return (
    <div>
      OLA
      {loading ? <h1>Loading</h1> : null}
      {dataLoaded}
    </div>
  )
}

export default Home;
