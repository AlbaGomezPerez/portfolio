import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './styles/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { GetProjects, GetProjectImage, GetReadme } from './services/getProjects';

/**
 * Component father which contains all important components
 */
function App() {
    const [allProjects, setAllProjects] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [allReadmes, setAllReadmes] = useState([]);

    AOS.init({
        duration: 1500,
        mirror: true,
    });

    /**
      * Call the API asynchronously to get all projects,
     their images and readmes and store them in state
     */
    const getProjectsData = async () => {
        const projectsInfo = await GetProjects();
        if(projectsInfo) {
            setAllProjects(projectsInfo.items);

            const imagePromises = projectsInfo.items.map(project => {
                return GetProjectImage(project.contents_url);
            });

            const images = await Promise.all(imagePromises);
            setAllImages(images.map(image => image.download_url));

            const readmePromises = projectsInfo.items.map(project => {
                return GetReadme(project.url);
            });

            const readmes = await Promise.all(readmePromises);
            setAllReadmes(readmes);
        }
    };


    /**
      * Run getProjectsData at first time
     */
    useEffect(() => {
        getProjectsData();
    }, []);

    /**
     * Render all components
     */
    return (
      <div className="app">
        <Header />
        <Main
            allProjects={allProjects}
            allImages={allImages}
            allReadmes={allReadmes}
        />
        <Footer />
      </div>
    );
  }

export default App;
