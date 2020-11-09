//////////////////////////////////////////////////
//* BUCKET - OBJECT EXPERIMENT

// object download

const AWS = require('aws-sdk');
const fs = require('fs');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = process.env.AWS_ACCESS_KEY;
const secret_key = process.env.AWS_SECRET_KEY;

const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId : access_key,
        secretAccessKey: secret_key
    }
});

// 아래를 수정, react native에 직접 적어야 할 듯?
const bucket_name = 'waggle-thumbnail';
const object_name = 'bibimbap.jpg';
const local_file_path = './'+object_name;

// logic code
(() => {
    console.log("함수 진입 학인")
    let outStream = fs.createWriteStream(local_file_path);
    let inStream = S3.getObject({
        Bucket: bucket_name,
        Key: object_name
    }).createReadStream();

    inStream.pipe(outStream);
    inStream.on('end', () => {
        console.log("Download Done");
    });

})();

