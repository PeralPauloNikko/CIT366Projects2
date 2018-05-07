function Set() {
    this.intersection = function (listA, listB) {

        var resultList = [];
        if (listA === null || listB === null) //check for valid inputs
//if any of these lists are null, it should return null!
            return null; //exit and return null to indicate an error
//if it's not null, go to list and proceed with the procedure.
        for (var i = 0; i < listA.length; i++) { //for every element in listA
            var nextValue = listA[i]; //get next value in the list

//for every element in listB
            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) { //this listB element equals nextValue//
                    resultList.push(listB[j]); //add listB element to end of resultList//
                    break; //break out of (exit) the listB inner loop//
                }
            } // end listB inner loop
        } // end listA outer loop

        return resultList;
    }

    this.union = function (listA, listB) {
        if (listA === null || listB === null) //check for valid inputs
//if any of these lists are null, it should return null!
            return null; //exit and return null to indicate an error
      return this.intersection(listA,listB).concat(this.symmetricDifference(listA,listB));
    }


    this.relativeComplement = function (listA, listB) {

        var resultList = [];
        if (listA === null || listB === null)
            return null;
        for (var i = 0; i < listA.length; i++) { //for every element in listA
            var nextValue = listA[i]; //get next value in the list
            var found = false;

//for every element in listB
            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) { //this listB element equals nextValue//
                    found = true; //add listB element to end of resultList//
                    break; //break out of (exit) the listB inner loop//
                }
            } // end listB inner loop
            if (!found) {
                resultList.push(nextValue);
            }
        } // end listA outer loop

        return resultList;
    }


    this.symmetricDifference = function (listA, listB) {
        if (listA === null || listB === null)
            return null;
        return this.relativeComplement(listA, listB).concat(this.relativeComplement(listB,listA));
    }
}
	

