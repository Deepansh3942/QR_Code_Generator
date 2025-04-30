const express = require("express");
const QRcode = require("qrcode");
const app = express();
const PORT = 8000;

//Routes
app.get("/qrcode", (req, res) => {
  const url = "https://www.youtube.com/"; //url definition to qr code

  QRcode.toDataURL(url, (err, qrCodeUrl) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    // else send a HTML page
    else {
      res.send(`
            <!DOCTYPE HTML>
            <html>
                <head>
                    <title>QR Code Generator</title>
                </head>
                    <body>
                        <h1> Qr Code Generator </h1>
                        <img src= "${qrCodeUrl}" alt= "QR Code">
                        <p> Scan the QRCode </p>
                    </body>          
            </html> 
            `);
    }
  });
});

//start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
