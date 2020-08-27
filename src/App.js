import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './styles/app.css';
import Header from './components/Header';
// import Landing from './components/Landing';
import Main from './components/Main';
import Footer from './components/Footer';
import {GetProjects, GetProjectImage, GetReadme} from './services/getProjects';

function App() {
    const [allProjects, setAllProyects] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [allReadmes, setAllReadmes] = useState([]);

    const getProjectsData = async () => {
        const projectsInfo = await GetProjects();
        setAllProyects(projectsInfo.items);


        const imagePromises = projectsInfo.items.map(project => {
            return GetProjectImage(project.contents_url); //TODO Meter imagen por defecto
        });

        const readmePromises = projectsInfo.items.map(project => {
            return GetReadme(project.url); //TODO Meter imagen por defecto
        });

        const readmes = await Promise.all(readmePromises);
        setAllReadmes(readmes);

        const images = await Promise.all(imagePromises);
        setAllImages(images.map(image => image.download_url));
    };

    useEffect(() => {
        getProjectsData();
    }, []);

    return (
      <div className="app">
        <Header />
        {/*<Landing/>*/}
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