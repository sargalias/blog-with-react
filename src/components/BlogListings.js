import React from 'react';
import BlogListing from './BlogListing';

const BlogListings = ({ blogPosts = []}) => (
  blogPosts.length > 0 && (
    <div className="blog-listings mt-4">
      { blogPosts.map((blogPost) => (
        <BlogListing blogPost={blogPost} key={blogPost.postId} />
      ))}
    </div>
  )
);

export default BlogListings;
