const sections = document.getElementsByTagName('section');

const section = document.querySelectorAll('section')
console.log(sections)

for(const section of sections){
    console.log(section);
    section.style.backgroundColor= ' lightblue';
    section.style.border= '3px solid green';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '5px';
}