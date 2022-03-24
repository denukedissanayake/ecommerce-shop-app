import './styles/CustomTitle.css'

type Props = {
    size: number
    title : string
}

const CustomTitle = ({size, title}: Props) => {
  return (
      <div className='title-container' style={{ fontSize: `${size}px` }}>{title}</div>
  )
}

export default CustomTitle