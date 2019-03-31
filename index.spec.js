import { crearGolondrina } from './index';

describe("pepita básica", () => {
  it("deberia volar y consumir energia", () => {
    const pepita = crearGolondrina();
    pepita.volar(2);
    expect(pepita.energia).toEqual(24)
  })

  it("deberia comer y ganar energia", () => {
    const pepita = crearGolondrina();
    pepita.comer(3)
    expect(pepita.energia).toEqual(36)
  })
})