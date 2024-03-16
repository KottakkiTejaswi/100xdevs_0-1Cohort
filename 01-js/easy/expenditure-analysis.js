/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let array=[];
  for(let i=0;i<transactions.length;i++){
    let p = transactions[i].price;  
    let c = transactions[i].category;
    let found=false;
    //let obj = {category:c,totalSpent:p}

    //check if the category exists in the array or not
    for(let j=0;j<array.length;j++){
      if(array[j].category===c){
        array[j].totalSpent += p ;
        found=true;
        break;
      }
    }
    if(!found){
    array.push({category:c,totalSpent:p})
    }
  }
  return array;
}

module.exports = calculateTotalSpentByCategory;
