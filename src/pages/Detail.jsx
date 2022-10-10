import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Local from "../locale/Local";
import { FormattedMessage } from "react-intl";
function Detail() {
  const [detail, setDetail] = useState();
  const [team, setTeam] = useState();
  const param = useParams();
  const idConvertNumber = Number(param.id);
  const language = localStorage.getItem("lang");
  const getMovieDetail = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${idConvertNumber}?api_key=2493388580051618524feeace9a4f94a&language=${language}`
      )
      .then((response) => setDetail(response.data));
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${idConvertNumber}/credits?api_key=2493388580051618524feeace9a4f94a&language=${language}`
      )
      .then((response) => setTeam(response.data));
  };
  useEffect(() => {
    getMovieDetail();
  }, [language]);
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
  const detailCasts = team?.cast;
  const detailProducers = team?.crew;
  return (
    <div className="w-full sm:h-[2100px] lg:h-[1600px] bg-gray-400">
      <div className="lg:ml-96 pt-20">
        {detail && (
          <div>
            <div className="flex sm:flex-col lg:flex-row">
              <img
                src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                alt={detail.original_title}
                className="h-[486px] sm:px-5 lg:px-0"
              />
              <div className="ml-10">
                <h1 className="my-5 text-2xl font-bold">{detail.title}</h1>
                <p className="bg-yellow-500 text-white w-12 text-center">
                  {detail.vote_average.toFixed(1)}
                </p>
                <p className="lg:w-[750px] mt-4">{detail.overview}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="sm:w-3/4 lg:w-[1250px] h-96 mx-auto my-20">
        <Local>
          <h1 className="text-2xl font-bold my-5 sm:text-center lg:text-start">
            <FormattedMessage id="Cast" />
          </h1>
        </Local>
        <div className="sm:w-3/4 sm:ml-14 lg:w-full">
          <Slider {...settings}>
            {detailCasts &&
              detailCasts.map((detailCast) => {
                return (
                  <div className="border-[1] border-gray-300 px-1 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${detailCast.profile_path}`}
                      alt={detailCast.name}
                      className="h-72 lg:w-full"
                    />
                    <div className="text-center my-2 ">
                      <h4> {detailCast.character} </h4>
                      <p> {detailCast.name} </p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div className="sm:w-3/4 lg:w-[1250px] h-96 mx-auto my-20">
        <Local>
          <h1 className="text-2xl font-bold my-5 sm:text-center lg:text-start">
            <FormattedMessage id="Producer" />
          </h1>
        </Local>
        <div className="sm:w-3/4 sm:ml-14 lg:w-full">
          <Slider {...settings}>
            {detailProducers &&
              detailProducers.map((detailProducer) => {
                return (
                  <div className="border-[1] border-gray-300 px-1 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${detailProducer.profile_path}`}
                      alt={detailProducer.name}
                      className="h-72 lg:w-full"
                    />
                    <div className="text-center my-2 ">
                      <h4> {detailProducer.character} </h4>
                      <p> {detailProducer.name} </p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Detail;
