document.getElementById('button').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
});

document.getElementById('portbuttonone').addEventListener('click', function () {
    document.querySelector('.portboxone').style.display = 'flex';
    document.querySelector('.portboxtwo').style.display = 'none';


});

document.getElementById('portbuttontwo').addEventListener('click', function () {
    document.querySelector('.portboxone').style.display = 'none';
    document.querySelector('.portboxtwo').style.display = 'flex';


});


document.getElementById('portbuttonthree').addEventListener('click', function () {
    document.querySelector('.portboxone').style.display = 'none';
    document.querySelector('.portboxtwo').style.display = 'none';
    document.querySelector('.portboxthree').style.display = 'flex';


});
