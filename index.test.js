const User = require('./index') 

describe('User class', () => { 

const me = new User('Andrés Alejandro Nuñez Tinajero',['Karina Tinajero Rosario', 'Andrés Nuñez Betancourt'],[])

const mom = new User('Karina Tinajero Rosario',['Aida Rosario Rosario', 'Andrés Tinajero Castro'], me)

const dad = new User('Andrés Nuñez Betancourt',['Basilia Betancourt', 'Andrés Nuñez'], me)	

	test('my name?', () => { 
		expect(me.name).toBe("Andrés Alejandro Nuñez Tinajero"); 
	})

    test('has two parents?', () => { 
		expect(me.parents.length).toBe(2); 
	})

	test('has no children?', () => { 
		expect(me.children).toBeNull; 
	})

    test('no more than two parents?', () => { 
		expect(mom.parents.length).toBeLessThan(3); 
	})

    test('parent to Andrés Alejandro?', () => { 
		expect(mom.parentOf()).toContain(me.name);
        expect(dad.parentOf()).toContain(me.name); 
	})



    test('has a parent named Andrés?', () => { 
		expect(mom.childOf()).toContain("Andrés"); 
        expect(me.childOf()).toContain("Andrés"); 
        expect(dad.childOf()).toContain("Andrés"); 
	})

})