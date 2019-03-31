//Golondrinas: Pueden comer y volar. Cuando comen ganan 2 de energia por cada gramo que consuman, y cuando vuelan, pierden 3 de energia por cada km.
export function crearGolondrina() {
  return {
    energia: 30,
    volar: function(km) {
      this.energia -= km * 3
    },
    comer: function(gramos) {
      this.energia += gramos * 2
    }
  }
}