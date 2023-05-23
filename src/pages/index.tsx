import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "../components/Header"
import { GlobalStyles } from "../components/GlobalStyles"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header title='Курс английского языка' />
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
