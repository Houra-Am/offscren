import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  const slidesData = [
    {
      id: 1,
      image:
        "https://occ-0-448-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYJQVRyWSP8FTvDT9DvK4Be468V9xG3r7DggmG5vBUHyCoYon1DC423wI_S0iiQiHmxSueNh9he_Utbb_ucq2v1PP8e5.jpg?r=9a9",
      title: "RED DOT",
      label:
        "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",
    },
    {
      id: 2,
      image:
        "https://www.pieuvre.ca/wp-content/uploads/2021/01/OutsideWire.jpg",
      title: "Outside the Wire",
      label:
        "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
    },
    {
      id: 3,
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/23/945055-thelittlethings-trailer.jpg",
      title: "The Little Things",
      label:
        "Deputy Sheriff Joe 'Deke' Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. ",
    },
    {
      id: 4,
      image: "https://i.ytimg.com/vi/ppPHmjFroPo/maxresdefault.jpg",
      title: "Pacto de Fuga",
      label:
        "During the last years of the military regime, a group of militants from the Manuel Rodríguez Patriotic Front planned and carried out a prison break of political prisoners.",
    },
    {
      id: 5,
      image:
        "https://filmschoolrejects.com/wp-content/uploads/2021/03/nobody-1280x720.jpg",
      title: "Nobody",
      label:
        "In a barrage of fists, gunfire and squealing tires, an enraged man must save his wife and son from a dangerous adversary and ensure that he will never be underestimated again.",
    },
    {
      id: 6,
      image:
        "https://s.france24.com/media/display/846c0e86-455e-11e9-80ca-005056bff430/w:1280/p:16x9/13032019_universite_corruption_felicity_huffman.jpg",
      title: "College Admissions Scandal",
      label:
        "In 2019, a scandal arose over a criminal conspiracy to influence undergraduate admissions decisions at several top American universities. The investigation into the conspiracy was code named Operation Varsity Blues.",
    },
  ];

  return (
    <div className='App slider'>
      <div className='slider-wrapper'>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className='slick-slide' key={slide.id}>
              <h2 className='slick-slide-title'>{slide.title}</h2>
              <img
                className='slick-slide-image d-block w-100'
                src={slide.image}
                alt=''
              />
              <label className='slick-slide-label text-wrap'>
                {slide.label}
              </label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
