import React, { useState } from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './news.css';
import './pagination.css';
import NewsCard from './NewsCard';
import { NewsData } from '../../../data/NewsData';
import ReactPaginate from 'react-paginate';

function NewsPage() {
    const [news, setNews] = useState(NewsData.slice(0, 100000));
    const [pageNumber, setPageNumber] = useState(0);

    const newsPerPage = 6;
    const pagesVisited = pageNumber * newsPerPage; 

    const displayNews = news
        .slice(pagesVisited, pagesVisited + newsPerPage)
        .map((newsCard, index) => {
        return(
            <NewsCard 
                title={newsCard.title} 
                date={newsCard.date}
                category={newsCard.category}
                contentText={newsCard.contentText}
                key={index}
            />
        );
    });

    const pageCount = Math.ceil(news.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    console.log('setNews:', setNews);
    return (
        <FrameContainer>
            <HeroSmall title='News' />
            <div className='container newsPage-flex-container'>
                {displayNews}
                <ReactPaginate 
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </FrameContainer>
    );
}

export default NewsPage;