import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, School, SOO, No }) {
  return (
    <Card color="transparent" shadow={false} className="relative text-center h-[100%] overflow-hidden border">
        <img
        src={img}
        alt={name}
        size=""
        variant="round"
        className="h-[300px] shadow-lg shadow-gray-500/25 object-cover"
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
