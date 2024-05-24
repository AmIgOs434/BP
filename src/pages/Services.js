
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
import { useEffect } from 'react';
export default function Services() {
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
                    <a class="nav-link dropdown-toggle"  href="http://localhost:3000"id="navbarDropdown" role="button">
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

  <section class="breadcrumbs py-4" data-aos="fade-up" data-aos-delay="100">
    <div class="container">
      <ol>
        <li><a href="http://localhost:3000">Главная</a></li>
        <li>Услуги</li>
      </ol>
      <h2 class="title">Услуги</h2>
      <p class="col-lg-10 col-12">
      Хотя, заключительные этапы внутренней сети дают полное представление о параметрах спекулятивной среды
      </p>
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
              <img src="images/faq/customer.png" alt="faq" class='img_filter'/>
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
          <h4>Услуги</h4>
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