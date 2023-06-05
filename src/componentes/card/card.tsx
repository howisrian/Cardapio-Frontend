import './card.css'

interface CardProps {
    price: number;
    title: String;
    image: String;
}

export function Card(props : CardProps){
    return(
        <div className="card">
            <img src="" alt="" />
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}