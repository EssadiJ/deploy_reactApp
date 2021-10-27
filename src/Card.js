function Card(props){
    return(
        <div className={"container"}>
            <img src={props.img} alt="picsum"/>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.Phone}</h2>
        </div>
    )
}
export  default Card;