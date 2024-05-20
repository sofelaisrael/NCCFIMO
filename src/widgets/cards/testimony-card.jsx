import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function TestimonyCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-sm border shadow-lg shadow-gray-500/10">
      <CardBody className="px-8">
        <div className="flex justify-center items-center text-center h-16">
          <Typography className="font-normal text-blue-gray-600 pb-2" >
            <h4>
              {description}
            </h4>
          
        </Typography>
        </div>
        <div className="flex justify-center border-t h-10 py-6 pt-2 mb-2 text-center break-words text-nowrap">
          {/*   
        <IconButton
          variant="gradient"
          size="lg"
          
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton> */}
          <Typography className="w-auto" color="blue-gray" variant="h6">
            {title}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default TestimonyCard;
