import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,


} from "@material-tailwind/react";
import {
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import Slider from 'react-slick';
import Modal from "react-modal"
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, DonateCard, EventCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, donateData, churchData, eventData } from "@/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import { RxCaretRight } from "react-icons/rx"
import img1 from "../assets/1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContentTransition from "@/components/Families";


export function Home() {
  const [shown, setShown] = useState(false)

  const sliderRef = React.useRef(null);
  const sliderRef2 = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sub = [
    {
      zone: 'Owerri Municipal',
      subzones: [
        'Umuguma',
        "EGBU",
        "Irete",
      ]
    },
    {
      zone: 'Owerri North',
      subzones: [
        'Ikeredu',
        "Mbatoli",
      ]
    },
    {
      zone: 'Owerri South',
      subzones: [
        'Ngorkpala',
        "Ulaku",
        "Obibi Ezeama",
        "Agbala",
      ]
    },
    {
      zone: 'Ohazi',
      subzones: [
        'Obinze',
        "Obosoma",
        "Egbema",
      ]
    },
    {
      zone: 'Nkwere',
      subzones: [
        'Nwageli',
        "Isu",
      ]
    },
    {
      zone: 'Orlu',
      subzones: [
        'Njaba',
        "Osu",
      ]
    },
    {
      zone: 'Ideato',
      subzones: [
        'Ideato North',
        'Ideato South',
      ]
    },
    {
      zone: 'Okigwe',
      subzones: [
        'Okigwe',
        'Onuimo',
      ]
    },
    {
      zone: 'Mbano',
      subzones: [
        'Ehime Mbano',
        'Isiala',
        'Ihitte Uboma',
      ]
    },
    {
      zone: 'Mbaise',
      subzones: [
        'Mbowu',
        'Ezenita',
        'Azu',
        'Arbor',
      ]
    },
    {
      zone: 'Oguta',
      subzones: [
        'Oru East',
        'Oru West',
        'Oguta',
        'Arbor',
      ]
    },
  ]

  useEffect(() => {
    const zone = document.querySelector('.Zones')
    const drop = document.querySelector('.drop')
    zone.onclick = () => {
      drop.classList.toggle('hidden')
      let ul = drop.querySelector('ul')
      const b4 = document.querySelectorAll('.dr')
      b4.forEach((b) => {
        b.remove()
      })
      sub.map((s) => {
        let li = document.createElement('li')
        li.textContent = s.zone
        li.classList.add('dr')
        li.onmouseenter = () => {
          const last = document.querySelector(".lastdrop")
          last.classList.add('border')
          const lastli = document.querySelectorAll(".lastdrop li")
          lastli.forEach((lli) => {
            lli.remove()
          })
          s.subzones.map((subz) => {
            let newli = document.createElement('li')
            newli.classList.add('last')
            newli.textContent = subz
            last.appendChild(newli)
          })

        }
        li.onmouseleave = () => {
          const last = document.querySelectorAll(".lastdrop")
          last.classList.remove('border')
          const lastli = document.querySelectorAll(".lastdrop li")
          lastli.forEach((lli) => {
            lli.remove()
          })
        }

        ul.appendChild(li)
      })
      window.addEventListener('click', function (e) {
        if (!zone.contains(e.target)) {
          drop.style.display = 'none'
        } else {
          drop.style.display = 'block'
        }
      })
    }
  })


  // useEffect(() => {
  //   let list = document.querySelectorAll('.ul li')
  //   list.forEach((li) => {
  //     li.addEventListener('mouseover', alert('uoo'))
  //   })
  // })




  // animations

  // // from bottom animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('setu')
        } else {
          entry.target.classList.remove('setu')
        }
      })
    }, [])
    const hidden = document.querySelectorAll('.down')

    for (let i = 0; i < hidden.length; i++) {
      const element = hidden[i];
      observer.observe(element)
    }
  }, [])

  // // from up animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('set')
        } else {
          entry.target.classList.remove('set')
        }
      })
    }, [])
    const hidden = document.querySelectorAll('.up')

    for (let i = 0; i < hidden.length; i++) {
      const element = hidden[i];
      observer.observe(element)
    }
  }, [])

  // // opacity animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showing')
        } else {
          entry.target.classList.remove('showing')
        }
      })
    })
    const hidden = document.querySelectorAll('.hidde')

    for (let i = 0; i < hidden.length; i++) {
      const element = hidden[i];
      observer.observe(element)
    }
  }, [])

  // // from the right animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('setr')
        } else {
          entry.target.classList.remove('setr')
        }
      })
    })
    const hidden = document.querySelectorAll('.right')

    for (let i = 0; i < hidden.length; i++) {
      const element = hidden[i];
      observer.observe(element)
    }
  }, [])

  function increase() {
    let val = document.querySelectorAll('.inc .yoo .increase')
    let int = 2000
    val.forEach((value) => {
      let start = 0
      let end = parseInt(value.textContent)
      let duration = Math.floor(int / end)
      let count = setInterval(() => {
        start += 1
        value.textContent = start
        if (start == end) {
          clearInterval(count)
        }
      }, duration)
    })
  }

  // // animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inc')
          increase()
          observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('inc')
        }
      })
    })
    const hidden = document.querySelectorAll('.jjc')

    for (let i = 0; i < hidden.length; i++) {
      const element = hidden[i];
      observer.observe(element)
    }

  })

  useEffect(() => {
    let bg = document.querySelector('.para')
    let dark = document.querySelector('.dar')
    window.addEventListener('scroll', function () {
      let val = this.window.scrollY
      bg.style.top = val * 0.5 + 'px'
      dark.style.top = val * 0.25 + 'px'
    })
  })

  return (
    <>

      {/* welcome page */}
      <div className="relative font-sans flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden">
        <div className="absolute h-full w-full bg-[url('@/assets/build.jpg')] bg-cover bg-center para top-0" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center dar" />
        <div className="max-w-8xl container relative mx-auto down">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="lead" color="white" className="opacity-80">
                Welcome To
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                NCCF IMO STATE
              </Typography>

            </div>
          </div>
        </div>
      </div>

      {/* features and about */}
      <section className="-mt-32 bg-white px-4 pt-4">
        <div className="container mx-auto">
          <div className="flex lg-max:flex-wrap gap-10">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>


          <div className="mt-32 flex flex-wrap h-[100%] border rounded-md pb-5 hidde">
            <div className="mx-auto -mt-8 w-full lg:w-3/5 px-4">
              <div className="mb-6 m-0 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h1"
                className="mb-3 font-bold text-[26px]"
                color="blue-gray"
              >
                ABOUT NCCF IMO
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                NCCF IMO is a chapter of the Nigeria Christian Corpers' Fellowship(NCCF). The fellowship is made up of
                Christian Corps members and is characterized by its inter-denominational nature, meaning it includes members from various Christian denominations.
                It is non-denominational and non-ethnic, promoting unity among Christians from all background.
                <p><br />
                  The fellowship operates independently, not being affiliated with or financially supported by any individual or organization
                  within Nigeria or internationally
                </p>
              </Typography>
              <Button variant="filled" onClick={() => setShown(prev => !prev)}>read more</Button>
            </div>

            <div className="pt-6 mx-auto h-[100%] mt-24 flex w-full justify-center px-4 lg:w-4/12 lg:mt-0">
              <Card>
                <CardBody>
                  <div className="overflow-hidden w-auto">
                    <img
                      alt="Card Image"
                      src={img1}
                      className="object-fill rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <Typography variant="h4" color="blue-gray" className="font-normal text-[18px] md:text-[20px]">NCCF IMO</Typography>
                    <Typography className="font-normal text-blue-gray-500 text-[14px]">
                      Our core mission is radical Evangelism especially to the rural areas in our respective states.
                    </Typography>
                  </div>
                </CardBody>
              </Card>
              {/* <Card className="shadow-lg border shadow-gray-500/10 rounded-md">
                <CardHeader floated={false} className="relative h-56">
                  <div className="w-full h-[100%] overflow-hidden object-cover">
                    <img
                      alt="Card Image"
                      src={img1}
                      className="object-fill rounded-md"
                    />
                  </div>

                </CardHeader>
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="font-normal">NCCF IMO</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >


                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Our core mission is radical Evangelism especially to the rural areas in our respective states.
                    This is to keep in line the Spirit of prophecy that gave birth to NCCF; hence the mission of Rural Rugged Evangelism.
                  </Typography>
                </CardBody>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="p-10 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 ">
          <div className="yoo flex justify-between py-3 rounded-lg items-center h-[50px] relative">
            <div className="all flex justify-between w-full relative Zones rounded-lg px-3">
              <span className="uppercase" >Zones</span>
              <span className=" text-[30px] increase">10</span>
              <RxCaretRight className="caret" />
            </div>

            <div className="drop hidden z-[1000]" >
              <ul className="border ul rounded text-black bg-white h-[300px] overflow-y-scroll"></ul>
            </div>
            <ul className="lastdrop absolute bg-white top-[100%] left-[60%]"></ul>
          </div>

          <div className="yoo flex justify-between p-3 rounded-lg items-center h-[50px]">
            <span className="uppercase" >Sub Zones</span>
            <span className=" text-[30px] increase">33</span>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="w-full flex justify-center pt-20 pb-16">
        <div className=" mx-auto w-[85%]">
          <div className="right">
            <span className="font-bold text-[26px] text-center block">MEET OUR EXECUTIVES</span>
          </div>

          <div className="mt-4 down">
            <Slider ref={sliderRef} {...settings}>
              {teamData.map(({ img, name, full, course, position, School, SOO, No }) => (
                <div key={name} className="p-2">
                  <TeamCard
                    img={img}
                    name={name}
                    position={position}
                    School={School}
                    SOO={SOO}
                    No={No}
                    course={course}
                    full={full}
                  />
                </div>
              ))}
            </Slider>
            <div className="flex justify-between mt-4">


              <GoArrowLeft size={30}
                onClick={() => sliderRef.current.slickPrev()}

              /><GoArrowRight size={30}
                onClick={() => sliderRef.current.slickNext()}

              />

            </div>
          </div>
        </div>
      </section>

      {/* Weekly activities */}
      <section className="mt-16 p-5 h-[100vh] bg-[url('@/assets/9.jpg')] bg-cover bg-top">
        <span className="text-[32px] font-bold text-center w-full block text-white">Our Weekly Programs</span>
        <div className="flex flex-wrap mt-[27%] gap-2 justify-evenly ga2">
          {churchData.map((church, key) => (
            <div key={key} className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-500/1 w-[150px] md:w-[200px] lg:w-[200px] h-[150px] py-10 bg-white down">
              <div className="name font-bold text-[18px] text-center">
                {church.name}
              </div>
              <div className="time text-[12px]">
                {church.time}
              </div>
              <div className="day">
                {church.day}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact form and objective */}
      <section className="px-6 relative w-full bg-white py-24">
        <div className="w-full">
          <div className="w-full text-center md:text-left px-0 md:px-8 right">
            <div className="w-[100%] md:w-[85%]">
              <h1 className="text-[14px] md:text-[30px] font-semibold">NCCF Core Mandate</h1>
              <h1 className="text-[16px] md:text-[40px] font-bold text-black">RURAL RUGGED EVANGELISM</h1>
              <p className="text-[14px] w-[100%]">
                The core mandate of the Nigeria Christian Corper's Fellowship(NCCF) is known as Rural Rigged Evangelism. This mission
                is the responsibilty of every Jesus Corper withing the NCCF community.

              </p>
            </div>

          </div>


          <div className="w-[100%] mt-20 flex flex-wrap justify-evenly">
            {contactData.map(({ title, icon, img, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className={`flex flex-col items-center text-[12px] md:max-w-[370px] text-blue-gray-900 px-10 py-3 down relative`}
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="black" className="h-10 text-center">
                  {title}
                </Typography>
                <Typography className="w-[100%] text-[12px] text-black">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation And Support */}
      <section className="relative py-10">
        <div className="absolute h-full w-full bg-[url('@/assets/10.jpg')] bg-cover bg-center -z-10 top-0 bg-fixed" />

        <div className="m-10 w-[90%] md:w-[70%] mx-auto text-center z-10 text-white right">
          <h1 className="text-[28px]">Donations and Support</h1>
          <Typography className="text-[20px]">
            Feel free to use the provided bank details for your support contributions to NCCF Imo State. Thank you for your generosity and support in advancing our mission and projects.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 px-8">
          {donateData.map(({ title, description }) => (
            <DonateCard
              key={title}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>

      {/* footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
