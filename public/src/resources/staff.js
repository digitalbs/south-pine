let staffResource = function ($resource, API_URL) {
  return $resource(API_URL + '/staff/:id', {
    id: '@id'
  });
};

staffResource.$inject = ['$resource', 'API_URL'];

export default staffResource;
