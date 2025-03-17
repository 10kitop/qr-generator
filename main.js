document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const text = document.getElementById('textInput').value.trim();

    if (!text) {
        alert('Por favor, insira um texto!');
        return;
    }

    // Gera o QR Code
    const qrCanvas = document.createElement('canvas');
    new QRious({
        element: qrCanvas,
        value: text,
        size: 256,
        background: 'white',
        foreground: 'black'
    });

    // Exibe o QR Code
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = ''; 
    qrcodeDiv.appendChild(qrCanvas);

    document.getElementById('popup-container').style.display = 'flex';
});

document.getElementById('download-qr').addEventListener('click', function() {
    const qrCanvas = document.getElementById('qrcode').querySelector('canvas');
    
    if (!qrCanvas) {
        alert('QR Code não gerado.');
        return;
    }

    // Cria um link para download
    const link = document.createElement('a');
    link.href = qrCanvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
s