import {API_URL} from "../api/Api";
import { InferGetStaticPropsType } from 'next'
import { GetStaticPaths } from 'next'
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import Image from 'next/image'


function Blog({ data }) {
  const [ currentPage, setCurrentPage ] = useState();
  const router = useRouter();
  const { id } = router.query;

  return (
    <ul>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
      {data.map((user) => (
          <Link key={user.id} href={user.id}>
            <a>{user.name}</a>
          </Link>
        ))}
      {id}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  const paths = data.map((user) => ({
    params: { id: user.id },
  }))

  return { paths, fallback: false }
}

export default Blog

function useParams(): { id: any; } {
  throw new Error("Function not implemented.");
}
