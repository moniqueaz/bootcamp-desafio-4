import React from 'react'

import Post from './Post'
import './Posts.css'

class Posts extends Component {

  state = {
    countPosts: 10
  }

  render() {
    return <div>
      {this.state.countPosts.map((c, index => <Post key={i}></Post>)}
    </div>
  }

}

export default Posts