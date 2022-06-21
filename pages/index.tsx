import { GetServerSideProps } from "next"
import { useUserAgent } from "next-useragent"
import { Button } from "components"
import { FC } from "react"
import { IHomePage } from "types"
import { getData } from "services"

const Home: FC<IHomePage> = ({ uaString, res }) => {
  const { isMobile } = useUserAgent(uaString)
  return (
    <div>
      {isMobile && <p>You are using a mobile device</p>}
      <div>{res.title}</div>
      <Button>Hi!</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getData()
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      res,
    },
  }
}
export default Home
