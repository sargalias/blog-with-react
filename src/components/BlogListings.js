import React from 'react';

const BlogListings = ({ blogPosts = []}) => (
  blogPosts.length > 0 && (
    <div className="blog-listings mt-4">
    </div>
  )
);

export default BlogListings;
