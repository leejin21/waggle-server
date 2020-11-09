////////////////////////////////////////////////
// Node.js program to demonstrate the      
// crypto.createDecipheriv() method 
////////////////////////////////////////////////

// Includes crypto module 
const crypto = require('crypto'); 
  
// Difining algorithm 
const algorithm = 'aes-256-cbc'; 
  
// Defining key 
const key = crypto.randomBytes(32);
    // 여기서 key를 뭘로 정해야 할 지가 문제임: 아마 한 100여개를 뽑아두고 거기서 돌려돌려 돌림판 시간 stamp대로 하는 게 좋을 듯(이런 알고리즘 짜기)
  
// Defining iv 
const iv = crypto.randomBytes(16); 
  
// An encrypt function 
function encrypt(text) { 
  
 // Creating Cipheriv with its parameter 
 let cipher =  
    crypto.createCipheriv(algorithm, Buffer.from(key), iv); 
  
 // Updating text 
 let encrypted = cipher.update(text); 
  
 // Using concatenation 
 encrypted = Buffer.concat([encrypted, cipher.final()]); 
  
 // Returning iv and encrypted data 
 return { iv: iv.toString('hex'), 
     encryptedData: encrypted.toString('hex') }; 
} 
  
// A decrypt function 
function decrypt(text) { 
  
 let iv = Buffer.from(text.iv, 'hex'); 
 let encryptedText = 
    Buffer.from(text.encryptedData, 'hex'); 
  
 // Creating Decipher 
 let decipher = crypto.createDecipheriv( 
        algorithm, Buffer.from(key), iv); 
  
 // Updating encrypted text 
 let decrypted = decipher.update(encryptedText); 
 decrypted = Buffer.concat([decrypted, decipher.final()]); 
  
 // returns data after decryption 
 return decrypted.toString(); 
} 
  
// Encrypts output 
var output = encrypt("GeeksforGeeks"); 
console.log(output); 
  
// Decrypts output 
console.log(decrypt(output));