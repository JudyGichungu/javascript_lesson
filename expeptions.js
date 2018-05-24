var a = 300;
// var b = 40; 
try{
console.log(a,b)

}
catch (error){
console.log(error.message)
}
finally{
	console.log('finally done')
}
console.log('past error')
console.log('finished')
