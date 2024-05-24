
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
import { Helmet } from "react-helmet"
import { useEffect } from 'react';
export default function GlavPages() {
    const navigate = useNavigate()
    useEffect(()=>{
        $('.tipa').trigger('click');
    })
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     const script1 = document.createElement('script');
    //     const script2 = document.createElement('script');
    //     const script3 = document.createElement('script');
    //     const script4 = document.createElement('script');
    //     const script5 = document.createElement('script');
    //     const script6 = document.createElement('script');
    //     const script7= document.createElement('script');
    //     const script8 = document.createElement('script');
    //     const script9 = document.createElement('script');
    //     const script10 = document.createElement('script');
    //     const script11 = document.createElement('script');

    //     script.src = "./js/jquery-3.6.1.min.js";
    //     script1.src = "./js/bootstrap.min.js";
    //     script2.src = "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js";
    //     script3.src = "./js/owl.carousel.min.js";
    //     script4.src = "./js/aos.js";
    //     script5.src = "./js/gsap.min.js";
    //     script6.src = "./js/jquery.counterup.min.js";
    //     script7.src = "./js/jquery.waypoints.js";
    //     script8.src = "./js/particles.min.js";
    //     script9.src = "./js/isotope.min.js";
    //     script10.src = "./js/jquery.fancybox.min.js";
    //     script11.src = "./js/main.js";

    //     script.async = true;
    //     script1.async = true;
    //     script2.async = true;
    //     script3.async = true;
    //     script4.async = true;
    //     script5.async = true;
    //     script6.async = true;
    //     script7.async = true;
    //     script8.async = true;
    //     script9.async = true;
    //     script10.async = true;
    //     script11.async = true;

    //     document.body.appendChild(script);
    //     document.body.appendChild(script1);
    //     document.body.appendChild(script2);
    //     document.body.appendChild(script3);
    //     document.body.appendChild(script4);
    //     document.body.appendChild(script5);
    //     document.body.appendChild(script6);
    //     document.body.appendChild(script7);
    //     document.body.appendChild(script8);
    //     document.body.appendChild(script9);
    //     document.body.appendChild(script10);
    //     document.body.appendChild(script11);

    //     return () => {
    //       document.body.removeChild(script);
    //       document.body.removeChild(script1);
    //       document.body.removeChild(script2);
    //       document.body.removeChild(script3);
    //       document.body.removeChild(script4);
    //       document.body.removeChild(script5);
    //       document.body.removeChild(script6);
    //       document.body.removeChild(script7);
    //       document.body.removeChild(script8);
    //       document.body.removeChild(script9);
    //       document.body.removeChild(script10);
    //       document.body.removeChild(script11);
    //     }
    //   }, []);
    

      
    

    return (

        <div class="home-1">

        {/* <div id="preloader">
          <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
            <defs>
              <radialGradient id="mainGrad" cx="400" cy="300" fx="400" fy="300" r="100" gradientUnits="userSpaceOnUse">
                <stop offset=".68" stop-color="#21df51" />
                <stop offset=".72" stop-color="#3add63" />
                <stop offset=".77" stop-color="#4fdd73" />
                <stop offset=".82" stop-color="#66db83" />
                <stop offset=".88" stop-color="#7cd893" />
                <stop offset=".93" stop-color="#95d8a6" />
                <stop offset=".99" stop-color="#bde6c7" />
                <stop offset="1" stop-color="#e3f1e7" />
              </radialGradient>
            </defs>
            <circle id="fillDot" cx="400" cy="300" fill="#21df51" r="100" />
            <circle id="gradDot" cx="400" cy="300" fill="url(#mainGrad)" r="100" />
          </svg>
        </div> */}
        
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
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
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
        
        <section class="hero d-flex flex-column justify-content-center align-items-center mt-5 pt-5" id="hero">
          <div id="particles-js"></div>
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="hero-text col-12 col-lg-5">
                <div class="row">
                  <div class="col-12 ">
                    <h1 class="title col-12" data-aos="fade-up" data-aos-delay="150">Отличные IT <span
                        class="unique-text">Решения</span> Для Вашего Успеха</h1>
                  </div>
                  <div class="col-lg-10 col-12" data-aos="fade-up" data-aos-delay="200">
                    <p>
                      Ключ К Успеху В Любом Бизнесе - Это Понимание Своих Клиентов Плюс Современные Инструменты. Наша Компания Предоставляет Решение Обоих Вопросов.
                    </p>
                  </div>
                  <div class="col-10" data-aos="fade-up" data-aos-delay="250">
                    <a href="#" class="btn">Оставить заявку</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-7 mx-md-auto text-center" data-aos="fade-left" data-aos-delay="100">
                <div class="hero-image">
                  <div class="hero-img">
                    <img class="img-fluid img_filter" alt="hero-img"
                      src="images/hero/bodigmas_IT_solutions_company_illustrationvectorflat_designmini_942ad818-e3f4-47af-a5e8-78e030aff9c9-removebg.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container services py-5" id="services">
        
        
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              НАШИ УСЛУГИ
            </h4>
            <h1 class="title col-lg-10 col-12" data-aos="fade-up" data-aos-delay="100">
              Что мы предлагаем?
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              BASE POINT обеспечивает строгий контроль за достижением наилучших результатов
            </p>
          </div>
          <div class="row gy-4 gx-4 ">
            <div class="col-md-6 col-12 col-lg-4 mx-auto ">
              <div class="box box-service box-hover" data-aos="fade-right" data-aos-delay="250">
                <div class="box-icon my-2">
                  <i class="bi bi-code-slash"></i>
                </div>
                <h2 class="title-2 my-2 ">Веб-разработка</h2>
                <p>Разработка веб-приложений, сайтов, порталов любой сложности: от простого сайта-визитки или интернет-магазина до сложного и высоконагруженного сервиса.</p>
                <a href="http://localhost:3000/Services_pages" class="my-2 learn-more">Узнать больше <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
        
        
            <div class="col-md-6 col-lg-4 mx-auto" data-aos="fade-left" data-aos-delay="250">
              <div class="box box-service  box-hover">
                <div class="box-icon my-2">
                  <i class="bi bi-search"></i>
                </div>
                <h2 class="title-2 my-2 ">SEO-услуги</h2>
                <p>Мы с удовольствием поможем Вам не только создать приложение или сайт, но и готовы взять на себя работы по его продвижению и поддержке.</p>
                <a href="service-single.html" class="my-2 learn-more">Узнать больше <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
        
        
        
            <div class=" col-md-6 col-lg-4 mx-auto" data-aos="fade-up" data-aos-delay="300">
              <div class="box  box-service box-hover">
                <div class="box-icon my-2">
                  <i class="bi bi-palette-fill"></i>
                </div>
                <h2 class="title-2 my-2 ">Графический дизайн</h2>
                <p>Создание визуальной атмосферы для компаний, продуктов и проектов, которая позволит увеличить количество клиентов и продаж.</p>
                <a href="service-single.html" class="my-2 learn-more">Узнать больше <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div class=" col-md-6  col-lg-4 mx-auto ">
              <div class="box box-service box-hover" data-aos="fade-left" data-aos-delay="350">
                <div class="box-icon my-2">
                  <i class="bi bi-android2"></i>
                </div>
                <h2 class="title-2 my-2 ">Мобильная разработка</h2>
                <p>Мы занимаемся разработкой мобильных приложений под IOS и Android, для планшетов и телефонов.</p>
                <a href="service-single.html" class="my-2 learn-more">Узнать больше <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>
        
        <section class="about py-5 mt-5" id="about">
          <div class="container">
            <div class="row mt-5 justify-content-center align-items-center">
              <div class="col-12 col-lg-6">
                <h4 class="pretitle" data-aos="fade-up" data-aos-delay="200">
                  О НАС
                </h4>
                <h1 class="title col-12" data-aos="fade-up" data-aos-delay="250">
                  Вместе Мы Кодируем Будущее <span class="unique-text">2015</span>
                </h1>
                <p class="col-lg-10 col-12" data-aos="fade-up" data-aos-delay="300">
                  BASE POINT - это инновационный технологический партнер, который помогает бизнесам достигать высших целей с помощью передовых it-решений. наша команда состоит из опытных специалистов, готовых воплотить любую идею в реальность и обеспечить бесперебойную поддержку наших клиентов. мы стремимся к постоянному развитию, следя за последними тенденциями, и готовы предложить индивидуальные решения для каждой отрасли бизнеса. с нами ваш бизнес будет на шаг впереди конкурентов!
                </p>
                <a href="#" class="btn" data-aos="fade-up" data-aos-delay="350">Узнать больше</a>
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center" data-aos="fade-left" data-aos-delay="100">
                <img src="images/about/1.png" alt="about-img" class='img_filter'/>
              </div>
            </div>
            <div class="row mt-5 py-4 justify-content-center align-items-center">
          
              <div class="col-12 col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                <img src="images/about/2.png" alt="about-img" class='img_filter'/>
              </div>
              <div class="col-12 col-lg-6">
                <h1 class="title col-12" data-aos="fade-up" data-aos-delay="200">
                  Инновации, интеграция, развитие: <span class="unique-text">Ваш Партнер По IT-Решениям</span>
                </h1>
                <p class="col-lg-10 col-12" data-aos="fade-up" data-aos-delay="250">
                  Постоянно совершенствуемся и развиваемся, чтобы оставаться на передовой и удовлетворять потребности наших клиентов в самые короткие сроки
                </p>
                <div class="row gx-2 gy-2 col-12">
                  <div class="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="box box-hover">
                      <i class="bi bi-map-fill"></i>
                      <h5 class="mx-4 title-2 fw-bold">Услуги по всему миру</h5>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="350">
                    <div class="box box-hover">
                      <i class="bi bi-headset"></i>
                      <h5 class="mx-4 title-2 fw-bold">Всегда на связи</h5>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
                    <div class="box box-hover">
                      <i class="bi bi-controller"></i>
                      <h5 class="mx-4 title-2  fw-bold">Четко соблюдаем сроки</h5>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="450">
                    <div class="box box-hover">
                      <i class="bi bi-star-fill"></i>
                      <h5 class="mx-4 title-2 fw-bold">Работаем на качество</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
        
          </div>
        </section>
        
        <section class="counter-up my-5" data-aos="fade-up" data-aos-delay="100">
          <div class="container">
            <div class="row">
              <div class="col-lg-3  col-12 mt-5 mt-lg-0" data-aos="fade-right" data-aos-delay="200">
                <i class="ri-discuss-line icon"></i>
                <h1 class="counter">350</h1>
                <h2 class="title-2">Счастливых клиентов</h2>
              </div>
              <div class="col-lg-3 col-12 mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="250">
                <i class="ri-discuss-line icon"></i>
                <h1 class="counter">20</h1>
                <h2 class="title-2">Трудоголиков</h2>
              </div>
              <div class="col-lg-3 col-12 mt-5 mt-lg-0" data-aos="fade-down" data-aos-delay="250">
                <i class="ri-discuss-line icon"></i>
                <h1 class="counter">390</h1>
                <h2 class="title-2">Проектов</h2>
              </div>
              <div class="col-lg-3 col-12 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                <i class="ri-discuss-line icon"></i>
                <div class="counter">10</div>
                <div class="title-2">Лет опыта</div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container why-choose-us py-5">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              НАШИ ЦЕННОСТИ
        
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Почему Клиенты Выбирают Нас
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              Наша команда профессионалов обладает высокими навыками и опытом, чтобы обеспечить клиентов инновационными и надежными решениями для их бизнеса
            </p>
          </div>
          <div class="row  gy-4 gx-4 ">
            <div class="col-md-6 col-lg-4 mx-auto" data-aos="fade-right" data-aos-delay="250">
              <div class="box">
                <h1 class="my-4">01.</h1>
                <h2 class="title-2 my-2 ">Новейшие Технологии</h2>
                <p>
                  У нас работают специалисты с многолетним опытом, предлагая клиентам современные решения, которые помогают им быть на шаг впереди конкурентов.
                </p>
              </div>
            </div>
            <div class="col-md-6  col-lg-4 mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div class="box">
                <h1 class="my-4">02.</h1>
                <h2 class="title-2 my-2 ">Уникальные Решения
                </h2>
                <p>
                  Мы стремимся понять потребности каждого клиента и целевой аудитории его бизнеса, чтобы добиться максимально эффективного результата в кратчайшие сроки.
        
                </p>
              </div>
            </div>
            <div class="col-md-6  col-lg-4 mx-auto" data-aos="fade-left" data-aos-delay="250">
              <div class="box">
                <h1 class="my-4">03.</h1>
                <h2 class="title-2 my-2 ">Качественный Сервис
                </h2>
                <p>
                  Наша компания работает сообща, предоставляя высококачественные it-услуги с гарантированным результатом, что делает нас надежным партнером для клиентов.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
        <section class="container portfolio py-5" id="portfolio">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              ПОРТФОЛИО
        
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Наше Портфолио
        
            </h1>
          </div>
          <ul class="filters  d-flex my-4" data-aos="fade-up" data-aos-delay="150">
            <li class="nav-item portfolio-btn active">
              <a class="nav-link tipa" data-filter="*">Все</a>
            </li>
            <li class="nav-item portfolio-btn mx-lg-3 mx-1">
              <a class="nav-link" data-filter=".mobile">Приложения</a>
            </li>
        
            <li class="nav-item portfolio-btn mx-lg-3 mx-1 ">
              <a class="nav-link" data-filter=".web">Сайты</a>
            </li>
          </ul>
          <div class="row portfolio-row gy-4 gx-4" data-aos="fade-up" data-aos-delay="150">
            <div class="col-md-6  col-lg-4 mx-auto mobile ">
              <a href="images/portfolio/1.jpg" class="gallery-item" data-fancybox="gallery" data-caption="MOBILE">
                <div class="portfolio-item">
                  <img src="images/portfolio/1.jpg" class="gallery-item" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>tansiApp</h3>
                      <h6>mobile application</h6>
                      <div class="d-flex tags my-2">
                        <span>#react</span>
                        <span>#HTML</span>
                        <span>#next_js</span>
                        <span>#node</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class=" col-md-6  col-lg-4 mx-auto mobile">
              <a href="images/portfolio/2.jpg" class="gallery-item" data-fancybox="gallery"
                data-caption="tansiApp | mobile application">
                <div class="portfolio-item">
                  <img src="images/portfolio/2.jpg" class="gallery-item" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>tansiApp</h3>
                      <h6>mobile application</h6>
                      <div class="d-flex tags col-10 my-2">
                        <span>#js</span>
                        <span>#HTML</span>
                        <span>#next_js</span>
                        <span>#node</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class=" col-md-6  col-lg-4 mx-auto web">
              <a href="images/portfolio/3.jpg" class="gallery-item" data-fancybox="gallery"
                data-caption="imolas | mobile application">
                <div class="portfolio-item">
                  <img src="images/portfolio/3.jpg" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>imolas</h3>
                      <h6>mobile application</h6>
                      <div class="d-flex tags my-2">
                        <span>#redux</span>
                        <span>#HTML</span>
                        <span>#next_js</span>
                        <span>#gsap</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6  col-lg-4 mx-auto data web ">
              <a href="images/portfolio/4.png" class="gallery-item" data-fancybox="gallery"
                data-caption="abertonApp | mobile application">
                <div class="portfolio-item">
                  <img src="images/portfolio/4.png" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>abertonApp</h3>
                      <h6>mobile application</h6>
                      <div class="d-flex tags my-2">
                        <span>#react</span>
                        <span>#HTML</span>
                        <span>#next_js</span>
                        <span>#node</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="  col-md-6  col-lg-4 mx-auto hosting web  ">
              <a href="images/portfolio/5.jpeg" class="gallery-item" data-fancybox="gallery"
                data-caption="taknaruytApp | web application">
                <div class="portfolio-item">
                  <img src="images/portfolio/5.jpeg" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>taknaruytApp</h3>
                      <h6>web application</h6>
                      <div class="d-flex tags my-2">
                        <span>#react</span>
                        <span>#PHP</span>
                        <span>#next_js</span>
                        <span>#node</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="  col-md-6  col-lg-4 mx-auto data">
              <a href="images/portfolio/6.jpg" class="gallery-item" data-fancybox="gallery"
                data-caption="bodihApp | web application">
                <div class="portfolio-item">
                  <img src="images/portfolio/6.jpg" alt="portfolio-img"/>
                  <div class="img-overlay">
                    <div class="content">
                      <h3>bodihApp</h3>
                      <h6>web application</h6>
                      <div class="d-flex tags my-2">
                        <span>#react</span>
                        <span>#HTML</span>
                        <span>#ruby</span>
                        <span>#node</span>
                      </div>
                      <h4><a class="unique-text" href="portfolio-single.html"><i class="bi bi-eye-fill mx-2"></i>view
                          project</a></h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        
        
        
        
        
        
        
        <section class="container pricing py-5" id="pricing">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
        ЦЕННОСТЬ
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Наши Цены
        
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              Мы постоянно работаем над тем, чтобы вы могли получить качественные услуги и профессиональное обслуживание по приемлемым ценам
            </p>
            <div class="row  gy-4 gx-4 ">
              <div class="col-md-6 col-lg-3 mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                  <i class="bi bi-cart4 my-4"></i>
                  <h1 class="my-2 title-2 ">Разработка Веб-Приложения</h1>
                  <h2 class="price">От 79 900 ₽</h2>
                  <h3>Все Включено</h3>
           
                  <a href="#" class="btn my-4">Оставить заявку</a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 mx-auto" data-aos="fade-up" data-aos-delay="250">
                <div class="box">
                  <i class="bi bi-coin my-4"></i>
                  <h1 class="my-2 title-2 ">SEO-Продвижение</h1>
                  <h2 class="price">От 19 900 ₽</h2>
                  <h3>До Результата</h3>
         
                  <a href="#" class="btn my-4">Оставить заявку</a>
                </div>
              </div>
              <div class="  col-md-6  col-lg-3 mx-auto" data-aos="fade-up" data-aos-delay="300">
                <div class="box" id="table3">
                  <i class="bi bi-cash my-4"></i>
                  <h1 class="my-2 title-2 ">Разработка Сайта</h1>
                  <h2 class="price">от 69 900 ₽</h2>
                  <h3>Все Включено</h3>
        
                  <a href="#" class="btn my-4">Оставить заявку</a>
                </div>
              </div>
              <div class="  col-md-6  col-lg-3 mx-auto" data-aos="fade-up" data-aos-delay="350">
                <div class="box">
                  <i class=" bi bi-cash-coin my-4"></i>
                  <h1 class="my-2 title-2 ">Графический Дизайн
                  </h1>
                  <h2 class="price">От 29 900 ₽</h2>
                  <h3>Все Включено</h3>
        
                  <a href="#" class="btn my-4">Оставить заявку</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container testimonials py-5">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              мнение
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Отзывы клиентов
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              Благодарим всех наших клиентов за выбор BASE POINT и надеемся на долгое сотрудничество!
            </p>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="200">
            <div class="owl-carousel testimonial owl-theme">
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4 ">
                      <img class="rounded-circle" src="images/testimonials/testimonials-1.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Юрий 
                      </h1>
                      <div class=" justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>Качественно и быстро сделали приложение, все по тз. Спасибо за работу</p>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4">
                      <img class="rounded-circle" src="images/testimonials/testimonials-2.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Антон
                      </h1>
                      <div class=" justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                      </div>
                    </div>
                  </div>
                  <p>Быстро договорились, было много вопросов, но работа полностью устроила. Сделали в кратчайшие сроки, я на это даже не надеялся, спасибо.</p>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4">
                      <img class="rounded-circle" src="images/testimonials/testimonials-5.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Александр
                      </h1>
                      <div class="justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>Исполнителем полностью доволен. Быстро ответили. Оперативно обозначили возможные варианты работы, я выбрал мне подходящий. Работа сделана быстро и качественно!</p>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4">
                      <img class="rounded-circle" src="images/testimonials/testimonials-3.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Сергей
                      </h1>
                      <div class="justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>Заказывал сайт визитку. Все сделали в оговоренные сроки, учли все просьбы. Даже исправили мои собственные ошибки. Отличные специалисты, профессионалы. Всем рекомендую</p>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4">
                      <img class="rounded-circle" src="images/testimonials/testimonials-4.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Анонимно
                      </h1>
                      <div class=" justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>Ребята, искренне благодарю вас за выполненную работу, просто уникальные в наше время!!! Очень доволен вашей работой!!</p>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="d-flex justify-content-center align-items-center m-2">
                    <div class="col-2 ms-4">
                      <img class="rounded-circle" src="images/testimonials/testimonials-5.jpg" alt="testimonial-img"/>
                    </div>
                    <div class="col-10 d-flex flex-column mx-4">
                      <h1 class="title-2">
                        Дарья Поликарпова
                      </h1>
                      <div class="justify-content-between">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-center">Все на уровне!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container blog py-5" id="blog">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              Блог
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Наши статьи
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              Мы стремимся становиться лучше для Вас! Заходи в наш блог и читай полезные статьи для твоего бизнеса 
            </p>
          </div>
        
          <div class="row  gy-4 gx-4 ">
            <div class="col-lg-4 col-md-6 col-12 mx-auto" data-aos="fade-right" data-aos-delay="250">
              <div class="box card border-0">
                <div class="col-12">
                  <img src="images/blog/post-images/1.jpg" alt="blog-img"/>
                </div>
                <div class="card-body">
                  <div class="info d-flex justify-content-between">
                    <h3><i class="bi bi-person-fill title-2 mx-2"></i>BasePoint</h3>
                    <h3> <i class="bi bi-calendar-date-fill title-2 mx-2"></i>24/05/2024</h3>
                    {/* <h3> <i class="bi bi-tag-fill title-2 mx-2"></i>web dev</h3> */}
                  </div>
                  <h1 class="title-2 mt_">
                    Принципы успешного бизнеса
                  </h1>
                  <p class='mt_mb'>
                  Современный бизнес не может существовать без использования технологий, в том
числе мобильных приложений. Успешное приложение может значительно повысить
эффективность ...
                    
                    </p>
                  <a class="learn-more" href="http://localhost:3000/Blog_pages">
                  Читать далее <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
        
            <div class=" col-lg-4 col-md-6 col-12 mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div class="box card border-0">
                <div class="col-12">
                  <img src="images/blog/post-images/2.jpg" alt="blog-img"/>
                </div>
                <div class="card-body">
                  <div class="info d-flex justify-content-between">
                    <h3><i class="bi bi-person-fill title-2 mx-2"></i>BasePoint</h3>
                    <h3> <i class="bi bi-calendar-date-fill title-2 mx-2"></i>24/05/2024</h3>
                    {/* <h3> <i class="bi bi-tag-fill title-2 mx-2"></i>web dev</h3> */}
                  </div>
                  <h1 class="title-2 mt_">
                  Почему вам следует изучить этот новый фреймворк javascript

                  </h1>
                  <p class='mt_mb'>Я должен знать, что происходит, и должен быть уверен в том, что ты принадлежишь к высшей элите.
 Объяснимо ли это,
что мы предполагаем, что у нас нет взаимных претензий, или что мы совершаем сладострастные поступки, или что мы совершаем преступления?</p>
                  <a class="learn-more" href="blog-single.html">
                    Читать далее <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class=" col-lg-4 col-md-6 col-12 mx-auto" data-aos="fade-left" data-aos-delay="250">
              <div class="box card border-0">
                <div class="col-12">
                  <img src="images/blog/post-images/3.jpg" alt="blog-img"/>
                </div>
                <div class="card-body">
                  <div class="info d-flex justify-content-between">
                    <h3><i class="bi bi-person-fill title-2 mx-2"></i>BasePoint</h3>
                    <h3> <i class="bi bi-calendar-date-fill title-2 mx-2"></i>24/05/2024</h3>
                    {/* <h3> <i class="bi bi-tag-fill title-2 mx-2"></i>marketing</h3> */}
                  </div>
                  <h1 class="title-2 mt_">
                  Что такое цифровой маркетинг и почему он важен?

                  </h1>
                  <p class='mt_mb'>Я должен знать, что происходит, и должен быть уверен в том, что ты принадлежишь к высшей элите.
 Объяснимо ли это,
что мы предполагаем, что у нас нет взаимных претензий, или что мы совершаем сладострастные поступки, или что мы совершаем преступления?</p>
                  <a class="learn-more" href="blog-single.html">
                  Читать далее <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container faq py-5">
          <div class="heading">
            <h4 class="pretitle" data-aos="fade-up">
              FAQ
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Часто задаваемые вопросы
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              Здесь мы собрали самые частые вопросы и ответы на них. Интересует что-то еще? Оставь заявку, и мы с радостью все расскажем!
            </p>
          </div>
          <div class="row justify-content-center align-items-center  gx-4 ">
            <div class="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <img src="images/faq/customer.png" class='img_filter'alt="faq"/>
            </div>
            <div class="col-12 col-lg-6  ">
              <div class="col-12 my-4" data-aos="fade-up" data-aos-delay="250">
                <div class="box">
                  <div class="d-flex w-100 justify-content-between">
                    <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon1')" href="#answer1" role="button"
                      aria-expanded="false">
                      <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                        Какие услуги предлагает ваша компания по IT-решениям?
                        <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon1"></i>
                      </h4>
                    </a>
                  </div>
                  <p id="answer1" class="collapse">
                    Мы предлагаем широкий спектр услуг, включая разработку сайтов, веб-приложений, SEO-продвижение. Если Вы не увидели Ваш запрос на сайте, оставьте заявку, и мы в индивидуальном порядке рассмотрим Вашу задачу!
                  </p>
                </div>
              </div>
              <div class="col-12 my-4 " data-aos="fade-up" data-aos-delay="300">
                <div class="box">
                  <div class="d-flex w-100 justify-content-between">
                    <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon2')" href="#answer2" role="button"
                      aria-expanded="false">
                      <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                        Как ваши IT-решения могут помочь моему бизнесу ?
                        <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon2"></i>
                      </h4>
                    </a>
                  </div>
                  <p id="answer2" class="collapse">
                    Наши IT-решения могут помочь Вашему бизнесу, оптимизируя Вашу IT-инфраструктуру, повышая операционную эффективность, продвигая инновации и поддерживая Ваши стратегические цели.
        
        
                  </p>
                </div>
              </div>
              <div class="col-12 my-4 " data-aos="fade-up" data-aos-delay="350">
                <div class="box">
                  <div class="d-flex w-100 justify-content-between">
                    <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon3')" href="#answer3" role="button"
                      aria-expanded="false">
                      <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                        В каких отраслях вы специализируетесь ?
                        <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon3"></i>
                      </h4>
                    </a>
                  </div>
                  <p id="answer3" class="collapse">
                    Мы специализируемся на обслуживании предприятий в различных отраслях, включая здравоохранение, финансы, производство, розничную торговлю, образование и многое другое. Наши индивидуальные IT-решения разработаны для удовлетворения уникальных потребностей и задач каждой отрасли.
        
        
                  </p>
                </div>
              </div>
              <div class="col-12 my-4" data-aos="fade-up" data-aos-delay="400">
                <div class="box">
                  <div class="d-flex w-100 justify-content-between">
                    <a data-bs-toggle="collapse" class="w-100" onclick="rotateIcon('icon4')" href="#answer4" role="button"
                      aria-expanded="false">
                      <h4 class="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                        Вы предлагаете индивидуальные IT-решения?
                        <i class="bi bi-chevron-compact-down mx-4 rotate-icon" id="icon4"></i>
                      </h4>
                    </a>
                  </div>
                  <p id="answer4" class="collapse">
                    Да, мы понимаем, что у каждого бизнеса есть уникальные IT-требования, своя "изюминка". Вот почему мы предлагаем индивидуальные IT-решения, адаптированные к Вашим конкретным потребностям, целям и бюджету.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="container contact py-5" id="contact">
          <div class="heading ">
            <h4 class="pretitle" data-aos="fade-up">
              наши контакты
            </h4>
            <h1 class="title col-12" data-aos="fade-up" data-aos-delay="100">
              Свяжитесь с нами по любым вопросам!
            </h1>
            <p class="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
              С радостью проведем Вам бесплатную консультацию. Оставляйте заявку, и в ближайшее время мы с Вами свяжемся
            </p>
          </div>
          <div class="row  gx-4 ">
            <div class="col-12 col-lg-6 gy-3">
              <h2 class="title-2 " data-aos="fade-right" data-aos-delay="200">
                Контакты :
              </h2>
              <div class="info d-flex my-4 " data-aos="fade-right" data-aos-delay="250">
                <h5><i class="bi bi-envelope-fill mx-4"></i>BasePoint@gmail.com</h5>
              </div>
              <div class="info d-flex my-4 " data-aos="fade-up" data-aos-delay="300">
                <h5><i class="bi bi-phone-fill mx-4"></i>+7 (996) 785 40 60</h5>
              </div>
              <div class="info d-flex my-4 " data-aos="fade-up" data-aos-delay="350">
                <h5><i class="bi bi-geo-alt-fill mx-4"></i>A108 Adam Street, New York, NY 535022</h5>
              </div> 
              <div class="info d-flex my-4 " data-aos="fade-up" data-aos-delay="400">
                <h5><i class="bi bi-instagram mx-4"></i>BASE POINT</h5>
              </div>
            </div>
            <div class="col-12 col-lg-6">
          
              <form class="main-form" id="contact-us-form" action="contact.php" method="post">
                <div class="col-12">
                  <div class="row g-3 mb-1">
                    <div class="col-lg-6 col-12" data-aos="fade-right" data-aos-delay="200">
                      <input placeholder="name" type="text" id="name" name="name" required class="text-input"/>
                    </div>
                    <div class="col-lg-6 col-12" data-aos="fade-left" data-aos-delay="200">
                      <input placeholder="subject" type="text" id="subject" name="subject" required class="text-input"/>
                    </div>
                  </div>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-delay="250">
                  <input placeholder="email" type="email" id="email" name="email" required class="text-input my-2"/>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                  <textarea placeholder="message" class="text-input my-2" rows="7" cols="30" id="message" name="message"
                    required></textarea>
                </div>
                <div class="col-12" data-aos="fade-up" data-aos-delay="350">
                  <button type="submit" value="Submit" class="btn">Отправить форму</button>
                </div>
              </form>
            </div>
          </div>
          {/* <iframe class="contact-map" data-aos="fade-up" data-aos-delay="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335"
            allowfullscreen=""></iframe> */}
        </section>
        
        <div class="footer">
          <div class="container">
            <div class="row justify-content-center align-items-center g-4">
              <div class="col-12 col-lg-3 col-md-6 mx-auto my-4">
                <div class="box">
                  <a href="#" class="logo "><img class="my-2" src="images/logo/logo.png" alt=""/></a>
                  <p class='cla' >Откройте мир технологий 
                    Вместе с BASE POINT</p>
                  <h4 class="my-2">
                    Подпишитесь
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
                <h4>Карта сайта</h4>
                <ul class="d-flex flex-column gap-3">
                  <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a href="http://localhost:3000/">Главная</a>
                  </li>
                  <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                      href="http://localhost:3000/About">О нас</a></li>
                  <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                      href="http://localhost:3000/Services">Услуги</a></li>
                  <li class="d-flex align-items-center gap-2"><i class="bi bi-chevron-right"></i><a
                      href="http://localhost:3000/ConcatUs">Контакты</a></li>
                </ul>
              </div>
              <div class="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column my-4 gap-3">
                <h4>Подпишитесь</h4>
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
                <h4>Наши услуги</h4>
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