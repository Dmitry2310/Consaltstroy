/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { getAllNews } from '../actions/news';

const Paginate = ({ page, numberOfPages }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px', padding: '10px 0' }}>
            <Pagination
                count={numberOfPages}
                page={Number(page) || 1}
                variant="outlined"
                color="primary"
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/news?page=${item.page}`} />
                )}
            />
        </div>
    );
};

export default Paginate;