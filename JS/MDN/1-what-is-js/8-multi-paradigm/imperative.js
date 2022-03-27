/* Example : Get clone of given array
 * Imperative where solution is 
 * sequence of well defined instructions
 */
const arr = [1,2,3,4,5]
let clonedArr=[]
for(let i=0;i<arr.length;i++){
   clonedArr[i] = arr[i]; // specifying the 'how' part explicittly
}