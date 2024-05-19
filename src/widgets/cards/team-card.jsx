import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, School, SOO, No }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <div className="h-[350px] overflow-hidden rounded-md">
        <img
        src={img}
        alt={name}
        size=""
        variant="round"
        className="w-[100%] shadow-lg shadow-gray-500/25"
      />
      </div>
      
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
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
