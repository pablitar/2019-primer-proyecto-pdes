//Golondrinas: Pueden comer y volar. Cuando comen ganan 2 de energia por cada gramo que consuman, y cuando vuelan, pierden 3 de energia por cada km.
export class Golondrina {
  constructor(energia = 30) {
    this.energia = energia
  }

  volar(km) {
    this.energia -= km * 3
  }
  
  comer(gramos) {
    this.energia += gramos * 2
  }
}