import { Link } from "react-router-dom";

const Card = ({ body, title, id, imageUrl }) => {           


      return (

        <div className="card app-card">

            <Link to={`/articles/${id}`} >

                <img className="card-img-top" src={imageUrl} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title-title">{title}</h5>
                    <p className="card-text-body"> 'https://www.reuters.com/article' </p>
                </div>

            </Link>

        </div>
        
    );
};

export default Card;