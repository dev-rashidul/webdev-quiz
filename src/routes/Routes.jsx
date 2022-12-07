import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Erorr from "../components/Error/Erorr";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        loader : () =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>,
            },
            {
                path : '/quizCat/:quizId',
                element : <Quiz></Quiz>,
                loader : async({params})=>{
                    return fetch (`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                }

            }
        ]
        
    },
    {
        path : '*',
        element : <Erorr></Erorr>
    }
])

export default router;