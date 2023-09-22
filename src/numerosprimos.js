class primos{
  
  constructor(n){
    this.n=n;
    this.resulprimos=[];
  }

  factorprimo(){
    
   for(let cantidad=2;this.n>1;cantidad++){
    
    while(this.n % cantidad=== 0){
      this.resulprimos.push(cantidad);
      this.n /=cantidad;
     }

    }      
       
    return this.resulprimos;

  }
}

export default primos;