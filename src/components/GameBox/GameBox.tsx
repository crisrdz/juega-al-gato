import { Option } from "../../models/Option";

type Props = {
  option: Option;
  className?: string;
  onClick: () => void,
};

function GameBox({ option, className, onClick }: Props) {
  if(option.marked) {
    return <div className={className}>
      { option.option }
    </div>
  }
  
  return <div className={className} onClick={onClick}></div>;
}

export default GameBox;
