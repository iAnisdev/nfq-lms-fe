import { NextPage } from "next";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

const Home : NextPage = ()  => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login')
    },
  })
  return (
    <div>
      <p>Home Page</p>
    </div>
  )
}


export default Home