import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({ percentual }){
  return(
    <CircularProgressbar value={percentual}
          maxValue={1}
          text={`${percentual * 100}%`}
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