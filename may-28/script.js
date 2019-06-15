//pseudo code
/*get the user input inside the heading

1.get input elment on which user typed something
2.get value of input
3.get heading element
4.change the content of heading*/
function changeName() {
    // 1.get the input element
    console.log(document.querySelector('input'));
	//how to get an attribute of html elment
	console.log(document.querySelector('input').value);
	//how to get heading
	console.log(document.querySelector('h1'));
	//how to get content of an html element
	console.log(document.querySelector('h1').innerHTML);
	//how to change value
	document.querySelector('#myid').innerHTML=document.querySelector('input').value;
	

}
function changeColor(){
	document.querySelector('#myid').style="color:red";
	document.querySelector('h1').style="color:Blue";
	
}
function changeColor2(){
	document.querySelector('#myid').style="color:black";
	document.querySelector('h1').style="color:black";
	
}
function changebodycolor(){
document.querySelector('body').style="background-color:" + document.querySelector('input').value;
}