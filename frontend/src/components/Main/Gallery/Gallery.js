import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import axios from 'axios';
import HashLoader from './AwesomeComponent';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [], albumsp: [] };
    }
    componentDidMount() {
        axios.get(`/api/gallerydata`)
            .then(res => {
                this.setState({ images: res.data });
                if (res.data > 0) {
                    this.setState({ loaded: true });
                }
                else {
                    this.setState({
                        loaded: true
                    });
                }
            })
            .catch(err => console.log("Error" + err));
    }

    fetchImage = (image) => {
        const imageName = image.imgPath;
        const url = `http://localhost:5000/upload/image/gallery/${imageName}`;
        return (<img className="imgGal" height="300px" width="auto" src={url} alt="loading" id={image._id} key={image._id}/>)
    }

    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center album-header">
                                <h2>Gallery</h2>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    {this.state.images.map((image) => this.fetchImage(image))}
                </div>
            );
        }
        else {
            if (!this.state.loaded) {
                return (
                    <div className="loader"><HashLoader message="Hold Tight!" /></div>
                );
            }
        }
    }
}

export default Gallery;
