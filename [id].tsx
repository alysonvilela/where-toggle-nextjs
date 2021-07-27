import axios from 'axios';
import React from 'react'
import Api from '../Api';


const API_URL = 'https://mocki.io/v1/46130913-560b-4d41-8bf4-8d03cc3f5dee'


export const getStaticPaths = async () => {
  const { data } = Api();

  const paths = data.map(u => {
    return {
      params: { id: u?.id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(API_URL + id);
  
  return {
    props: { user: data }
  }

}

const Details = ({user}) => {
  return (
    <div>
      <h1>{ user.name }</h1>
      <p>{ user.details }</p>

    </div>
  )
}

export default Details;
