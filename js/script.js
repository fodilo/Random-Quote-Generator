/*
Copyright (c) 2017 B.Fodil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/



var colors=["#F22613","#D91E18","#DB0A5B","#663399","#446CB3","#22313F","#1E824C","#9B59B6","#DB0A5B","#6C7A89"]

function enter(){
var tweet="https://twitter.com/intent/tweet?text=";
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
$.getJSON(url,function (data){
document.getElementById('quote').innerHTML=data.quoteText;
document.getElementById('quotebox').style.backgroundColor =colors[Math.round(10*Math.random())];

if (data.quoteAuthor =="")document.getElementById('quote-sayer').innerHTML="Unknown";
else {document.getElementById('quote-sayer').innerHTML=data.quoteAuthor;}
tweet=tweet+"' "+data.quoteText+"' ."+'\u000D Author :'+document.getElementById('quote-sayer').innerHTML;
//share=share+"' "+data.quoteText+"' ."+'\u000D Author :'+document.getElementById('quote-sayer').innerHTML;
document.getElementById("tweet").href=tweet;

});
//console.log();
 }
