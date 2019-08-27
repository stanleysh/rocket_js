
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let rocket = new Rocket;
      const prefixes = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"],
            suffixes = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
      const colour_list = ["red", "yellow", "blue", "green", "purple", "orange"];
      let prefix = rocket.name.split(' ')[0].toLowerCase();
      let suffix = rocket.name.split(' ')[1].toLowerCase();
      let prefixExist = prefixes.includes(prefix);
      let suffixExist = suffixes.includes(suffix);
      let color = rocket.colour;
      let colorExist = colour_list.includes(color);
      let rocketFlying = rocket.flying;
      let result = prefixExist && suffixExist && colorExist && !rocketFlying;


      expect(result).toBe(true);
    });

    test("it should set the rocket's name if provided", () => {
      let rocket = new Rocket({name: 'rocket1'});

      expect(rocket.name).toBe('rocket1');
    });

    test('it should set the rocket\'s colour if provided', () => {
      let rocket = new Rocket({colour: 'cyan'});

      expect(rocket.colour).toBe('cyan');
    });

    test('it should set the rocket\'s flying status if provided', () => {
      let rocket = new Rocket({flying: true});

      expect(rocket.flying).toBe(true);
    });
  });
  describe('functions', () => {
    describe('liftOff', () => {
      test('it should return true if the rocket is not flying', () => {
        let rocket = new Rocket;

        expect(rocket.liftOff()).toBe(true);
      });

      test('it should return false if the rocket is already flying', () => {
        let rocket = new Rocket({flying: true});

        expect(rocket.liftOff()).toBe(false);
      });
    });
  });

});
