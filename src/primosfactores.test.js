import primos from "./numerosprimos";

describe("FACTORES PRIMOS", () => {
  it("Debería retornar una lista vacía para 1", () => {
    const primosfac= new primos();
    expect(primosfac.factorprimo(1)).toEqual([]);
  });
  it("Debería retornar una lista  para [2]", () => {
    const primosfac= new primos();
    expect(primosfac.factorprimo(2)).toEqual([2]);
  });
  it("Debería retornar una lista  para [3]", () => {
    const primosfac= new primos();
    expect(primosfac.factorprimo(3)).toEqual([3]);
  });
  it("Debería retornar una lista  para [2,2]", () => {
    const primosfac= new primos();
    expect(primosfac.factorprimo(4)).toEqual([2,2]);
  });
});

