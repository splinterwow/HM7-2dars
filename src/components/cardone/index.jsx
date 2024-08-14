import React, { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Cardone.css';

const Cardone = () => {
    const [prod, setProd] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 12;
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/all?_limit=${limit}&_page=${page}`)
            .then(resp => {
                const total = resp.headers.get('X-Total-Count');
                if (total) {
                    setTotalItems(parseInt(total));
                } else {
                    console.log('Total count header not found. Defaulting to 50 items.');
                    setTotalItems(50);
                }
                return resp.json();
            })
            .then(data => {
                if (data.length > 0) {
                    setProd(data);
                } else {
                    console.log('No data returned from API for the current page.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [page]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="cardone-container">
            <div className='pagination-info'>
                <p>Page {page} of {Math.ceil(totalItems / limit)}</p>
                <p>Total Items: {totalItems}</p>
            </div>
            <div className='cards-grid'>
                {prod.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={`https://picsum.photos/200/300?random=${index + (page - 1) * limit}`} alt="" />
                        <div className="card-content">
                            <h1>{item.country}</h1>
                            <p>{item.code} <span>{item.id}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <Stack spacing={2} className="pagination">
                <Pagination
                    count={Math.ceil(totalItems / limit)}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={handlePageChange}
                />
            </Stack>
        </div>
    );
};

export default Cardone;
