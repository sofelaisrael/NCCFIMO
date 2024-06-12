import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function DonateCard({ title, title2, description }) {
    return (
        <Card className="rounded-lg shadow-lg shadow-gray-500/1 h-[200px] md:h-[250px] mx-auto down w-full omo">
            <CardBody className="relative h-full flex flex-col">
                <div className="w-full mb-auto">
                    <Typography variant="h5" className="text-[18px] cap" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography variant="h5" className="text-[18px] cap" color="blue-gray">
                        {title2}
                    </Typography>
                </div>


                <div className="desc flex flex-col">
                    {description.map((desc, key) => (
                        <Typography key={key} className="font-normal text-blue-gray-600 text-[14px] md:text-[16px]">
                            {desc}
                        </Typography>
                    ))}
                </div>


            </CardBody>
        </Card>
    );
}

export default DonateCard;
