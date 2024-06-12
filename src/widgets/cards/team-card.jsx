import PropTypes from "prop-types";
import { useState } from "react";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import Modal from "react-modal"
import back from '@/assets/18.jpg'
import { MdLocationPin, MdOutlinePhone } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const custom = {
  content: {
    width: '420px',
    height: '420px',
    overflow: 'hidden',
    top: '50%',
    padding: '0px',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export function TeamCard({ img, name, position, full, course, School, SOO, No }) {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function after() {
    subtitle.style.color = '#f00'
  }

  function close() {
    setIsOpen(false)
  }



  return (
    <div className="car">
      <Card onClick={open} color="transparent" shadow={false} className="relative text-center h-[100%] overflow-hidden border">
        <img
          src={img}
          alt={name}
          size=""
          variant="round"
          className="h-[300px] shadow-lg shadow-gray-500/25 object-top object-cover"
        />

        <div className="flex flex-col absolute bottom-0 bg-white w-[100%] p-2 rounded-lg">
          <Typography variant="h5" color="blue-gray" className="mb-1 text-[16px] md:text-[18px]">
            {name}
          </Typography>
          {position && (
            <Typography className="font-bold text-blue-gray-500 text-[12px]">
              {position}
            </Typography>
          )}
        </div>
        {/* <div className="lg:h-[350px] overflow-hidden rounded-md z-0 content">
        
      </div>
      <div className="flex flex-col relative">
        <Typography variant="h5" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
      </div> */}

      </Card>


      <Modal
        isOpen={isOpen}
        style={custom}
        onAfterOpen={after}
        onRequestClose={close}
        contentLabel='Example Modal'>
        <div className="fjustify-center items-center box-border">
          <div className="h-[100px] overflow-hidden fixed -z-10 rounded-sm pb-0 ">
            <img className="rounded-lg -mt-36" src={back} alt="" />
          </div>
          <div className="un flex flex-col justify-center items-center">
            <div className={`rounded-[9999px] mt-[50px] overflow-hidden h-[100px] w-[100px]`}>
              <img src={img} className="" alt="" />
            </div>

            <div className="name text-center">
              <div className="text-[20px]">
                {full}
              </div>
              <span className="text-[14px]">
                {position}
              </span>
            </div>
          </div>
        </div>

        <div className="det flex justify-evenly text-center h-[100px] items-center flex-col">

          <div className="sch flex flex-col items-center w-full h-full">
            <div className="icons">
              <FaGraduationCap />
            </div>
            <span>{School}</span>
          </div>

          <div className="state flex flex-col items-center w-full h-full">
            <div className="icons justify-self-start">
              <MdLocationPin />
            </div>
            <span>{SOO}</span>
          </div>

          <div className="num flex flex-col items-center w-full h-full">
            <div className="icons justify-self-start">
              <MdOutlinePhone />
            </div>
            <span>{No}</span>
          </div>

        </div>
        <div className="flex"></div>
      </Modal>
    </div>

  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
