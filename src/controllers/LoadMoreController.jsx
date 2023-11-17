import React from 'react'
import LoadMore from '../views/LoadMore'
import { useSearchParams } from 'react-router-dom';

const LoadMoreController = () => {
    const [params, setParams] = useSearchParams()

    const handleClick = () => {
        const pageNumber = +params.get("page")
        setParams({page: pageNumber + 1})
    };
  return <LoadMore handleClick={handleClick}/>
}

export default LoadMoreController