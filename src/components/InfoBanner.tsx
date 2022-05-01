import { fontWeight } from "@mui/system"

type InfoType = {
  type : "WARNING" | "ERROR" | "SUCCESS" | "INFO"
}

type Props = {
  message: string,
  type: InfoType | string
  alignment? :string
}

const InfoBanner = (props: Props) => {
  let color;
  if(props.type.toString() == "WARNING"){
    color = "orange"
  } else if(props.type.toString() == "ERROR"){
    color = "red"
  } else if(props.type.toString() == "SUCCESS"){
    color = "green"
  } else if(props.type.toString() == "INFO"){
    color = "blue"
  }

  let align ;
  if (props.alignment?.toString() === "CENTER") {
    align = "center"
  } else if (props.alignment?.toString() === "LEFT") {
    align = "left"
  } else if (props.alignment?.toString() === "RIGHT") {
    align = "right"
  }

  return (
    <p style={{
      textAlign: align as any,
      color: color,
      fontWeight: "bold"
    }}>{props.message}</p>
  )
}

export default InfoBanner