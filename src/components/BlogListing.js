import React from 'react';
import moment from 'moment';

const BlogListing = ( { blogPost, user } ) => {
  if (!blogPost)
    return null;
  const { imageURL, category, title, excerpt, postLink, date } = blogPost;
  return (
    <article className="blog-listing">
      <div className="header">
        <div className="aspect-ratio-img">
          <a href="/sdf">
            <img src={imageURL} height="300" alt="" />
          </a>
        </div>
        <div className="category-text-container"><a href="#" className="btn btn-primary">{category}</a></div>
      </div>
      <div className="content">
        <h3 className="post-title"><a href="sdf">{title}</a></h3>
        {excerpt && <p id="excerpt">{ excerpt }</p>}
        <a href="#">Read more &raquo;</a>
      </div>
      <div className="metadata-container">
        <div className="metadata">Published by <a href="#">User</a> at <a href="">11/08/2018</a></div>
      </div>
    </article>
  )
};

export default BlogListing;
