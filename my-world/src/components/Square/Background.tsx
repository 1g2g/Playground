import { Square } from "components/Square/Square";
import { Icon } from "./Icon";
import "components/Square/square.scss";

export const Background = () => {
  return (
    <div className="background">
      <Square />
      <Icon
        imgSize="100px"
        clickedTime={2}
        belongToSettings={false}
        fontColor="black"
      />
    </div>
  );
};
