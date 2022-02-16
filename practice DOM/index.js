/*1 task */

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
   .split(' ')
   .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
   .join(' ');


/*3 task*/
paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|]/)
  .join('.</p><p>')+ '</p>'


/*2 task*/
const link = document.createElement('a');
link.href= 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Link to text';

document.body.appendChild(link);


/*4 task*/
const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);

/*5task */
Array.from(document.querySelectorAll('p')).forEach(p=>{
  p.innerHTML=p.innerHTML
  .replace(/\?/g,'🤔')
  .replace(/\!/g,'😲')
})
