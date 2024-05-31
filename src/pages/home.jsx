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
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, DonateCard, ActivitiesCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, donateData, churchData } from "@/data";
import testimonialData from "@/data/testimonial-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import img1 from "../assets/1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import TestimonyCard from "@/widgets/cards/testimony-card";
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
  // animations

  // from bottom animation
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

  // from up animation
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

  // opacity animation
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

  // from the right animation
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

  useEffect(() => {
    let bg = document.querySelector('.para')
    let dark = document.querySelector('.dar')
    window.addEventListener('scroll', function () {
      let val = this.window.scrollY
      bg.style.top = val * 0 + 'px'
      dark.style.top = val * 0.25 + 'px'
    })
  })

  return (
    <>

      {/* welcome page */}
      <div className="relative font-sans flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden">
        <div className="absolute h-full w-full bg-[url('@/assets/build.jpg')] bg-cover bg-center para top-0" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center dar" />
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
                NCCF IMO is a chapted of the Nigeria Christian Corpers' Fellowship(NCCF). The fellowship is made up of
                Christian Corps members and is characterized by its inter-denominational nature, meaning it includes members from various Christian denominations.
                It is non-denominational and non-ethnic, promoting unity among Christians from all background.
                <p><br />
                  The fellowship operates independently, not being affiliated with or financially supported by any individual or organization
                  withing Nigeria or internationally
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
                      This is to keep in line the Spirit of prophecy that gave birth to NCCF; hence the mission of Rural Rugged Evangelism.
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

      {/* team */}
      <section className="w-full flex justify-center pt-20 pb-16">
        <div className=" mx-auto w-[85%]">
          <div className="right">
            <PageTitle section="NCCF IMO EXECUTIVES" heading="" className='text-[14px]'>
              NCCF COMPRISES OF MULTIPLE MEMBERS
            </PageTitle>
          </div>

          <div className="mt-4 down">
            <Slider ref={sliderRef} {...settings}>
              {teamData.map(({ img, name, position, No }) => (
                <div key={name} className="p-2">
                  <TeamCard
                    img={img}
                    name={name}
                    position={position}
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

      {/* testimonials */}
      <section className="pt-10 pb-30">
        <div className=" mx-auto w-[85%]">
          <div className="right">
            <PageTitle section="Testimonials" className='text-[14px]' heading="">
              Testimonies shared by our past members
            </PageTitle>
          </div>

          <div className="hidde">
            <Slider ref={sliderRef2} {...settings2}>
              {testimonialData.map(({ color, title, description }, key) => (
                <div className="p-2">
                  <TestimonyCard
                    key={key}
                    color={color}
                    title={title}
                    description={description}
                  /></div>
              ))}
            </Slider>
          </div>

        </div>
      </section>

      {/* Weekly activities */}
      <section className="relative bg-[url(@/assets/11.jpg)] bg-cover h-[100vh] bg-top z-20 my-10 flex flex-col justify-between py-20">
        <div className="right text-white text-[32px] mb-auto text-center">
          <h1>The Fellowship Activities</h1>
        </div>
        <div className="relative gap-1 mx-auto flex flex-wrap items-end justify-center h-auto" >
            {churchData.map(({ activity, day, time }) => (
              <div className="week flex">
                <ActivitiesCard activity={activity} day={day} time={time} />
              </div>
            ))}
        </div>
      </section>

      {/* contact form and objective */}
      <section className="px-6 relative w-full bg-white py-24">
        <div className="w-full">
          <div className="w-full text-center md:text-left px-0 md:px-8 right">
            <div className="w-[100%] md:w-[85%]">
              <h1 className="text-[20px] md:text-[30px] font-semibold">NCCF Supreme Task</h1>
              <h1 className="text-[24px] md:text-[40px] font-bold text-black">RURAL RUGGED EVANGELISM</h1>
              <p className="text-[15px] w-[100%]">
                The supreme task of the Nigeria Christian Corper's Fellowship(NCCF) is known as Rural Rigged Evangelism. This mission
                is the responsibilty of every Jesus Corper withing the NCCF community.

              </p>
            </div>

          </div>


          <div className="w-[100%] mx-auto mt-20 flex gap-5 flex-wrap justify-evenly">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="flex flex-col items-center text-[12px] md:max-w-[250px] text-blue-gray-900 min-w-[300px] down"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="h-10 text-center">
                  {title}
                </Typography>
                <Typography className=" text-[12px] text-blue-gray-500">
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
