import React from 'react'
import img1 from '../images/pattern-2.svg'
import img2 from '../images/pattern-3.svg'
import img3 from '../images/shadow-1.svg'
import img4 from '../images//shadow-2.svg'
import img5 from '../images/hero-banner.png'
import img from '../images/homepage.png'

const Main = () => {
  return (
    <>
      <section class="hero" id="home" aria-label="home">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">Hello Everyone!</p>

            <h1 class="headline headline-1 section-title">
              I’m <span class="span">Wren Clark</span>
            </h1>

            <p class="hero-text">
              I use animation as a third dimension by which to simplify experiences and kuiding thro each and every
              interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div class="input-wrapper">

              <input type="email" name="email_address" placeholder="Type your email address" required
                class="input-field" autocomplete="off"/>

              <button class="btn btn-primary">
                <span class="span">Subscribe</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </button>

            </div>

          </div>

          <div class="hero-banner">  

            <img src={img} width="327" height="490" alt="Wren Clark" class="w-100"/>

            <img src={img1} width="27" height="26" alt="shape" class="shape shape-1"/>

            <img src={img2} width="27" height="26" alt="shape" class="shape shape-2"/>

          </div>

          <img src={img3} width="500" height="800" alt="" class="hero-bg hero-bg-1"/>

          <img src={img4} width="500" height="500" alt="" class="hero-bg hero-bg-2"/>

        </div>
      </section>
    </>
  )
}

export default Main
