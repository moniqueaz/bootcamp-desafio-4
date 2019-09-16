import React, { Component } from 'react'

import Post from './Post'
import './PostList.css'

class PostList extends Component {

  state = {
    postList: [
      {
        name: 'Monique',
        profile: '/profile',
        date: '01 jun 2019',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.',
        comments: [
          {
            name: 'Monique',
            profile: '/perfil-comentario',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.'
          },
          {
            name: 'Monique',
            profile: '/perfil-comentario',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.'
          }
        ]
      },
      {
        name: 'Monique',
        profile: '/profile',
        date: '01 jun 2019',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.',
        comments: [
          {
            name: 'Monique',
            profile: '/perfil-comentario',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.'
          },
          {
            name: 'Monique',
            profile: '/perfil-comentario',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores.'
          }
        ]
      }
    ]
  }

  render() {
    return (<div className="post-list">
      {this.state.postList.map((post, index) => <Post post={post} key={index} />)}
    </div>)
  }

}

export default PostList