import { Link } from "react-router";

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
          <img src={logo} className="h-12 w-12 rounded-md" alt="company-logo" />
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
          <div className="text-sm text-[#a1a1a1]">
            {from} - {to}
          </div>
        </div>
      </div>
      <ul className="ml-4 text-sm max-w-[50ch] xl:max-w-[60ch] md:text-base list-disc">
        {description.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleWork;
