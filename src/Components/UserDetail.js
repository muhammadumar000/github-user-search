import React from 'react';
import styled from 'styled-components'

const UserDetail = ({data}) => {
  const date = new Date(data.created_at);
  // console.log(data)
  return (
   <Wrap>
    <Avatar>
      <img  className="avatar" src={data.avatar_url} alt="" />
    </Avatar>
    <Details>
      <NameAndDate>
        <h3 className='name'>{data.name}</h3>
        <h3>{`Joined ${parseInt(date.getDate())-1}-${parseInt(date.getMonth())+1}-${parseInt(date.getFullYear())}`}</h3>
      </NameAndDate>
      <UserNameAndBio>
        <a className='username' href={data.html_url} target="blank">{data.login}</a>
        <p>{data.bio}</p>
      </UserNameAndBio>

      <StatsGrid>
        <h3>Repos</h3>
        <h3>Followers</h3>
        <h3>Following</h3>
        <h3>{data.public_repos}</h3>
        <h3>{data.followers}</h3>
        <h3>{data.following}</h3>
      </StatsGrid>

      <DataGrid>
        <h3><i className="fa-solid fa-location-dot"></i>{data.location}</h3>
        <h3><i className="fa-brands fa-github"></i> <a href={data.html_url}>{data.html_url}</a></h3>
      </DataGrid>

    </Details>
   </Wrap>
  )
}

export default UserDetail;

const Wrap = styled.div`
 min-height: 25rem;
 min-width: 50%;
 display: flex;
 background-color: #143F6B;
 border-radius:10px;
 overflow-x:unset;
 padding-bottom:2rem;
 margin-inline:2rem;
 @media (max-width:880px){
  /* width: 60%; */
  flex-direction:column;

 }
 @media (max-width:880px){
  width: 350px;
  input{
    font-size:1rem;
  }

 }
 @media (max-width:360px){
  width: 330px;

 }
`
const Avatar = styled.div`
width: 30%;
/* border: 2px solid blue; */
height: 100%;
display: flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
padding-top:3rem;

img{
  width: 100%;
  border-radius: 50%;
  padding: 0rem 1rem;
}
@media (max-width:880px){
  width: 100%;
  height: 30%;
  img{
  width: 20%;
}
 }
`
const Details = styled.div`
 width: 70%;
 height: 100%;
 /* border: 2px solid yellow; */
 display: flex;
 flex-direction:column;
 justify-content:flex-start;
 align-items:flex-start;
 gap: 1rem;
 padding: 2rem;
 overflow-x:unset;
 @media (max-width:880px){
  width: 100%;
  height: 70%;

 }
`
const NameAndDate = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content:space-between;
  align-items:center;
  width: 100%;
  color: #FAFDD6;
  overflow-x:unset;
  .name{
    font-size:1.5rem;
    overflow-x:unset;
  }
  h3{
    overflow-x:unset
  }
  @media (max-width: 456px){
    flex-direction:column;
  }
  
  /* border: 2px solid red; */
`
const UserNameAndBio = styled.div`
color: #FAFDD6;
overflow-x:unset;

.username{
  font-size:1.2rem;
  color: #5584AC;
  padding-bottom:0.5rem;
}
@media (max-width: 456px){
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align: center;
  }
  

`
const StatsGrid = styled.div`

display: grid;
width: 100%;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(2,1fr);
background-color: #112B3C;
padding: 1rem;
border-radius:10px;
color: #E8F9FD;
overflow-x:unset;

@media (max-width: 456px){
    font-size:0.8rem;
    column-gap: 0.5rem;
    padding: 0.5rem;
  }
`
const DataGrid = styled.div`
width: 100%;
overflow-x:unset;
@media (max-width: 456px){
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align: center;

  }

h3{
  padding-block:0.3rem;
  color: #5584AC;
  
}
a{
  text-decoration:none;
  color:#5584AC;
  
}
i{
  padding-right: 10px;
  color: #5584AC;
}

`