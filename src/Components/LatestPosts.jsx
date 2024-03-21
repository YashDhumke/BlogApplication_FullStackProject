import React from "react";
import { LatestPostData } from "../DummyApi";

const LatestPosts = () => {
  return (
    <>
      <section
        class="section recent-post"
        id="recent"
        aria-labelledby="recent-label"
      >
        <div class="container">
          <div class="post-main">
            <h2 class="headline headline-2 section-title">
              <span class="span">Recent posts</span>
            </h2>

            <p class="section-text">Don't miss the latest trends</p>

            <ul class="grid-list">
              {LatestPostData.map((post) => (
                <LatestPost data={post} />
              ))}
            </ul>

            <nav aria-label="pagination" class="pagination">
              <a href="abc" class="pagination-btn" aria-label="previous page">
                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
              </a>

              <a href="abc" class="pagination-btn">
                1
              </a>
              <a href="abc" class="pagination-btn">
                2
              </a>
              <a href="abc" class="pagination-btn">
                3
              </a>
              <a href="abc" class="pagination-btn" aria-label="more page">
                ...
              </a>

              <a href="abc" class="pagination-btn" aria-label="next page">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPosts;

export const LatestPost = ({ data }) => {
  console.log(data);
  const cardBannerStyle = {
    "--width": "271",
    "--height": "258",
  };

  return (
    <>
      <li>
        <div class="recent-post-card">
          <figure class="card-banner img-holder" style={cardBannerStyle}>
            <img
              src={data.postImg}
              width="271"
              height="258"
              loading="lazy"
              alt="Helpful Tips for Working from Home as a Freelancer"
              class="img-cover"
            />
          </figure>

          <div class="card-content">
            <a href="abc" class="card-badge">
              {data.category}
            </a>

            <h3 class="headline headline-3 card-title">
              <a href="abc" class="link hover-2">
                {data.name}
              </a>
            </h3>

            <p class="card-text">{data.discription}</p>

            <div class="card-wrapper">
              <div class="card-tag">
                <a href="abc" class="span hover-2">
                  abc Travel
                </a>

                <a href="abc" class="span hover-2">
                  abc Lifestyle
                </a>
              </div>

              <div class="wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span class="span">{data.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
