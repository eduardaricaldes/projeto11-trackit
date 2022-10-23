import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress(){
  const value = 0.66;
  return(
    <CircularProgressbar value={value}
          maxValue={1}
          text={`${value * 100}%`}
          background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
  )
}