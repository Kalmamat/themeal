import React from 'react';
import {Link} from "react-router-dom";


const Dishes = ({meal}) => {
    return (
            <div className="col-md-3 mb-5 mt-5 border-danger">
                <Link to={`/meal/${meal.idMeal}`}>
                    <div className="card" >
                        <img src={`${meal.strMealThumb}`} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-text fs-6 text-light mt-3">{meal.strMeal}</div>
                </Link>

            </div>

    );
};

export default Dishes;