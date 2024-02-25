import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
    const [cruds, setCruds] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [crudsPerPage] = useState(5); // Number of cruds per page

    useEffect(() => {
        async function fetchCruds() {
            try {
                const response = await axios.get(`/api/cruds?page=${currentPage}&limit=${crudsPerPage}&search=${searchQuery}`);
                setCruds(response.data);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchCruds();
    }, [currentPage, searchQuery, crudsPerPage]);

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset page number to 1 when search query changes
    };

    // Function to handle search button click
    const handleSearchButtonClick = () => {
        setCurrentPage(1); // Reset page number to 1 when search button is clicked
    };

    // Function to handle pagination
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate indexes for pagination
    const indexOfLastCrud = currentPage * crudsPerPage;
    const indexOfFirstCrud = indexOfLastCrud - crudsPerPage;
    const currentCruds = cruds.slice(indexOfFirstCrud, indexOfLastCrud);

    return (
        <div className="container">
            <div>
                <h2>
                    CRUD - Table View
                    <p>
                        <Link to="/cruds/new" className="btn btn-primary float-right">
                            Create CRUD
                        </Link>
                    </p>
                </h2>
                <hr />
                <div className="input-group mb-3">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={handleSearchButtonClick}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table riped table-hover table-bordered container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCruds.map((crud) => (
                            <tr key={crud._id}>
                                <td>
                                    <Link to={`/cruds/${crud._id}`} className="link-line">
                                        {crud.companyName}
                                    </Link>
                                </td>
                                <td>{crud.phone}</td>
                                <td>{crud.email}</td>
                                <td>{crud.location}</td>
                                <td>
                                    <Link to={`/cruds/${crud._id}`} className="btn btn-warning">
                                        View
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/cruds/${crud._id}/edit`} className="btn btn-success">
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/cruds/${crud._id}/delete`} className="btn btn-danger">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(cruds.length / crudsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button onClick={() => paginate(index + 1)} className="page-link">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default CrudTable;
