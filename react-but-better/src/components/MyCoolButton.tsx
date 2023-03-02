interface IButtonProps {
  color?: "dark" | "light";
  children?: React.ReactNode;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
export const MyCoolButton = ({
  color = "light",
  children,
  className = "",
  onClick = () => console.log("OW"),
}: IButtonProps) => {
  const appliedClasses = [color === "dark" ? "dark-btn" : "light-btn"];
  if (className.length) {
    appliedClasses.push(className);
  }
  appliedClasses.push(stylesTW.button);
  return (
    <button
      className={appliedClasses.join(" ")}
      onClick={onClick}>
      {children ?? "Click Me"}
    </button>
  );
};

const stylesTW = {
  button: "mx-4 my-2 p-2 bg-teal-400 text-xl",
  avatar: "",
};
