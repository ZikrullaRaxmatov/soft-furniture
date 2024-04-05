import React from 'react';
import news1 from './img/adult-blur-close-up-267394-637x357.png'
import news2 from './img/billetto-editorial-334686-unsplash-637x357.png'
import news3 from './img/daniel-korpai-1074289-unsplash-637x357.png'

function News() {
    return (
        <div class="news mb-5">
            <div class="container">
                <div class="news-items text-center mt-2 mt-md-3 mt-lg-4">
                    <h1 class="fw-bold ">News</h1>
                    <p class="fw-light fst-italic text-muted">Ferghana Natural Product</p>

                    <div class="row row-cols-1 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card card-news h-100 ">
                                <img src={news1} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title">How to choose perfect gadgets</h6>
                                    <p class="card-text news-context">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-news h-100">
                                <img src={news2} class="card-img-top" alt="news2" />
                                <div class="card-body">
                                    <h6 class="card-title news-title">How to choose perfect gadgets</h6>
                                    <p class="card-text news-context">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-news h-100">
                                <img src={news3} class="card-img-top" alt="news3" />
                                <div class="card-body">
                                    <h6 class="card-title news-title">How to choose perfect gadgets</h6>
                                    <p class="card-text news-context">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News