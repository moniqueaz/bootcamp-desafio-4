import REact from 'react'

import './Post.css'

function Post({ index }) {
  return <div key={index}>
    <div>
      <img src="/perfil" alt="" />
      <h2>Nome</h2>
      <span>data</span>
    </div>
    <div>
      <img src="/perfil-comentario" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum cum quibusdam? Inventore corrupti error eveniet ad a sunt molestias ducimus tempora dolorum adipisci! Unde, itaque? Facilis accusantium blanditiis recusandae?Mollitia dolorum officia recusandae aliquam, voluptates culpa cum dignissimos fugit, veniam ipsam excepturi? Voluptate, beatae culpa quod mollitia libero quo nihil officia omnis iusto perspiciatis explicabo vel. Quos, enim aperiam.</p>
    </div>
  </div>
}

export default Post