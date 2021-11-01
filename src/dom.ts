// const $variable = document.querySelector('.foo') as HTMLInputElement;

const $variable = document.querySelector('.foo');

// console.log('variable', $variable.value);

$variable.addEventListener('click', (event)=>{
    let target = event.target as HTMLInputElement;
    console.log('event', target.value)
})