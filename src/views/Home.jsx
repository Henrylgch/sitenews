import React, {Component} from 'react'

import Newslist from '../components/Newslist'
import Header from '../components/Header'
import Categoryfilter from '../components/Categoryfilter'

class Home extends Component {
    state ={
        news: [],
    }

    componentDidMount() {
        this.getNews()
    }

    

    //Haciendo peticion a la api y agregando las noticias al state
    getNews = async (category = 'general') => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=30dd552868f84c9f9a74bbbb172d0bdf`)
        const news = await res.json()

        this.setState({
            news: news.articles
        })
    }

    render() {
        return (
            <div className="body">
                <Header titulo="React News API" />

                <div className="container back-sec rounded my-5" >
                    <Categoryfilter
                        getNews={this.getNews}
                    />

                    <Newslist 
                        news={this.state.news}
                    />
                </div>
            </div>
        )
    }
}

export default Home