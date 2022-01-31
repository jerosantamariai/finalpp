import React from "react";
import { Link } from "react-router-dom";

const Blog = props => {
    return (
        <div className="blog">
            <div className="card my-5 mx-5">
                <div className="row g-0">
                    <div className="col-md-4 p-5 text-center">
                        <img src="https://picsum.photos/id/37/200/300" className="img-fluid mx-auto" alt="..." />
                        <Link to="/blogs" className="btn btn-warning my-5">Blogs</Link>
                    </div>
                    <div className="col-md-8 p-5">
                        <div className="card-body">
                            <h5 className="card-title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                            <p className="card-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;