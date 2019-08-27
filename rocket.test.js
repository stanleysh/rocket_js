
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
    describe('land', () => {
      test('it should return false if the rocket is not flying', () => {
        let rocket = new Rocket;

        expect(rocket.land()).toBe(false);
      });
      test('it should return true if the rocket is j0', () => {
        let rocket = new Rocket({flying: true});

        expect(rocket.land()).toBe(true);
      });
    });
    describe('status', () => {
      test('if the rocket is not flying, it should return that the rocket is ready for liftoff', () =>{
        let rocket = new Rocket;

        expect(rocket.status()).toBe(`Rocket ${rocket.name} is ready for liftoff!`)
      });
      test('if the rocket is not flying, it should return that the rocket is already flying', () =>{
        let rocket = new Rocket({flying: true});

        expect(rocket.status()).toBe(`Rocket ${rocket.name} is flying through the sky!`)
      });
    });
    describe('sendCodedSignal', () => {
      test('if nothing is passed in, signalinfo should return "boop"', () => {
        let rocket = new Rocket;

        expect(rocket.sendCodedSignal()).toBe('boop');
      });
      test('if message code was less than 10, than the signal info should be beep', () => {
        let rocket = new Rocket;

        expect(rocket.sendCodedSignal(6)).toBe('beep');
      });
      test('if message code is below 10 and is flying should return "beep beep"', () => {
        let rocket = new Rocket({flying: true});

        expect(rocket.sendCodedSignal(6)).toBe('beep beep');
      });
      test('if message code isn\'t a number, it should return "boop" "beep" "beep"', () => {
        let rocket = new Rocket;

        expect(rocket.sendCodedSignal('hello')).toBe('boop beep beep');
      });
      test('if message code is a number above 10, it should return "boop beep beep"', () => {
        let rocket = new Rocket;

        expect(rocket.sendCodedSignal(11)).toBe('boop beep beep');
      });
      test('if message code is not a number or a number above 10 and the rocket is flying, it should return "boop boop boop"', () => {
        let rocket = new Rocket({flying: true});

        expect(rocket.sendCodedSignal(11)).toBe('boop boop boop')
      });
    });
  });
});
