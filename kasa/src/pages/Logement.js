import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound'
import Dropdown from '../components/Dropdown.jsx'
import Slideshow from '../components/Slideshow.jsx'
import Tag from '../components/Tag.jsx'
import Rating from '../components/Rating.jsx'
import Host from '../components/Host.jsx'
import Logements from '../assets/logements.json'
import '../styles/Logement.css'

const Logement = () => {
    const params = useParams();
    const id = params.id;
    const data = Logements.find((logement) => logement.id === id)

    return (<main>
        {
                data ? (<div className="logement">
                <Slideshow slides={data.pictures}></Slideshow>
                <div className="logement-infos">
                    <div className="title">
                        <h1>{data.title}</h1>
                        <h2>{data.location}</h2>
                        <div className="tags">
                            {data.tags.map((value, i) => (
                                <Tag key={i} title={value}></Tag>
                            ))}
                        </div>
                    </div>
                    <div className="rating-host">
                        <Host name={data.host.name} image={data.host.picture}></Host>
                        <Rating stars={data.rating}></Rating>
                    </div>
                </div>
                <div className="infos">
                    <Dropdown title='Description' text={data.description}></Dropdown>
                    <Dropdown title='Équipements' text={data.equipments}></Dropdown>
                </div>
                </div>
                ) : (<NotFound/>)
        }
    </main>);
    
};

export default Logement;