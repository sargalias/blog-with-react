import React from 'react';

const BlogListing = (props) => (
  <article className="blog-listing">
    <div className="header">
      <div className="aspect-ratio-img">
        <a href="/sdf">
          <img src="https://placeimg.com/500/250/any" height="300" alt="" />
        </a>
      </div>
      <div className="category-text-container"><a href="#" className="btn btn-primary">Travel</a></div>
    </div>
    <div className="content">
      <h3 className="post-title"><a href="sdf">Post title</a></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolor facere fugit ipsam maxime sequi
        soluta. Accusamus atque ea eaque harum, id impedit itaque magni odit optio quod? Non, officia.</p>
      <a href="#">Read more &raquo;</a>
    </div>
    <div className="metadata-container">
      <div className="metadata">Published by <a href="#">User</a> at <a href="">11/08/2018</a></div>
    </div>
  </article>
);

export default BlogListing;
