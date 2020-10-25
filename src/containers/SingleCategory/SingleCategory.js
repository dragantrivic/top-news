import React, { useState, useEffect } from 'react';
import { AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Slider from 'react-slick';
import ApiService from '../../services/ApiService';

import NewsItem from '../../components/NewsItem/NewsItem';
import NextArrow from '../../components/UI/Slider/NextArrow/NextArrow';
import PrevArrow from '../../components/UI/Slider/PrevArrow/PrevArrow';

const SingleCategory = (props) => { 
    const [topNews, setTopNews] = useState([]);
    const category = props.categoryName;
    const navProps = props.navProps;
    const activeLang = props.activeLang;

    useEffect(() => {
        if (activeLang) {
            getTopNewsByCategory(activeLang, category);
        }
    }, [activeLang]) // eslint-disable-line react-hooks/exhaustive-deps

    const getTopNewsByCategory = async (lang, category) => {
        try {
            const amountOfNews = 5;
            const res = await ApiService.getSomeNewsByCat(lang, category, amountOfNews);
            const data = await res.json();

            setTopNews([...data.articles]);

            if (!res.ok) {
                throw Error(res.statusText);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const articleSelectedHandler = (id) => {
        navProps.history.push({ 
            pathname: `/${activeLang}/${category}/${id}`,
            state: topNews[id]
        });
    }

    const categorySelectedHandler = (category) => {
        navProps.history.push({
            pathname: `/${activeLang}/${category}`,
            state: category
        })
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const accordionBtnStyle = {
        textTransform: 'capitalize',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        borderBottomWidth: '1px',
        borderColor: '#e2e8f0',
        backgroundColor: '#fff'
    }

    const newsItemDivStyle = {
        width: '100%',
    }

    const newItemInnerDivStyle = {
        minHeight: '550px'
    }

    const newsItemImgStyle = {
        height: '210px'
    }

    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton style={accordionBtnStyle}>
                    {category}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <section>
                    <Slider {...settings}>
                        {topNews.map((newsItem, index) => 
                            <NewsItem
                                key={index}
                                divStyle={newsItemDivStyle}
                                divInnerStyle={newItemInnerDivStyle}
                                imgStyle={newsItemImgStyle}
                                title={newsItem.title}
                                image={newsItem.urlToImage}
                                description={newsItem.description}
                                clicked={() => articleSelectedHandler(index)}
                            />
                        )}
                    </Slider>
                    <button 
                        className="block mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                        onClick={() => categorySelectedHandler(category)}>
                            More News
                    </button>
                </section>
            </AccordionItemPanel>
        </AccordionItem>
    );
};

export default SingleCategory;