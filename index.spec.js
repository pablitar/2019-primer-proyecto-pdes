import { Golondrina } from './index';

describe("pepita básica", () => {
  it("deberia volar y consumir energia", () => {
    const pepita = new Golondrina(50);
    pepita.volar(2);
    expect(pepita.energia).toEqual(44)
  })

  it("deberia comer y ganar energia", () => {
    const pepita = new Golondrina();
    pepita.comer(4)
    expect(pepita.energia).toEqual(38)
  })
})