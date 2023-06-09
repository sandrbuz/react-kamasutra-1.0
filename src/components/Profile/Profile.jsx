import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
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
      <MyPostsContainer store={props.store} 
     /*dispatch={props.dispatch}   
               stateProfilePage = {props.stateProfilePage} */
              /*  stateProfilePagePosts = {props.stateProfilePage.posts}*/
               //addPost={props.addPost}
              /*  stateProfilePageNewPostText={props.stateProfilePage.newPostText}*/
               //updateNewPostText={props.updateNewPostText}
                              />
    </div>
  )
}

export default Profile;