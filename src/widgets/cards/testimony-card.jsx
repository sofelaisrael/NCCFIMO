
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function TestimonyCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-sm border shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
<Typography className="font-normal text-blue-gray-600 pb-2">
          {description}
        </Typography>


<div className="flex items-center pt-5 border-t ">
  
        <IconButton
          variant="gradient"
          size="lg"
          
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h6" className="mb-2" color="blue-gray">
          {title}
        </Typography>
</div>
        
      </CardBody>
    </Card>
  );
}

export default TestimonyCard;
