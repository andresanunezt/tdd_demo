class User {

    constructor(name,parents,children){
    
    this.name = name;
    this.parents = parents;
    this.children = children;
    
    }
    
    childOf() {
    
      return `${this.name} is a child of ${this.parents[0]} and ${this.parents[1]}`
      
    }
    
    parentOf(){
      return `${this.name} is a parent to  ${this.children.name} `
    
    }
    

    }

    module.exports = User

// console.log(me, mom, dad)
// console.log(me.childOf())
// console.log(dad.childOf(),"and" )
// console.log(mom.parentOf())

// console.log(me, mom, dad)
// console.log(me.childOf())
// console.log(dad.childOf(),"and" )
// console.log(mom.parentOf())