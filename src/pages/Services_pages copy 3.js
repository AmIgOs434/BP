
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
import { useEffect } from 'react';
export default function Services_pages() {
    const navigate = useNavigate()

      
    return (

        <div >
     <div id="progress">
    <span id="progress-value"><i class="bi bi-arrow-up-short"></i></span>
  </div>

  <header class="header">
          <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
              <a class="navbar-brand " href="#"><img src="images/logo/logo.png" class="logo img_filter" alt="LOGO"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list" id="menu"></i>
              </button>
              <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul class="navbar-nav ms-auto" id="navbar">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://localhost:3000" id="navbarDropdown" role="button">
                      Главная
                    </a>
               
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/About">О нас</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/Services">Услуги</a>
                  </li>
                 
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/Portfolio">Портфолио</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/Blog">Блог</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/ConcatUs">Контакты</a>
                  </li>
                </ul>
                <div class="d-flex ms-auto">
                  <a class="btn" href="register.html">Узнать больше</a>
                  <button id="mode-toggle" class="btn-light-mode switch-button"><i id="mode-icon"
                      class="bi bi-moon-fill"></i></button>
                </div>
              </div>
            </div>
          </nav>
        </header>

  <section class="breadcrumbs py-4" data-aos="fade-up" data-aos-delay="150">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">services</a></li>
        <li>single service</li>
      </ol>
      <h2 class="title">single service</h2>
      <p class="col-lg-10 col-12">
        Although, final stages of the internal network gives a complete experience of
        The Parameter of Speculative Environment
      </p>
    </div>
  </section>

  <div class="single-service">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7 col-12" data-aos="fade-right" data-aos-delay="200">
          <img src="images/service/banner-img2.png" alt="service-img"/>
          <h2 class="title my-2">Information about Services We Offer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            rerum beatae dolore quod molestias quos tempora veniam distinctio
            non, porro eum. Veniam corrupti veritatis ab maiores quod. Explicabo
            assumenda voluptate unde labore ratione saepe ab omnis quo sit? Atque eos eius hic
            iusto. Ullam distinctio delectus nobis atque! Ea, atque.</p>
          <p class="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            rerum beatae dolore quod molestias quos tempora veniam distinctio
            non, porro eum. Veniam corrupti veritatis ab maiores quod. Explicabo
            assumenda voluptate unde labore ratione saepe ab omnis quo sit? Atque eos eius hic
            iusto. Ullam distinctio delectus nobis atque! Ea, atque.</p>
          <img src="images/service/business-development-2885464-2409431.webp" alt="service-img"/>
          <h2 class="title my-2">Information about Services We Offer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            rerum beatae dolore quod molestias quos tempora veniam distinctio
            non, porro eum. Veniam corrupti veritatis ab maiores quod. Explicabo
            assumenda voluptate unde labore ratione saepe ab omnis quo sit? Atque eos eius hic
            iusto. Ullam distinctio delectus nobis atque! Ea, atque.</p>
          <div class="project-steps row g-2 my-4">
            <div class="col-lg-6 col-12 mx-auto ">
              <div class="box box-service ">
                <h3 class="title-2 my-2 "><span class="unique-text">1. </span>Latest Technologies</h3>
                <p>Lorem ipsur adipisicing elit. Optio under veniam distinctio
                  non, porro eum. Veniam corrupti veritatis ab</p>
              </div>
            </div>
            <div class="col-lg-6 col-12 mx-auto ">
              <div class="box box-service">
                <h3 class="title-2 my-2 "><span class="unique-text">2. </span>Delever Just On Time</h3>
                <p>Lorem ipsur adipisicing elit. Optio under veniam distinctio
                  non, porro eum. Veniam corrupti veritatis ab</p>
              </div>
            </div>
            <div class="col-lg-6 col-12 mx-auto">
              <div class="box box-service">
                <h3 class="title-2 my-2 "><span class="unique-text">3. </span>Powerful Strategies</h3>
                <p>Lorem ipsur adipisicing elit. Optio unde veniam distinctio
                  non, porro eum. Veniam corrupti veritatis ab</p>
              </div>
            </div>
            <div class="col-lg-6 col-12 mx-auto">
              <div class="box box-service">
                <h3 class="title-2 my-2 "><span class="unique-text">4. </span>Uniqe Solutions</h3>
                <p>Lorem ipsur adipisicing elit. Optio under veniam distinctio
                  non, porro eum. Veniam corrupti veritatis ab</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 service-side row g-2" data-aos="fade-left" data-aos-delay="200">
          <h2 class="title-2">list of services</h2>
          <div class="col-md-6 col-12 mx-auto service-box ">
            <div class="box box-service box-hover">
              <i class="bi bi-code-slash"></i>
              <h3 class="title-2 my-2 ">web developement</h3>
              <p>Lorem ipsur adipisicing elit. Optio under</p>
            </div>
          </div>
          <div class=" col-md-6 col-12 mx-auto service-box ">
            <div class="box box-service box-hover ">
              <i class="bi bi-megaphone-fill"></i>
              <h3 class="title-2 my-2 ">digital marketing</h3>
              <p>Lorem ipsur adipisicing elit. Optio unde,r</p>
            </div>
          </div>
          <div class=" col-md-6 col-12 mx-auto service-box">
            <div class="box box-service box-hover">
              <i class="bi bi-bug-fill"></i>
              <h3 class="title-2 my-2 ">SEO Services</h3>
              <p>Lorem ipsur adipisicing elit. Optio unde,</p>
            </div>
          </div>
          <div class=" col-md-6 col-12 mx-auto service-box">
            <div class="box box-service box-hover">
              <i class="bi bi-code-slash"></i>
              <h3 class="title-2 my-2 ">cyber security</h3>
              <p>Lorem ipsur adipisicing elit. Optio under</p>
            </div>
          </div>
          <div class=" col-md-6 col-12 mx-auto service-box">
            <div class="box box-service box-hover">
              <i class="bi bi-palette-fill"></i>
              <h3 class="title-2 my-2 ">graphic design</h3>
              <p>Lorem ipsur adipisicing elit. Optio under</p>
            </div>
          </div>
          <div class=" col-md-6 col-12 mx-auto service-box">
            <div class="box box-service box-hover">
              <i class="bi bi-android2"></i>
              <h3 class="title-2 my-2 ">apps developement</h3>
              <p>Lorem ipsur adipisicing elit. Optio under</p>
            </div>
          </div>
          <h2 class="title-2 mt-4">follow us</h2>
          <div class="row social">
            <div class="icon"><i class="bi bi-facebook"></i></div>
            <div class="icon mx-2"><i class="bi bi-instagram"></i></div>
            <div class="icon mx-2"><i class="bi bi-twitter "></i></div>
            <div class="icon mx-2"><i class="bi bi-youtube"></i></div>
          </div>
        </div>
      </div>


      <section class="container faq py-5">
        <div class="heading">
          <h4 class="pretitle" data-aos="fade-up">
            FAQ
          </h4>
          <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
            Frequently Asked Questions
          </h1>
          <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
            As a matter of fact the unification of the coherent software provides a strict control over
            The Accomplishment of Intended Estimation
          </p>
        </div>
        <div class="row justify-content-center align-items-center  gx-4 ">
          <div class="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <img src="images/faq/customer.png" alt="faq"/>
          </div>
          <div class="col-12 col-lg-6  ">
            <div class="col-12 my-4" data-aos="fade-up" data-aos-delay="250">
              <div class="box">
                <div class="d-flex w-100 justify-content-between">
                  <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon1')" href="#answer1" role="button"
                    aria-expanded="false">
                    <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                      Do you offer both on-site and remote IT support?
                      <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon1"></i>
                    </h4>
                  </a>
                </div>
                <p id="answer1" class="collapse">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ullam earum itaque, quas labore illo
                  eligendi iure asperiores, modi veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur
                  consequuntur facere?
                </p>
              </div>
            </div>
            <div class="col-12 my-4 " data-aos="fade-up" data-aos-delay="300">
              <div class="box">
                <div class="d-flex w-100 justify-content-between">
                  <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon2')" href="#answer2" role="button"
                    aria-expanded="false">
                    <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                      what is techida ?
                      <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon2"></i>
                    </h4>
                  </a>
                </div>
                <p id="answer2" class="collapse">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ullam earum itaque, quas labore illo
                  eligendi iure asperiores, modi veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur
                  consequuntur facere?
                </p>
              </div>
            </div>
            <div class="col-12 my-4 " data-aos="fade-up" data-aos-delay="350">
              <div class="box">
                <div class="d-flex w-100 justify-content-between">
                  <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon3')" href="#answer3" role="button"
                    aria-expanded="false">
                    <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                      Is There Any Updates In The Future ?
                      <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon3"></i>
                    </h4>
                  </a>
                </div>
                <p id="answer3" class="collapse">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ullam earum itaque, quas labore illo
                  eligendi iure asperiores, modi veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur
                  consequuntur facere?
                </p>
              </div>
            </div>
            <div class="col-12 my-4" data-aos="fade-up" data-aos-delay="400">
              <div class="box">
                <div class="d-flex w-100 justify-content-between">
                  <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon4')" href="#answer4" role="button"
                    aria-expanded="false">
                    <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                      How Much For The Service?
                      <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon4"></i>
                    </h4>
                  </a>
                </div>
                <p id="answer4" class="collapse">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ullam earum itaque, quas labore illo
                  eligendi iure asperiores, modi veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur
                  consequuntur facere?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>




  <div class="footer">
    <div class="container">
      <div class="row justify-content-center align-items-center g-4">
        <div class="col-12 col-lg-3 col-md-6 mx-auto my-4">
          <div class="box">
            <a href="#" class="logo "><img class="my-2" src="images/logo/logo.png" alt=""/></a>
            <p>Lorem ipsum dolor sit amet
              aspernatur exercitationem fugiat.</p>
            <h4 class="my-2">
              follow us
            </h4>
            <div class="social d-flex gap-2">
              <div class="icon"><i class="bi bi-facebook"></i></div>
              <div class="icon"><i class="bi bi-instagram"></i></div>
              <div class="icon"><i class="bi bi-twitter "></i></div>
              <div class="icon"><i class="bi bi-youtube"></i></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column my-4 gap-3">
          <h4>site map</h4>
          <ul class="d-flex flex-column gap-3">
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="index.html">home</a>
            </li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                href="about.html">about</a></li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                href="services.html">services</a></li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                href="contact.html">contact</a></li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column my-4 gap-3">
          <h4>follow us</h4>
          <ul class="d-flex flex-column gap-3">
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">facebook</a>
            </li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">instagram</a>
            </li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">linkedin</a></li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">x</a></li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column my-4 gap-3">
          <h4>our services</h4>
          <ul class="d-flex flex-column gap-3">
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">digital
                marketing</a>
            </li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">web
                developement</a>
            </li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">cyber
                security</a></li>
            <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="#">graphic
                design</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr/>
    <div class="copyrights ">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex justify-content-start">
            <p class="creadits">
              &copy; 2024
              Created by: <a href="#">erramix</a>
            </p>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-end">
            <div>
              <a href="terms-of-use.html">Terms of Use </a>
              | <a href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )}