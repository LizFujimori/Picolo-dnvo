
class erroz extends Error {
    constructor(message){
      super(message);
      this.name = "erroz";
    }
  }
  
  class NerdIF {
    constructor(estudante, cosplay, nota_cosplay) {
      this.estudante = estudante;
      this.cosplay = cosplay;
      this.nota_cosplay = nota_cosplay;
    }
  
    retornarAtributos() {
      try{
        return this.atributos();
        }
        catch (error) {
          console.log(error) 
      }
      }
    
  
    atributos() {
      if(this.estudante!= "" && this.cosplay != "" && this.nota_cosplay !=""){
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    } else{
      throw new erroz("erro errado")
    }
    }
  }
  
  const aluno = new NerdIF("Duran", "Saitama","" );
  const atributos = aluno.retornarAtributos();
  
  console.log(atributos.estudante); 
  console.log(atributos.cosplay);   
  console.log(atributos.nota_cosplay);
  
  