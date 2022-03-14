class Support {
    name;
    constructor(name) {
        this.name = name;
    }

    address = 'BD'

    callHim() {

        console.log("call him now");
    }
    Education = "BSC is SWE"

}

const mohsin = new Support("mohsin")
mohsin.callHim()
console.log(mohsin);