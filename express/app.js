const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;        
const router = express.Router();  

//meta data
const NFT = {
  "title": "metadata",
  "type": "object",
  "prop": {
      "name": {
          "type": "string",
          "description": "Madara"
      },
      "description": {
          "type": "string",
          "description": "The world's greatest Shinobi."
      },
      "image": {
          "type": "string",
          "description": "https://gateway.pinata.cloud/ipfs/Qmcy1NtKnpeduKDFXjLGHnqTa6kN4tzQ8ekUsMVHysf8Qj"
      }
  }
}
  ;
//routes
app.use(express.static(__dirname+'/api'));
router.get('/', function(req, res) {
    res.send('Welcome to our Home!' );
});
//route to nft meta data
router.get('/nft', function(req, res) {
    console.log(NFT);
    res.send(NFT);
});
//test post using postman
//router.post('/nft', function(req, res) {    
  //  var Nft = req.body;
 //   console.log (Nft);
 //   NFT.push(Nft);
 //   res.send('NFT Metadata added');
//});


app.use('/api', router);
app.listen(port);
console.log('listening on port ' + port);