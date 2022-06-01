import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import Card from './card'
import moment from 'moment'
//import TimeAgo from 'timeago-react'
// import en_Us from 'timeago.js/lib/lang/en_US'

const Github = () => {
 const [user,setUser]=useState([])
 
 useEffect(()=>{
    const getData=async()=>{
        const data= await fetch("https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc")
        .then(res=>res.json())
        setUser(data.items)  
    }
    getData()
 },[])
   // timeago.register('en_Us',en_Us)

    return (
    <GithubStyle>
       {
          user.map((repo,i)=>{
             return(
                <Card key={i} avarter={repo.owner.avatar_url} name={repo.name} description={repo.description} stars={repo.stargazers_count} issues={repo.open_issues_count} time={moment(repo.update).format()}/>
             )
          })
       }
    </GithubStyle>
  )
}

const GithubStyle=styled.div`
  width:100vw;
  height:auto;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  margin-top:100px;
`

export default Github