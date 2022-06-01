import React from 'react'
import styled from 'styled-components'

const Card = (props) => {

  return (
    <CardStyle>
       <RepoPicture>
          <div>
               <img src={props.avarter} alt='avatar'/>
          </div>
       </RepoPicture>
       <RepoDetails>
           <RepoName>
                {props.name}
           </RepoName>
           <RepoDesc>
                {props.description}
           </RepoDesc>
           <RepoRating>
                <StarsCount>
                     <p>Star:</p><p>{props.stars}</p>
                </StarsCount>
                <IssuesCount>
                     <p>Issue:</p><p>{props.issues}</p>
                </IssuesCount>
                <TimeCount>
                     {props.time}
                </TimeCount>
           </RepoRating>
           
       </RepoDetails>
    </CardStyle>
  )
}

const CardStyle=styled.div`
  width:85%;
  height:200px;
  border:1px solid gainsboro;
  display:flex;
  flex-direction:row;
`
const RepoPicture=styled.div`
  width:20%;
  height:100%;
  display:grid;
  place-content:center;

  div{
       width:100px;
       height: 80%;
       border:1px solid gainsboro;
       img{
            width:100%;
            height:100%;
       }
  }
`
const RepoDetails=styled.div`
 width:80%;
 height:100%;
 display:flex;
 flex-direction:column;
`
const TimeCount=styled.p`
 width:auto;
 height:auto;
`
const RepoName=styled.p`
 width:100%;
 height:50px;
 display:flex;
 font-size:24px;
 margin:0;
 font-weight:bold;
 justify-content:flex-start;
 align-items:center;
`
const RepoDesc=styled.p`
 width:100%;
 height:80px;
 word-wrap:break-word;
 display:flex;
 justify-content:flex-start;
 align-items:center;
`
const RepoRating=styled.div`
 width:100%;
 height:70px;
 display:flex;
 justify-content:flex-start;
 flex-direction:row;
 gap:30px;
 align-items: center;
`
const StarsCount=styled.div`
 width:150px;
 height:50px;
 word-wrap:break-word;
 display:flex;
 flex-direction:row;
 justify-content:flex-start;
 align-items:center;
 border:1px solid black;
`
const IssuesCount=styled.div`
 width:150px;
 height:50px;
 word-wrap:break-word;
 display:flex;
 flex-direction:row;
 justify-content:flex-start;
 align-items:center;
 border:1px solid black;
 p{
      margin:0px;
 }
`
export default Card