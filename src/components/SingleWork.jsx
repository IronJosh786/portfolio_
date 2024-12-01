import { Link } from "react-router-dom";

const SingleWork = ({ logo, website, name, title, description, from, to }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <Link
          to={website || "#"}
          target="_blank"
          className="shrink-0 h-12 w-12"
          aria-label="visit company"
        >
          <img
            src={logo}
            className="h-12 w-12 rounded-full"
            alt="company-logo"
          />
        </Link>
        <div className="flex flex-col w-full">
          <div>
            <Link
              to={website || "#"}
              aria-label="visit company"
              target="_blank"
              className="font-bold"
            >
              {name}
            </Link>
            <p className="text-sm">{title}</p>
          </div>
          <div className="text-sm text-gray-400">
            {from} - {to}
          </div>
        </div>
      </div>
      <div className="text-sm max-w-[50ch] xl:max-w-[60ch] md:text-base">
        {description}
      </div>
    </div>
  );
};

export default SingleWork;
