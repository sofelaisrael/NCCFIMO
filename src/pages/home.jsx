import React, { useRef, useState } from "react";
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
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
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

  return (
    <>
      <div className="relative font-sans flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
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


          <div className="mt-32 flex flex-wrap h-[100%] border rounded-md pb-5">
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
                
                {shown && <p><br />
                  The fellowship operates independently, not being affiliated with or financially supported by any individual or organization
                  withing Nigeria or internationally
                </p>
                }
              </Typography>
              {
                !shown ?
                  <Button variant="filled" onClick={() => setShown(prev => !prev)}>read more</Button>
                  :
                  <Button variant="filled" onClick={() => setShown(prev => !prev)}>show less</Button>
              }
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
                    <Typography variant="h4" color="blue-gray" className="font-normal">NCCF IMO</Typography>
                    <Typography className="font-normal text-blue-gray-500">
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
      <section className="px-4 w-full flex justify-center pt-20 pb-16">
        <div className=" mx-auto w-[85%]">
          <PageTitle section="Meet Our Ministers" heading="">
            NCCF COMPRISES OF MULTIPLE FAMILIES
          </PageTitle>
          <div className="mt-24">
            <Slider ref={sliderRef} {...settings}>
              {teamData.map(({ img, name, position }) => (
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

      <section className="px-4 container-fluid pt-10 pb-48">
        <div className=" mx-auto w-[85%]">
          <PageTitle section="Testimonials" heading="">
            Testimonies shared by our past members
          </PageTitle>
          <Slider ref={sliderRef2} {...settings2}>
            {testimonialData.map(({ color, title, description }) => (
              <div className="p-2">
                <TestimonyCard
                  key={title}
                  color={color}
                  title={title}
                  description={description}
                /></div>
            ))}
          </Slider>
          <div className="flex justify-between mt-4">
            <GoArrowLeft className="" size={30}
              onClick={() => sliderRef2.current.slickPrev()}
            />
            <GoArrowRight className="" size={30}
              onClick={() => sliderRef2.current.slickNext()}
            />
          </div>
        </div>
      </section>
      <section className="relative w-full bg-white py-24 px-4">
        <div className="w-full justify-center ">
          <div className="flex w-full justify-center">
            <div className="w-[85%]">
              <h1 className="text-[30px] font-semibold">NCCF Supreme Task</h1>
              <h1 className="text-[40px] font-bold text-black">RURAL RUGGED EVANGELISM</h1>
              <p className="text-[15px] w-[100%]">
                The supreme task of the Nigeria Christian Corper's Fellowship(NCCF) is known as Rural Rigged Evangelism. This mission
                is the responsibilty of every Jesus Corper withing the NCCF community.

              </p>
            </div>

          </div>


          <div className="w-[85%] mx-auto mt-20 mb-48 max-w-5xl flex gap-12 justify-evenly flex-wrap">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="flex flex-col items-center text-[12px] text-blue-gray-900 max-w-[250px]"
              >
                <div className="mx-aut mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
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


          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
