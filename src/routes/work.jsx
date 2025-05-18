import SingleWork from "../components/SingleWork";

export default function Work() {
  return (
    <div className="flex flex-col gap-4 border-l-2 border-sky-500 pl-6 lg:pr-6">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
        Work Experience
      </h2>
      <div>
        <SingleWork
          logo="/Futureblink.webp"
          name={"FutureBlink"}
          title={"Software Engineer"}
          description={[
            "Developed functionality to create workspaces for accounts, allowing each workspace to store and manage its own separate data.",
            "Implemented a comprehensive White Labeling solution, enabling users to fully rebrand the platform.",
            "Developed a mobile application that allows users to access, manage, and send emails directly from their inbox.",
            "Developed automated system for fetching, storing, and syncing data from Google Sheets to databases, running every 24 hours to detect and integrate any new data.",
          ]}
          from={"June 2024"}
          to={"Present"}
          website={"https://futureblink.com/"}
        />
      </div>
    </div>
  );
}
