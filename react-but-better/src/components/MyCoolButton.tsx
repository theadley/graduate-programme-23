interface IButtonProps {
  color?: "dark" | "light";
  children?: React.ReactNode;
  className?: string;
}
export const MyCoolButton = ({
  color = "light",
  children,
  className = "",
}: IButtonProps) => {
  const appliedClasses = [color === "dark" ? "dark-btn" : "light-btn"];
  if (className.length) {
    appliedClasses.push(className);
  }
  appliedClasses.push(stylesTW.button);
  return (
    <button className={appliedClasses.join(" ")}>
      {children ?? "Click Me"}
    </button>
  );
};

const stylesTW = {
  button: "mx-4 my-2 p-2 bg-teal-400 text-xl",
  avatar: "",
};
