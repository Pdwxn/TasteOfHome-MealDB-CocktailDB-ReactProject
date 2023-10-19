import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/heroslider/Hero'
import Footer from '../components/footer/footer'
import constants from '../utils/constants.json'

function Home() {
    const { API_URL, SEARCH_BY_NAME, SEARCH_BY_ID, CATEGORIES } = constants;

    const [pastaRecipe, setPastaRecipe] = useState([]);
    const [burgerRecipe, setBurgerRecipe] = useState([]);
    const [chickenRecipe, setChickenRecipe] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        const fetchPastaRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}53064`)
                const data = await res.json()

                setPastaRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchPastaRecipe()
    }, [])

    useEffect(() => {
        const fetchBurgerRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}53010`)
                const data = await res.json()

                setBurgerRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {

            }
        }
        fetchBurgerRecipe()
    }, [])

    useEffect(() => {
        const fetchChickenRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}52951`)
                const data = await res.json()

                setChickenRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {

            }
        }
        fetchChickenRecipe()
    }, [])
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default Home