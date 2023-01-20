import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import Main from "../../Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/showDetails/:id',
                loader: ({params}) => fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${params.id}`),
                element: <ShowDetails></ShowDetails>
            }
        ]
    }
])
export default routes; 