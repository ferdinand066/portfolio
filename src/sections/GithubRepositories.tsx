import * as React from "react"
import GithubCard from "../components/GithubCard"

export default function GithubRepositories({ pinnedRepositories }: any){
    return (
        <div id="projects" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                pinnedRepositories.map((pinnedRepository: any) => {
                    return <GithubCard key={ pinnedRepository.id } pinnedRepository={ pinnedRepository } />
                })
            }
        </div>
    )
}