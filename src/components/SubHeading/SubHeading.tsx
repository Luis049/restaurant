import { images } from "../../constants";

type Props = {
  title: string;
};

const SubHeading = ({ title }: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
