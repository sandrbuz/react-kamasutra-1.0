import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post';

// let posts = [
//   {id: 1, message: 'Hi, how are you?', likesCount: 12},
//   {id: 2, message: 'It\'s my first page', likesCount: 11},
//   {id: 2, message: 'Blabla', likesCount: 10},
//   {id: 2, message: 'Blabla', likesCount: 1},
// ];

// let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts arrPosts = {props.arrPosts}/>
    </div>
  )
}

export default Profile;