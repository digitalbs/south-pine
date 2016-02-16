import smallAnimal from '../content/smallAnimal';
import equine from '../content/equine';
import bovine from '../content/bovine';

function ServiceTypes($stateParams) {
  this.page = buildContent($stateParams.service);
}

function buildContent (service) {
  let serviceType = service.split('-')[0];
  let content = {
    small: smallAnimal,
    equine: equine,
    bovine: bovine
  }

  return content[serviceType];
}

module.exports = ServiceTypes;
