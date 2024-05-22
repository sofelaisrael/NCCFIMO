import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              NCCFIMO
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
            The fellowship operates independently, not being affiliated with or financially supported by any individual 
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>

          {/* menu */}
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
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
              <ul className="mt-3">
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    I: 07081659372
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    P: 07041285166
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    B: 08038624818
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="small"
                    className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                  >
                    J: 07040575402
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
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
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
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "Navigation",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Contact Us",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Sign-in",
          path: "/sign-in",
        },
      ],
    },

  ],
  copyright: (
    <>
      Copyright © {year} Material Tailwind by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Tim
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
