import React, {useEffect, useState} from 'react';
import axios from "axios";
import Dishes from "./Dishes";
import Layout from "./Layout";
import '../style.css'
import Spinner from "./Spinner";


const Home = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const filteredMeals = meals.filter(el => el.strMeal)


    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/latest.php/')
            .then(res => {
                setMeals(res.data.meals)
                setIsLoading(false)
            })
    }, [])


    if (isLoading) return <Spinner/>


    return (

        <section className="hero-meal"
                 style={{background: `rgba(0,0,0,0.5) url(${"https://textures.world/wp-content/uploads/2018/10/Dark-Wood-Seamless-Background-Texture-2-copy-1.jpg"})`}}>
            <Layout>
                <h1 className='pt-5 text-light'>Welcome to TheMealDB</h1>
                <div className="row">
                    {
                        filteredMeals.map(meal => <Dishes meal={meal} key={meal.idMeal}/>
                        )
                    }
                </div>
            </Layout>
        </section>

    );
};

export default Home;