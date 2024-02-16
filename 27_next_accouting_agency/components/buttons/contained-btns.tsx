import { classNames } from "@/utils/tools";

export const PrimaryContainedButton: React.FC<IButton> = ({
  title,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "w-full rounded-md px-sm py-xs text-white",
        "bg-primary-700 hover:bg-primary-800 disabled:bg-primary-400"
      )}
      {...props}
    >
      {title}
    </button>
  );
};
