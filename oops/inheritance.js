
class GrandParent{
    m0(){
        console.log("inside grandparent m0 methods");
    }
}

class Parent{
    m1(){
        console.log("inside parent m1 methods");
    }
}

class Child extends Parent {
    m2(){
        console.log("inside child m2 methods");
    }
}

const ch= new Child()

ch.m2()

ch.m1()
// multiple inheritance can't be possible,used single inheritance
ch.m0()