const fs = require('fs');

const products = []

class Contenedor {
    constructor(fileName){
        this.fileName = fileName
    }   

    save(obj){
        const exists = fs.existsSync(`./productos.txt`)
        if(exists){
            fs.promises.readFile(`./productos.txt`, 'utf-8')
                .then(response => JSON.parse(response))
                .then(data => {
                        const idMap = data.map(el => parseInt(el.id))
                        let filterMaxId = Math.max(...idMap)
                        const newId = filterMaxId+1 
                        obj.id = newId
                        data.push(obj)
                        let fileStringify = JSON.stringify(data)
                        fs.writeFile(this.fileName, fileStringify, (err) => {
                            if(err){
                                console.log('hay un error')
                            }else{console.log('guardado!')}
                        })                                  
                })
        }else{
            obj.id = 1
            products.push(obj)
            let fileStringify = JSON.stringify(products)
            fs.writeFile(this.fileName, fileStringify, (err) => {
                if(err){
                    console.log('error', err)
                }else{
                    console.log('guardado!')
                }
            })
        }    
    }   

    async getAll(){
        try{
            const response = await fs.promises.readFile("./productos.txt", "utf-8");
            return JSON.parse(response)
         }catch(e){
            console.log(e);
         }
    }

   async getRandom(){
        try{
            const response = await fs.promises.readFile("./productos.txt", "utf-8");
            const arrProducts = JSON.parse(response)
            let randomProduct = arrProducts[Math.floor(Math.random() * arrProducts.length)]
            return randomProduct 
         }catch(e){
            console.log(e);
         }
    }
}



module.exports = Contenedor