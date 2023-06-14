class MiErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro - Paralamas do Sucesso";
    }
  }
  
  class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    mostrarAtributos(){
      try {
        return this.atributos();  
      } catch (error) {
        console.log(error) 
      }
    } 
  
    atributos() {
      if (this.nome != ""){
        return {
          nome: this.nome,
          idade: this.idade,
          especie: this.especie
        };
      } else {
        throw new MiErro("Aconteceu um erro")
      }
    }
  }
  
  const miAnimal = new Animal("", 12, "Gatinho");
  const atributos = miAnimal.mostrarAtributos();
  
   console.log(atributos.nome);   
   console.log(atributos.idade);  
   console.log(atributos.especie); 