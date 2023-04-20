import { S3Client, PutObjectCommand, ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import fs from 'fs';
import { join } from 'path';
import * as url from 'url';

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
        try {
            console.log(req.file);
            const { animalId } = req.body;
            console.log(animalId);
            const file = req.file;
            const filePath = file.path;
            const fileContent = fs.readFileSync(filePath);

            const params = {
                Bucket: bucketName,
                Key: file.originalname,
                Body: fileContent
            };

            const command = new PutObjectCommand(params);

            const result = await s3Client.send(command);

            return res.json({
                success: true,
                data: {
                    animalId: animalId,
                    filePath: filePath,
                    s3metaData: result
                }
            });
        } catch (error) {
            next(error);
        }
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
    },

    getPictureById: function (req, res, next) {
        try {
            const { animalId } = req.params;
            const animal = getAnimalById(animalId);
            const imageName = animal.imageName;
            createReadStream(join(url.fileURLToPath(new URL('.', import.meta.url)), '../', 'uploads', imageName)).pipe(res);
        } catch (error) {
            next(error);
        }
    }
};

export default ImageController;