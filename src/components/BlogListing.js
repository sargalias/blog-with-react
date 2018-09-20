import React from 'react';
import moment from 'moment';

const BlogListing = ( { blogPost, user } ) => {
  if (!blogPost)
    return null;
  const { imageURL, category, title, excerpt, postId, date } = blogPost;
  return (
    <article className="blog-listing">
      <div className="header">
        <div className="aspect-ratio-img">
          <a href={`/posts/${postId}`} id="image-link">
            <img src={imageURL} height="300" alt="" />
          </a>
        </div>
        <div className="category-text-container"><a href={`/categories/${category.toLowerCase()}`} className="btn btn-primary" id="category-link">{category}</a></div>
      </div>
      <div className="content">
        <h3 className="post-title"><a href={`/posts/${postId}`} id="post-title-link">{title}</a></h3>
        {excerpt && <p id="excerpt">{ excerpt }</p>}
        <a href={`/posts/${postId}`} id="read-more-link">Read more &raquo;</a>
      </div>
      <div className="metadata-container">
        <div className="metadata">Published by <a href={`/users/${user.id}`} id="userLink">{ user.displayName }</a> at <a href="">{ moment(date).format('DD/MM/YYYY') }</a></div>
      </div>
    </article>
  )
};

export default BlogListing;
