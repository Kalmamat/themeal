import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "./Layout";
import Spinner from "./Spinner";

const Ingredient = () => {
    const {name} = useParams()
    console.log(name)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(res => {
                setItems(res.data.meals)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) return <Spinner/>


    return (
        <section className="hero-meal" style={{background: `url(${"https://textures.world/wp-content/uploads/2018/10/Dark-Wood-Seamless-Background-Texture-2-copy-1.jpg"})`}}>
            <Layout>
                <div className='card bg-transparent pt-5'>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="w-100 " src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className='row'>
                                {
                                    items.map((el) => (
                                        <div className='col-md-3' key={el.idMeal}>
                                            <Link to={`/meal/${el.idMeal}`}>
                                            <img className="w-100" src={el.strMealThumb} alt=""/>
                                            <div className="fw-normal mt-3 text-light">{el.strMeal}</div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    );
};
export default Ingredient;