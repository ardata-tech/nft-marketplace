import AWS from 'aws-sdk';
import fs from 'fs';
import FileType from 'file-type';
import multiparty from 'multiparty';
import dotenv from 'dotenv';
dotenv.config();

// const testId = 'AKIAQI324NJWNOOQGJV4';
// const testSecret = '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';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID || 'testId';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || 'testSecret';
const bucketName = process.env.BUCKET_NAME;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
});

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const uploadFile = (buffer, name, type) => {
  const params = {
    // ACL: 'public-read',
    Body: buffer,
    Bucket: bucketName,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

export const upload = async (req, res) => {
  console.log('getting request atleast');
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    if (error) {
      console.log('form error');
      return res.status(500).send(error);
    }
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await FileType.fromBuffer(buffer);
      const fileName = `bucketFolder/${Date.now().toString()}`;
      const data = await uploadFile(buffer, fileName, type);
      console.log(data);
      return res.status(200).send(data);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
};

export const getImage = async (req, res) => {
  const { Bucket, Key, Region } = req.body;
  const getParams = { Bucket, Key };
  try {
    console.log(getParams);
    const resp = await s3.getObject(getParams, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        let objectBUffer = data.Body;
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.write(objectBUffer, 'binary');
        res.end(null, 'binary');
      }
    });
  } catch (err) {
    console.log(err);
  }
};
