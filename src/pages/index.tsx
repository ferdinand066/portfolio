import * as React from "react"
import { graphql, HeadFC, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import { RecoilRoot } from "recoil"
import GithubRepositories from "../sections/GithubRepositories"
import PersonalInformation from "../sections/PersonalInformation"
import SkillSection from "../sections/SkillSection"

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
        <div className="w-full absolute flex flex-col gap-4 dark:bg-gray-600">
          <Navbar />
          <div className="flex flex-col gap-20">
            <PersonalInformation />
            {/* <SkillSection /> */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-4">
              <GithubRepositories pinnedRepositories={data.github.user.pinnedItems.nodes} />
            </div>
          </div>
        </div>
      </main>
    </RecoilRoot>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ferdinand Gunawan</title>
