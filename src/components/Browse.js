import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "./Layout";
import Spinner from "./Spinner";


const Browse = () => {
    const {name} = useParams()
    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => {
                setSearchResult(res.data.meals)
                setIsLoading(false)
            })
    },)

    if (isLoading) return <Spinner/>
    if (searchResult === null) {
        return (
            <Layout>
                <h2>Product not found</h2>
            </Layout>
        )
    }
    return (
        <section className="hero-meal"
                 style={{background: `url(${"https://textures.world/wp-content/uploads/2018/10/Dark-Wood-Seamless-Background-Texture-2-copy-1.jpg"})`}}>
            <Layout>
                <div className='card bg-transparent pt-5'>
                    <div className='row'>
                        {
                            searchResult.map((el) => (
                                <div className='col-md-3' key={el.idMeal}>
                                    <Link to={`/meals/${el.idMeal}`}>
                                        <img className="w-100" src={el.strMealThumb} alt=""/>
                                        <div className="fw-normal my-3  text-light">{el.strMeal}</div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </section>
    );
};

export default Browse;