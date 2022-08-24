interface InformationProps{
    title : string;
    info : string;
}

export default function Information(props:InformationProps) {
  const {title, info} = props;
  return (
    <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{info}</p>
    </div>
  )
}
