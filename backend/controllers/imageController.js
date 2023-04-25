import { S3Client, PutObjectCommand, ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import fs, { createReadStream } from 'fs';
import { join } from 'path';
import * as url from 'url';
import ImageService from '../services/imageService.js';
import AnimalService from '../services/animalService.js';

dotenv.config();

const bucketName = process.env.AWS_BUCKET;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const credentials = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
};

const s3Client = new S3Client({
    region: region,
    credentials: credentials
});

const ImageController = {
    addNewPicture: async function (req, res, next) {
        const result = await ImageService.addNewPicture(req.file);

        return res.json(result);
    },

    getAllImagesFromS3: async function (req, res, next) {
        const command = new ListObjectsV2Command({
            Bucket: bucketName
        });

        try {
            const result = await s3Client.send(command);

            return res.json(result);
        } catch (err) {
            console.log(`Error listing objects: ${err}`);
        }

        return res.json({ error: "no data" });
    },

    listBuckets: async function () {
        const command = new ListBucketsCommand({});

        try {
            const response = await s3Client.send(command);
            return res.json({ buckets: response.Buckets.map(b => b.Name).join(', ') });
        } catch (err) {
            console.log(`Error listing buckets: ${err}`);
        }

        return res.json({ error: "no bucket" });
    }
};

export default ImageController;