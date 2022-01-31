import React from "react";
import { Link } from 'react-router-dom';

const Blogs = props => {
    return (
        <div className="blogs">
            <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link className="btn btn-info" to="">Leer más...</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/id/137/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link className="btn btn-info" to="">Leer más...</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/id/247/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <Link className="btn btn-info" to="">Leer más...</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/id/277/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link className="btn btn-info" to="">Leer más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;