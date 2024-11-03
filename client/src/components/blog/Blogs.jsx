import React from 'react';
import { Helmet } from 'react-helmet';

const blogPosts = [
  // {
  //   id: 1,
  //   category: 'Design',
  //   dateTime: 'Fab 23, 2022',
  //   title: 'Design conferences in 2022',
  //   text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  //   imgSrc: '/images/blog-1.jpg',
  //   imgAlt: 'Design conferences in 2022',
  // },
  // add more items here...
];

const Blogs = () => {
  return (
    <article className="blog active" data-page="blog">
      <Helmet>
        <title>Lawson Buabassah | Blog</title>
      </Helmet>

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        {blogPosts.length > 0 ? (
          <ul className="blog-posts-list">
            {blogPosts.map((post) => (
              <li className="blog-post-item" key={post.id}>
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src={post.imgSrc} alt={post.imgAlt} loading="lazy" />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{post.category}</p>
                      <span className="dot"></span>
                      <time dateTime={post.dateTime}>{post.dateTime}</time>
                    </div>

                    <h3 className="h3 blog-item-title">{post.title}</h3>

                    <p className="blog-text">{post.text}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-white'>Sorry. Haven't written any blog posts yet.</p>
        )}
      </section>
    </article>
  );
};

export default Blogs;

