let file;

document.getElementById('a-wrapper').addEventListener('click', (e) => {
    file = document.getElementById('file-box').files[0]; // Get file that is currently selected
    fetch('/game/newgame',
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({filedata: file})
    });

    console.log(file);
});