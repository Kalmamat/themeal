import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from "react-router-dom";
import Layout from "./Layout";
import '../style.css'
import Spinner from "./Spinner";


const MealDetails = () => {
    const {id} = useParams()
    const [dish, setDish] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const getIngredients = () => {
        let index = 1;
        let ingredient = [];
        while (dish['strIngredient' + index]) {
            ingredient.push({
                name: dish['strIngredient' + index],
                amount: dish['strMeasure' + index] ? dish['strMeasure' + index] : ''
            });
            index++;
        }
        return ingredient
    }
    const ingredient = getIngredients()

    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setDish(res.data.meals[0])
                setIsLoading(false)
            })
    }, [id])

    if (isLoading) return <Spinner/>


    return (
        <section className="hero-meal"
                 style={{background: `url(${"https://textures.world/wp-content/uploads/2018/10/Dark-Wood-Seamless-Background-Texture-2-copy-1.jpg"})`}}>
            <Layout>
                <div className="card bg-transparent">
                    <div className="row ">
                        <div className="col-md-4 bg-unset ">
                            <img src={dish.strMealThumb} className="w-100 " alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">
                                    {
                                        ingredient.map((el) => (
                                            <div className="col-md-4 text-center" key={el.idMeal}>
                                                <Link to={`/ingredient/${el.name}`}>
                                                    <img
                                                        src={`https://www.themealdb.com/images/ingredients/${el.name}-Small.png`}
                                                        alt=""/>
                                                    <h3 className="fw-normal fs-6  text-light">{el.name}</h3>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center pb-5 text-light fs-6'>
                    <h1 className='text-center mb-5 text-light fw-normal fs-1'>Instructions:</h1>
                    {dish.strInstructions}
                </div>
            </Layout>
        </section>
    )
};
export default MealDetails;