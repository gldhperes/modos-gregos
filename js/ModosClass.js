class Modos{ 
    notas = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    index = 0;
    notaEscala = "";
    escala = []

    defineNota(){
        // Define a nota da escala
        for (let i = 0; i < this.notas.length; i++) {
            if( this.notas[i] == this.nota){ 
                this.index = i;
                break
            }
        }
      
    }

    setEscala(){
        let notasIndex = this.index

        // Começa adicionando a primeira nota
        this.escala.push( this.notas[notasIndex] )

        for (let i = 0; i < this.padrao.length; i++) {
            let casas = this.padrao[i]    

            notasIndex += casas
            console.log(notasIndex)

            if ( notasIndex >= this.notas.length ){
                notasIndex -= this.notas.length
                console.log("novo i nota: "+notasIndex)
            }

            this.escala.push( this.notas[notasIndex] )
               
        }
        
        console.log(this.escala)
        
    }

    getEscala(){
        console.log(this.escala)
        return this.escala
    }

    spawn(name, myClassf){
        var i = -1

        $("#"+name).empty()

        for(var i = 0; i < this.escala.length; i++){
            $("#"+name).append("<div class='classificacao'>  <p> <span class='nota'>"+this.escala[i]+"</span>" + "<span>"+myClassf[i]+"</span>" +"</p>  </div>")
        }
    }
}

class Jonio extends Modos{
    
    constructor(nota){
        super()
        this.name = "jonio"
        this.classf = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7(b5)' ]
        this.padrao = [2,2,1,2,2,2]
        this.nota = nota
     

        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Dorico extends Modos{
    
    constructor(nota){
        super()
        this.name = "dorico"
        this.classf = ['m7', 'm7', 'maj7', '7', 'm7', 'm7(b5)', 'maj7' ]
        this.padrao = [2, 1, 2, 2 , 2, 1]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Frigio extends Modos{
    
    constructor(nota){
        super()
        this.name = "frigio"
        this.classf = ['m7', 'maj7', '7', 'm7', 'm7(b5)', 'maj7', 'm7' ]
        this.padrao = [1, 2, 1, 2, 1 , 2]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Lidio extends Modos{
    
    constructor(nota){
        super()
        this.name = "lidio"
        this.classf = ['maj7', '7', 'm7', 'm7(b5)', 'maj7', 'm7', 'm7' ]
        this.padrao = [2, 2, 2, 1, 2, 2]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Mixolidio extends Modos{
    
    constructor(nota){
        super()
        this.name = "mixolidio"
        this.classf = ['7', 'm7', 'm7(b5)', 'maj7', 'm7', 'm7', 'maj7' ]
        this.padrao = [2, 2, 1, 2, 2, 1]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Eolio extends Modos{
    
    constructor(nota){
        super()
        this.name = "eolio"
        this.classf = ['m7', 'm7(b5)', 'maj7', 'm7', 'm7', 'maj7', '7']
        this.padrao = [2, 1, 2, 2, 1, 2]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}

class Locrio extends Modos{
    
    constructor(nota){
        super()
        this.name = "locrio"
        this.classf = ['m7(b5)', 'maj7', 'm7', 'm7', 'maj7', '7', 'm7']
        this.padrao = [1, 2, 1, 2, 2, 2]
        this.nota = nota
     
        this.defineNota();
        this.setEscala();
        this.spawn(this.name, this.classf)
    }
}
