import {expect} from 'chai';
import mangia from './index';

describe('mangia-mangia', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(mangia.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });
  });

  describe('random', function() {
    it('should return a random item from the mangia.all', function() {
      var randomItem = mangia.random();
      expect(mangia.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = mangia.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(mangia.all).to.include(item);
      });
    });
  });
});
