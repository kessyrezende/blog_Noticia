if("serviceMorker" in navigator'){
   navigator.serviceMorker.register("sw.js")
   .then(function(){console.log("serviceMorker esta registrado")})
   .cath(function(){console.log("Erro ao registrar serviceMorker")})
}
