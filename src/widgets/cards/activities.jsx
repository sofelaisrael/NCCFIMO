import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function ActivitiesCard({ day, activity, time }) {
  return (
    <div className='flex flex-col w-[150px] md:w-[250px] text-center'>
      {/* <div className="act text-[24px]">
        {activity}
      </div>
      <span className="day text-[18px]">
        {day}
      </span>
      <span className="time text-[12px]">
        {time}
      </span>
      */}

      <Card className="rounded-lg shadow-lg shadow-gray-500/1 gl down md:w-auto gap-2">
        <CardBody className="relative h-full flex flex-col px-0">
          <div className="w-full h-[60px] mb-2 md:mb-0">
            <Typography variant="h5" className="text-[18px]" color="blue-gray">
              {activity}
            </Typography>
          </div>


          <div className="desc">
            <Typography className="font-normal text-blue-gray-600 text-[14px] md:text-[16px]">
              {day}
            </Typography>
          </div>
          <div className="desc">
            <Typography className="font-normal text-blue-gray-600 text-[14px] md:text-[16px]">
              {time}
            </Typography>
          </div>


        </CardBody>
      </Card>

    </div>
  )
}

export default ActivitiesCard
