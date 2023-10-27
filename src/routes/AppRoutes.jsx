import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage.jsx'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/aboutUs'} element={<AboutUsPage />} />
            <Route path={'/projects'} element={<ProjectsPage />} />

        </Routes>
    )
}

export default AppRoutes