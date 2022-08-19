import * as React from "react"
import { graphql, HeadFC, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import { RecoilRoot } from "recoil"
import GithubRepositories from "../sections/GithubRepositories"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    github {
      user(login: "ferdinand066") {
        pinnedItems(first: 6) {
          nodes {
            ... on GitHub_Repository {
              id
              owner {
                login
              }
              name
              nameWithOwner
              description
              isPrivate
              openGraphImageUrl
              url
              createdAt
              homepageUrl
              languages(first: 10) {
                nodes {
                  color
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `);

  return (
    <RecoilRoot>
      <main>
        <div id="circle-container" className="dark:bg-gray-600 min-h-screen h-full w-full absolute transition-colors">
          <div></div>
          <div></div>
        </div>
        <div className="h-screen w-full absolute flex flex-col gap-4 overflow-y-auto">
          <Navbar />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-4">
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
            { <GithubRepositories pinnedRepositories={ data.github.user.pinnedItems.nodes }/> }
          </div>
        </div>
      </main>
    </RecoilRoot>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ferdinand Gunawan</title>
