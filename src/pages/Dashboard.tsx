import React from 'react';
import {
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage,
    IonRow, IonSegment, IonSegmentButton
} from '@ionic/react';
import './Dashboard.css';
import Product1 from "../assets/icons/energy-drink.svg";
import {
    notificationsOutline,
    searchSharp,
    menu,
    home,
    heart,
    pin,
    star,
    call,
    globe,
    basket,
    navigate
} from "ionicons/icons";

const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="top-header">
                    <div className="header-row">What would you like to eat?</div>
                    <div className="notification">
                        <IonIcon className="notify-icon" icon={notificationsOutline}/>
                        <span className="notify-count"></span>
                    </div>
                </div>
                <div className="top-search">
                    <IonIcon className="search-icon" icon={searchSharp}/>
                    <input
                        className="search-food"
                        id="search"
                        placeholder="Find a Food or Restaurent"
                    />
                    <IonIcon className="menu-icon" icon={menu}/>
                </div>
                <div className="product-category">
                    <div className="product-row">
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                        <div className="product-item">
                            <div className="product-card">
                                <img className="product-image" src={Product1}/>
                            </div>
                            <div className="product-name">Shushi</div>
                        </div>
                    </div>
                </div>
                <div className="popular-food">
                    <div className="popular-food-header">
                        <div className="popular-food-header-row">
                            Popular Food
                        </div>
                    </div>
                    <div className="popular-food-row-container">
                        <div className="popular-food-row">
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-food-item">
                                <div className="popular-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="popular-food-img-cont">
                                        <img className="popular-food-img" src={Product1}/>
                                    </div>
                                    <div className="popular-food-name">
                                        <div className="food-name">
                                            Grilled Salmon
                                        </div>
                                        <div className="food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="food-ratings-price-row">
                                        <div className="food-ratings">
                                        <span className="numeric-rating">
                                           4.9
                                        </span>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <img className="star-icon" src={star}/>
                                            <span className="numeric-like">(200)</span>
                                        </div>
                                        <div className="food-price">
                                            $96.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="best-food">
                    <div className="best-food-header">
                        <div className="best-food-header-row">
                            Best Food
                        </div>
                    </div>
                    <div className="best-food-row-container">
                        <div className="best-food-row">
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-food-item">
                                <div className="best-food-card">
                                    <div className="food-like">
                                        <img className="like-icon" src={heart}/>
                                    </div>
                                    <div className="best-food-img-cont">
                                        <img className="best-food-img" src={Product1}/>
                                    </div>
                                    <div className="best-food-name-cont">
                                        <div className="best-food-name">
                                            Salad with chicken
                                        </div>
                                        <div className="best-food-nav">
                                            <img className="nav-icon" src={navigate}/>
                                        </div>
                                    </div>
                                    <div className="best-food-ratings-price-row">
                                        <div className="best-food-ratings">
                                        <span className="best-numeric-rating">
                                           4.9
                                        </span>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <img className="best-star-icon" src={star}/>
                                            <span className="best-numeric-like">(200)</span>
                                        </div>
                                        <div className="best-food-price">
                                            $196.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;