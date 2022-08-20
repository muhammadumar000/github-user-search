import React from 'react';

const UserDetail = ({data}) => {
  const date = new Date(data.created_at);
  // console.log(data)
  return (
   <div className='Wrap'>
    <div className='Avatar'>
      <img  className="avatar" src={data.avatar_url} alt="" />
    </div>
    <div className='Details'>
      <div className='NameAndDate'>
        <h3 className='name'>{data.name}</h3>
        <h3>{`Joined ${parseInt(date.getDate())-1}-${parseInt(date.getMonth())+1}-${parseInt(date.getFullYear())}`}</h3>
      </div>
      <div className='UserNameAndBio'>
        <a className='username' href={data.html_url} target="blank">{data.login}</a>
        <p>{data.bio}</p>
      </div>

      <div className='StatsGrid'>
        <h3>Repos</h3>
        <h3>Followers</h3>
        <h3>Following</h3>
        <h3>{data.public_repos}</h3>
        <h3>{data.followers}</h3>
        <h3>{data.following}</h3>
      </div>

      <div className='DataGrid'>
        <h3><i className="fa-solid fa-location-dot"></i>{data.location}</h3>
        <h3><i className="fa-brands fa-github"></i> <a href={data.html_url}>{data.html_url}</a></h3>
      </div>

    </div>
   </div>
  )
}

export default UserDetail;


