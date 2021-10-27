function Card(props){
    return(
        <div className={"container"}>
            <img src={props.img} alt="picsum"/>
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <p>{props.deply}</p>
        </div>
    )
}
export  default Card;