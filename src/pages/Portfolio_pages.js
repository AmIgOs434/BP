
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
import { useEffect } from 'react';
export default function Portfolio_pages() {
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


  <div class="single-service">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 col-12" data-aos="fade-right" data-aos-delay="150">
          <img src="images/service/banner-img2.png" alt="service-img"/>
          <h2 class="title my-2">Цели проекта</h2>
          <p>Закон, в котором говорится о долге, состоит в том, чтобы создать элиту. И снова я испытываю боль, когда молюсь о том, чтобы во времени не было различий. Я признаю коррупцию подлинной по отношению к другим людям. Можно ли предполагать сладострастие и трудиться в соответствии с тем, что происходит всегда? Как вы думаете, почему. Все, что нужно знать о благородном человеке, - это то, что нужно знать! Да, да, это то, что нужно знать.</p>
          <p class="my-2">Закон, в котором говорится о долге, состоит в том, чтобы создать элиту. И снова я испытываю боль, когда молюсь о том, чтобы во времени не было различий. Я признаю коррупцию подлинной по отношению к другим людям. Можно ли предполагать сладострастие и трудиться в соответствии с тем, что происходит всегда? Как вы думаете, почему. Все, что нужно знать о благородном человеке, - это то, что нужно знать! Да, да, это то, что нужно знать.</p>
          <img src="images/service/business-development-2885464-2409431.webp" alt="service-img"/>
          <p>Закон, в котором говорится о долге, состоит в том, чтобы создать элиту. И снова я испытываю боль, когда молюсь о том, чтобы во времени не было различий. Я признаю коррупцию подлинной по отношению к другим людям. Можно ли предполагать сладострастие и трудиться в соответствии с тем, что происходит всегда? Как вы думаете, почему. Все, что нужно знать о благородном человеке, - это то, что нужно знать! Да, да, это то, что нужно знать.</p>
          <div class="project-results row g-2 my-4">
            <h2 class="title my-2">Результаты проекта</h2>
            <div class="col-lg-6 col-12">
              <img src="images/portfolio/1.jpg" alt="portfolio-img"/>
            </div>
            <div class="col-lg-6 col-12">
              <img src="images/portfolio/6.jpg" alt="portfolio-img"/>
            </div>
            <div class="col-lg-6 col-12">
              <img src="images/portfolio/3.jpg" alt="portfolio-img"/>
            </div>
            <div class="col-lg-6 col-12">
              <img src="images/portfolio/2.jpg" alt="portfolio-img"/>
            </div>
          </div>

        </div>
        <div class="col-lg-3 col-sm-12 client-side row g-2" data-aos="fade-left" data-aos-delay="150">
          <div class="col-12">
            <div class="box row align-items-center justify-content-center">
              <div class="icon">
                <i class="bi bi-person-lines-fill"></i>
              </div>
              <div class="text">
                <h2 class="title-2 m-0">Клиент</h2>
                <h3>TSB</h3>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="box row align-items-center justify-content-center">
              <div class="icon">
                <i class="bi bi-list-check"></i>
              </div>
              <div class="text">
                <h2 class="title-2 m-0">Услуги</h2>
                <h3>Разработка мобильного приложения</h3>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="box row align-items-center justify-content-center">
              <div class="icon">
                <i class="bi bi-calendar2-check-fill"></i>
              </div>
              <div class="text">
                <h2 class="title-2 m-0">Дата</h2>
                <h3>10/04/2023</h3>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="box row align-items-center justify-content-center">
              <div class="icon">
                <i class="bi bi-stopwatch-fill"></i>
              </div>
              <div class="text">
                <h2 class="title-2 m-0">Сроки</h2>
                <h3>30 дней</h3>
              </div>
            </div>
          </div>
          <h2 class="title-2 mt-4">Подпишитесь</h2>
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