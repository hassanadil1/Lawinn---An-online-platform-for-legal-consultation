import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  expertise,
  experience, // New prop for experience
  contact, // New prop for contact
  header,
  icon,
  imageUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  expertise?: string | React.ReactNode;
  experience?: string | React.ReactNode; // New prop for experience
  contact?: string | React.ReactNode; // New prop for contact
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imageUrl?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="flex space-x-4 items-center group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Grid item image"
            className="h-14 w-14 object-cover rounded-full border-2 border-neutral-400 dark:border-neutral-700"
          />
        )}
        <div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          <strong>Expertise: </strong>{expertise}
          </div>
          {experience && (
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2">
              <strong>Experience:</strong> {experience}
            </div>
          )}
          {contact && (
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2">
              <strong>Contact:</strong> {contact}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};