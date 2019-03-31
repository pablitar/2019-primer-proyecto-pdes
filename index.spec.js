import { Golondrina, GolondrinasInmutables as GI} from './index';

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

describe("pepita inmutable", () => {
  it("deberia volar y consumir energia", () => {
    const pepita = GI.volar(GI.crear("pepita"), 2)
    expect(pepita).toMatchObject({nombre: "pepita", edad: 1, energia: 24})
  })
});