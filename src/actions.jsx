const Filters = {
  SHOW_ALL: 'SHOW_ALL',
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
  type: 'SET_FILTER',
  filter
});

​const search = query => ({
  type: 'SET_QUERY',
  query
});

export { 
  Filters,
  filter,
  search,
};
