const Filters = {
  TOP_RATED: 'TOP_RATED',
  MOST_RECENT: 'MOST_RECENT',
  ALL_REVIEWERS: 'ALL_REVIEWERS',
  VERIFIED_ONLY: 'VERIFIED_ONLY',
  FIVE_STAR: 'FIVE_STAR',
  FOUR_STAR: 'FOUR_STAR',
  THREE_STAR: 'THREE_STAR',
  TWO_STAR: 'TWO_STAR',
  ONE_STAR: 'ONE_STAR',
  POSITIVE: 'POSITIVE',
  CRITICAL: 'CRITICAL',
  REQUIRE_IMAGE: 'REQUIRE_IMAGE'
};

const filter = filter => ({
  type: 'FILTER',
  filter
});

​const search = query => ({
  type: 'SEARCH',
  query
});

export { 
  Filters,
  filter,
  search,
};
