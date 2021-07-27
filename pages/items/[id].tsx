import Api from "../api/Api";
import { InferGetStaticPropsType } from 'next'
import { GetStaticPaths } from 'next'
import { useState } from "react";
import { useRouter } from "next/dist/client/router";


function Blog({ data }) {
  const [ currentPage, setCurrentPage ] = useState();
  const router = useRouter();
  const { id } = router.query;

  return (
    <ul>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
      (id)
    </button>
      {data.map((user) => (
          <h1>{user.name} {user.id}</h1>
        ))}
      {id}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://mocki.io/v1/46130913-560b-4d41-8bf4-8d03cc3f5dee')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://mocki.io/v1/46130913-560b-4d41-8bf4-8d03cc3f5dee')
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
