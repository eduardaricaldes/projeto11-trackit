import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({ percentual = 0 }){
  return(
    <CircularProgressbar value={percentual}
          maxValue={1}
          text={"Hoje"}
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