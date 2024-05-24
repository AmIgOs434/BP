
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
import { useEffect } from 'react';
export default function Blog_pages() {
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
        <li><a href="http://localhost:3000/Blog">Блог</a></li>
        <li>Принципы успешного...</li>
      </ol>
      <h2 class="title">Принципы успешного приложения для бизнеса</h2>
      <p class="col-lg-10 col-12">
      Современный бизнес не может существовать без использования технологий, в том
числе мобильных приложений. Успешное приложение может значительно повысить
эффективность работы компании, улучшить обслуживание клиентов и увеличить
прибыль. Однако, чтобы создать такое приложение, необходимо придерживаться
определенных принципов.
      </p>
    </div>
  </section>

  <section id="blog" class="blog mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 entries" data-aos="fade-right" data-aos-delay="150">
          <article class="entry entry-single">
            <div class="entry-img">
              <img src="images/blog/post-images/1.jpg" alt="post-image" class="img-fluid"/>
            </div>
            <h2 class="entry-title">
              <a href="blog-single.html">Принципы успешного приложения для бизнеса</a>
            </h2>
            <div class="entry-meta">
              <ul>
                <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John
                    Doe</a></li>
                <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time
                      datetime="2024-01-01">Jan 1, 2024</time></a></li>
                <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12
                    Comments</a></li>
              </ul>
            </div>
            <div class="entry-content">
              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                laboriosam eius aut nostrum quidem aliquid dicta.
                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos
                aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
              </p>
              <p>
                Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel
                aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
              </p>

              <p>
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident
                voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis.
                Voluptate ex rerum assumenda dolores nihil quaerat.
                Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum.
                Omnis dolorum exercitationem harum qui qui blanditiis neque.
                Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel
                magnam quod et tempora deleniti error rerum nihil tempora.
              </p>
              <h3>Et quae iure vel ut odit alias.</h3>
              <p>
                Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio
                provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam
                perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione
                aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus
                aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam
                voluptatem voluptatem accusamus mollitia aut atque aut.
              </p>
              <img src="images/blog/post-images/2.jpg" class="img-fluid" alt="post-image"/>
              <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
              <p>
                Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a
                id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non
                placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex
                libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
              </p>
              <p>
                Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit
                eaque mollitia nisi asperiores est veniam.
              </p>
            </div>
            <div class="entry-footer">
              <i class="bi bi-folder"></i>
              <ul class="cats">
                <li><a href="#">Business</a></li>
              </ul>
              <i class="bi bi-tags"></i>
              <ul class="tags">
                <li><a href="#">Creative</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>
          </article>

          <div class="blog-author d-flex align-items-center">
            <img src="images/team/team-1.jpg" class="rounded-circle float-left" alt="author-img"/>
            <div>
              <h4>Jane Smith</h4>
              <div class="social-links">
                <a href="https://twitters.com/#"><i class="bi bi-twitter"></i></a>
                <a href="https://facebook.com/#"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/#"><i class="biu bi-instagram"></i></a>
              </div>
              <p>
                Itaque eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas.
                Esse et accusantium ut unde voluptas.
              </p>
            </div>
          </div>
          {/* <div class="blog-comments">
            <h4 class="comments-count">8 Comments</h4>
            <div id="comment-1" class="comment">
              <div class="d-flex">
                <div class="comment-img"><img src="images/team/team-2.jpg" alt="comment-img"/></div>
                <div>
                  <h5><a href="">Georgia Reader</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a>
                  </h5>
                  <time datetime="2024-01-01">01 Jan, 2024</time>
                  <p>
                    Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis
                    molestiae est qui cum soluta.
                    Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                  </p>
                </div>
              </div>
            </div>
            <div id="comment-2" class="comment">
              <div class="d-flex">
                <div class="comment-img"><img src="images/team/team-3.jpg" alt="comment-img"/></div>
                <div>
                  <h5><a href="">Aron Alvarado</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a>
                  </h5>
                  <time datetime="2024-01-01">01 Jan, 2024</time>
                  <p>
                    Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut
                    beatae.
                  </p>
                </div>
              </div>

              <div id="comment-reply-1" class="comment comment-reply">
                <div class="d-flex">
                  <div class="comment-img"><img src="images/testimonials/testimonials-3.jpg" alt="comment-img"/></div>
                  <div>
                    <h5><a href="">john smith</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a>
                    </h5>
                    <time datetime="2024-01-01">01 Jan, 2024</time>
                    <p>
                      Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia
                      mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat
                      maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                      Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum.
                      Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum.
                      Expedita et dignissimos distinctio laborum minima fugiat.

                      Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem
                      quisquam vero rerum neque.
                    </p>
                  </div>
                </div>

                <div id="comment-reply-2" class="comment comment-reply">
                  <div class="d-flex">
                    <div class="comment-img"><img src="images/testimonials/testimonials-2.jpg" alt="comment-img"/></div>
                    <div>
                      <h5><a href="">Sianna Ramsay</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i>
                          Reply</a></h5>
                      <time datetime="2024-01-01">01 Jan, 2024</time>
                      <p>
                        Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut
                        unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat
                        quisquam possimus. Perferendis id consectetur necessitatibus.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div id="comment-3" class="comment">
              <div class="d-flex">
                <div class="comment-img"><img src="images/testimonials/testimonials-1.jpg" alt="comment-img"/></div>
                <div>
                  <h5><a href="">Nolan Davidson</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a>
                  </h5>
                  <time datetime="2024-01-01">01 Jan, 2024</time>
                  <p>
                    Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium
                    tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus
                    iste at.
                    Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia
                    beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum
                    dolorem.
                  </p>
                </div>
              </div>

            </div>

            <div id="comment-4" class="comment">
              <div class="d-flex">
                <div class="comment-img"><img src="images/team/team-4.jpg" alt="comment-img"/></div>
                <div>
                  <h5><a href="">ahmad errami</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a>
                  </h5>
                  <time datetime="2024-01-01">01 Jan, 2024</time>
                  <p>
                    Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia
                    ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                  </p>
                </div>
              </div>
            </div>

            <div class="reply-form">
              <h4 class="title-2">Leave a Reply</h4>
              <p>Your email address will not be published. Required fields are marked * </p>
              <form action="">
                <div class="row g-3">
                  <div class="col-md-6 form-group">
                    <input name="name" type="text" class="form-control box" placeholder="Your Name*"/>
                  </div>
                  <div class="col-md-6 form-group">
                    <input name="email" type="text" class="form-control box" placeholder="Your Email*"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col form-group">
                    <input name="website" type="text" class="form-control box" placeholder="Your Website"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col form-group">
                    <textarea name="comment" class="form-control box" placeholder="Your Comment*"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn">Post Comment</button>
              </form>
            </div>

          </div> */}

        </div>

        <div class="col-lg-4" data-aos="fade-left" data-aos-delay="150">

          <div class="sidebar">
            <h3 class="sidebar-title">Search</h3>
            <div class="sidebar-item search-form">
              <form action="">
                <input type="text"/>
                <button type="submit"><i class="bi bi-search"></i></button>
              </form>
            </div>

            <h3 class="sidebar-title">Categories</h3>
            <div class="sidebar-item categories">
              <ul>
                <li><a href="#">General <span>(25)</span></a></li>
                <li><a href="#">Lifestyle <span>(12)</span></a></li>
                <li><a href="#">Travel <span>(5)</span></a></li>
                <li><a href="#">Design <span>(22)</span></a></li>
                <li><a href="#">Creative <span>(8)</span></a></li>
                <li><a href="#">Educaion <span>(14)</span></a></li>
              </ul>
            </div>

            <h3 class="sidebar-title">Recent Posts</h3>
            <div class="sidebar-item recent-posts">
              <div class="post-item clearfix">
                <img src="images/blog/post-images/1.jpg" alt="recent-post-img"/>
                <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                <time datetime="2024-01-01">Jan 23, 2024</time>
              </div>

              <div class="post-item clearfix">
                <img src="images/blog/post-images/2.jpg" alt="recent-post-img"/>
                <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                <time datetime="2024-01-01">Jan 1, 2024</time>
              </div>

              <div class="post-item clearfix">
                <img src="images/blog/post-images/3.jpg" alt="recent-post-img"/>
                <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                <time datetime="2024-01-01">Jan 17, 2024</time>
              </div>

              <div class="post-item clearfix">
                <img src="images/blog/post-images/1.jpg" alt="recent-post-img"/>
                <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                <time datetime="2024-01-01">Jan 4, 2024</time>
              </div>

              <div class="post-item clearfix">
                <img src="images/blog/post-images/2.jpg" alt="recent-post-img"/>
                <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                <time datetime="2024-01-01">Jan 24, 2024</time>
              </div>

            </div>

            <h3 class="sidebar-title">Tags</h3>
            <div class="sidebar-item tags">
              <ul>
                <li><a href="#">App</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Creative</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Smart</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>
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