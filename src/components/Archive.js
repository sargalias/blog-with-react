import React from 'react';
import Container from './Container';
import BlogListings from './BlogListings';

const Archive = ({ blogPosts }) => (
  <section className="blog mt-5">
    <Container>
      <BlogListings blogPosts={blogPosts} />
    </Container>
  </section>
);

export default Archive;
