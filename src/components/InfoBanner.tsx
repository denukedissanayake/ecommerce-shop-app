import { fontWeight } from "@mui/system"

type InfoType = {
  type : "WARNING" | "ERROR" | "SUCCESS" | "INFO"
}

type Props = {
  message: string,
  type: InfoType | string
}

const InfoBanner = (props: Props) => {
  let color;
  if(props.type.toString() == "WARNING"){
    color = "red"
  } else if(props.type.toString() == "ERROR"){
    color = "yellow"
  } else if(props.type.toString() == "SUCCESS"){
    color = "green"
  } else if(props.type.toString() == "INFO"){
    color = "blue"
  }

  return (
    <p style={{
      textAlign: "center",
      color: color,
      fontWeight: "bold"
    }}>{props.message}</p>
  )
}

export default InfoBanner