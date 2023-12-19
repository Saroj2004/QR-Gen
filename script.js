let image= document.getElementById('image');
let content = document.getElementById('content');
let btncreate = document.getElementById('btncreate');

btncreate.onclick = () => {
    if (content.value == '') return;
    let linkqr = 'https://api.qrserver.com/v1/create-qr-code/';
    image.src = linkqr + '?size=500x500&data=' +content.value;
}