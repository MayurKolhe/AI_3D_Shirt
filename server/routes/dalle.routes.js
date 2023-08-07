import express, { request, response } from 'express';
import * as dotenv from "dotenv";

import { Configuration,OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


router.route('/').get((request, response) => {
    response.status(200).json({ message: "Sucessfully got the data" });

})


router.route('/').post(async(request, response) => {
    try {
        const { prompt } = request.body;
        const respons = await openai.createImage({
            prompt, n: 1, size: '1024*1024', response_format: 'b64_json'
        });

        const image = respons.data.data[0].b64_json;
        response.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        response.status(500).json({message})
    }
})
export default router;