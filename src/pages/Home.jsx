import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

import Local from "../locale/Local";

function Home() {
  const topRateds = useSelector(
    (state) => state.movies.topRatedMovies?.results
  );
  const popularMovies = useSelector(
    (state) => state.movies.popularMovies?.results
  );
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-400 sm:pt-0 md:pt-20 lg:pt-0 md:h-[100vh] lg:h-[870px]">
      <div className="lg:w-[1400px] mx-auto ">
        <Local>
          <h1 className="text-center text-2xl py-5">
            <FormattedMessage id="TopRated" />
          </h1>
        </Local>
        <div className="sm:w-3/4 sm:mx-auto lg:mx-0 lg:w-full">
          <Slider {...settings}>
            {topRateds &&
              topRateds.map((topRated) => {
                return (
                  <div
                    key={nanoid()}
                    className="border-[1px] border-gray-400  relative text-center"
                  >
                    <Link to={`${topRated.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${topRated.poster_path}`}
                        alt={topRated.original_title}
                        className="h-52 w-full "
                      />
                      <span className="absolute left-0 top-48 bg-yellow-400 sm:w-[300px] lg:w-full h-5 text-sm font-bold">
                        {topRated.vote_average}
                      </span>
                      <div className="mt-2">
                        <h6>{topRated.title}</h6>
                        <p>{topRated.release_date}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div className="lg:w-[1400px] mx-auto mt-20">
        <Local>
          <h1 className="text-center text-2xl py-5">
            <FormattedMessage id="PopulerMovies" />
          </h1>
        </Local>
        <div className="sm:w-3/4 sm:mx-auto lg:mx-0 lg:w-full">
          <Slider {...settings}>
            {popularMovies &&
              popularMovies.map((popularMovie) => {
                return (
                  <div
                    key={nanoid()}
                    className="border-[1px] border-gray-400  relative text-center"
                  >
                    <Link to={`${popularMovie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${popularMovie.poster_path}`}
                        alt={popularMovie.original_title}
                        className="h-52 lg:w-full "
                      />
                      <span className="absolute left-0 top-48 bg-yellow-400 sm:w-[300px] lg:w-full h-5 text-sm font-bold">
                        {popularMovie.vote_average}
                      </span>
                      <div className="mt-2">
                        <h6>{popularMovie.title}</h6>
                        <p>{popularMovie.release_date}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
