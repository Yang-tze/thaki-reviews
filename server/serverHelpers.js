const getReviews = (product) => {
  // get all reviews, user info, images, comments for product
};

const getAggregate = (product) => {
  // get aggregate score & review quantity
};

const updateAggregate = (product, review) => {
  // TODO: write record @ product id, filtering & averaging reviews by product id
};

const addReview = (review) => {
// add users record if new
// add reviews record (w/ foreign key user_id)
// add images record if applicable (w/ foreign key review_id)
// update/get aggregates
};

const addComment = (comment) => {
// add users record if new
// add comment record (w/ foreign key user_id)
};

const updateReview = (category) => {
// increment/decrement helpful, not_helpful, or abuse in review record
};

const reportComment = (abuse) => {
// increment abuse in comment record
};

export default {
  getReviews,
  getAggregate,
  addReview,
  addComment,
  updateReview,
  reportComment,
};
