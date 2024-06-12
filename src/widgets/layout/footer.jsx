import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { FaPhone, FaLocationArrow } from "react-icons/fa"
import { MdLocationPin, MdOutlinePhone } from "react-icons/md";

const year = new Date().getFullYear();

export function Footer({ socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              NCCFIMO
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-[70%]">
              The fellowship operates independently, not being affiliated with or financially supported by any individual
            </Typography>
          </div>

          {/* menu */}
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-7 md:gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="s">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium uppercase"
              >
                Contact Us
              </Typography>
              <ul className="mt-3 text-[10px]">
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    <MdOutlinePhone className="mr-2 inline" />
                    <span className="text-[12px]">
                      J: 08151676347
                    </span>
                    
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    <MdOutlinePhone className="mr-2 inline" />
                    <span className="text-[12px]">
                      B: 08037106044
                    </span>
                    
                  </Typography>
                </li>
                <li className="w-[120px] md:w-[200px]">
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    <MdLocationPin className="mr-2 inline" />
                    <span className="text-[12px]">
                      Area V Estate, Behind Holy Rosary College, Portharcort Road New Owerri, Owerri Imo State.
                    </span>
                  </Typography>
                </li>
              </ul>
            </div>

          </div>
        </div>


        <hr className="my-6 border-gray-300" />

        {/* copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
  ],
  menus: [
    {
      name: "Navigation",
      items: [
        {
          name: "About",
          path: "/",
        },
        { name: "Profile", path: "/profile" },
        {
          name: "Sign-up",
          path: "/sign-up",
        },
      ],
    },

  ],
  copyright: (
    <>
      Copyright © {year} {" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        NccfImo
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
