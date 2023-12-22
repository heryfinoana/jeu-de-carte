function ADN(lesbases){
    let array = lesbases.split("")
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "A":array.splice(i,1,"T")
                break;
            case "T":array.splice(i,1,"A")
                break;
            case "G":array.splice(i,1,"C")
                break;
            case "C":array.splice(i,1,"G")
                break;
        
        
        
            default:
                break;
        }
        
    }
    console.log(array.join(""))
}
ADN("ATTGC")