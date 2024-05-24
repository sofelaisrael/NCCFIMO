import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function DonateCard({ title, description }) {
    return (
        <Card className="rounded-lg shadow-lg shadow-gray-500/1 gl h-[250px] relative down">
            <CardBody className="px-4 md:px-8 box-border relative ">
                <Typography variant="h5" className="text-[18px] absolute" color="blue-gray">
                    {title}
                </Typography>

                <div className="desc flex flex-col absolute -bottom-[350%]">
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
