import { GetServerSideProps } from "next"
import { useUserAgent } from "next-useragent"
import { Button } from "components"
import { FC } from "react"
import { IHomePage } from "types"
import { getData } from "services"

const Details: FC<IHomePage> = ({ uaString, data }) => {
  const { isIos } = useUserAgent(uaString)
  return (
    <div>
      {isIos && <p>You are using a mobile device</p>}
      <div>{data.title}</div>
      <Button>Hello</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getData()
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      data,
    },
  }
}
export default Details
