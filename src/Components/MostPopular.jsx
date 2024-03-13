import React from 'react'
import img1 from '../images/shadow-3.svg'
import { postApi } from '../DummyApi';

const MostPopular = () => {


  return (
    <>
      <section class="section feature" aria-label="feature" id="featured">
        <div class="container">

          <h2 class="headline headline-2 section-title">
            <span class="span">Most Popular Articals</span>
          </h2>

          <p class="section-text">
            Featured and highly rated articles
          </p>

          <ul class="feature-list">

              {
                postApi.map((postData, index)=>(
                  <Post postData = {postData} key={index}/>
                ))
              }
            

            

            



          </ul>

          <a href="abc" class="btn btn-secondary">
            <span class="span">Show More Posts</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>

        </div>

        <img src={img1} width="500" height="1500" loading="lazy" alt="" class="feature-bg"/>

      </section>
    </>
  )
}

export default MostPopular


const Post = ({postData}) =>{


  const cardBannerStyle = {
    '--width': '1602px',
    '--height': '903px',
  };
  return (
    <>
      <li>
              <div class="card feature-card">

                <figure class="card-banner img-holder" style={cardBannerStyle}>
                  <img src={postData.postImg} width="1602" height="903" loading="lazy"
                    alt="Self-observation is the first step of inner unfolding" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-tag">
                      <a href="abc" class="span hover-2">{postData.category}</a>

                    </div>

                    <div class="wrapper">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span class="span">6 mins read</span>
                    </div>
                  </div>

                  <h3 class="headline headline-3">
                    <a href="abc" class="card-title hover-2">
                      {postData.name}
                    </a>
                  </h3>

                  <div class="card-wrapper">

                    <div class="profile-card">
                      <img src={postData.userImg} width="48" height="48" loading="lazy" alt="Joseph"
                        class="profile-banner"/>

                      <div>
                        <p class="card-title">{postData.userName}</p>

                        <p class="card-subtitle">{postData.createdAt}</p>
                      </div>
                    </div>

                    <a href="abc" class="card-btn">Read more</a>

                  </div>

                </div>

              </div>
            </li>
    </>
  )
}
