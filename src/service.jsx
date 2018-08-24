import React from 'react';

import styles from './styles.css';
import Main from './main';
import Sidebar from './sidebar';

import {
  selectProduct,
  fetchAggregates,
  fetchReviews,
} from './redux/actions';

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      aggregates: {
        score: null,
        qty: null,
      },
      reviews: [],
      images: [],
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    fetch(`/reviews/all/${productId}`)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.getReviews(json);
        this.getAggregates(json);
        this.getProduct(json);
        this.getImages();
      }).catch((err) => {
        if (err) console.log('an error occured:', err);
      });

    if (this.props.match.params.productId !== this.state.product) {
      this.props.store.dispatch(selectProduct(this.props.match.params.productId));
      this.props.store.dispatch(fetchAggregates(this.props.match.params.productId));
      this.props.store.dispatch(fetchReviews(this.props.match.params.productId));
    }
  }

  getReviews(reviews) {
    const reviewsArr = reviews.reduce((accum, current) => {
      const { id, date, img, product_id, rating, review, title, user_id, username } = current;
      accum.push({ id, date, img, product_id, rating, review, title, user_id, username });
      return accum;
    }, []);
    this.setState({
      reviews: reviewsArr,
    });
  }

  getAggregates(summary) {
    const { product_id, five, four, three, two, one, product_name } = summary[0];
    const qty = one + two + three + four + five;
    const score = Math.round(qty / (summary.length * 40)) / 2;

    this.setState({
      aggregates: { product_id, five, four, three, two, one, product_name, qty, score },
    });
  }

  getProduct(summary) {
    this.setState({
      product: summary[0].product_id,
    });
  }

  getImages() {
    const images = [[
      { url: 'images (15) copy.jpeg' },
      { url: 'images (18) copy.jpeg' },
      { url: 'images (16) copy.jpeg' },
      { url: 'images (14) copy.jpeg' },
      { url: 'images (17) copy.jpeg' },
      { url: 'images (13) copy.jpeg' },
    ]];
    this.setState({
      images,
    });
  }

  render() {
    return (
      <div>
        <a id="reviews" href={`*/#reviews`}></a>
        <hr className={styles.divider}></hr>
        <div className={styles.service}>
          <Main aggregates={this.state.aggregates} reviews={this.state.reviews} images={this.state.images} />
          <Sidebar reviews={this.state.reviews} images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Service;
