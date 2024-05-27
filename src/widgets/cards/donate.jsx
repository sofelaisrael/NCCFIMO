import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function DonateCard({ title, description }) {
    return (
        <Card className="rounded-lg shadow-lg shadow-gray-500/1 gl h-[200px] md:h-[250px] w-[400px] mx-auto down md:w-auto">
            <CardBody className="relative h-full flex flex-col">
                <div className="w-full px-2 mb-auto">
                    <Typography variant="h5" className="text-[18px]" color="blue-gray">
                        {title}
                    </Typography>
                </div>


                <div className="desc flex flex-col">
                    {description.map((desc) => (
                        <Typography className="font-normal text-blue-gray-600 text-[14px] md:text-[16px]">
                            {desc}
                        </Typography>
                    ))}
                </div>


            </CardBody>
        </Card>
    );
}

export default DonateCard;
