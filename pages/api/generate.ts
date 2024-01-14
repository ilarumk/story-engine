// const { Configuration, OpenAIApi } = require("openai");
import OpenAI from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export default async (req:any, res:any) => {

const body = JSON.parse(req.body)
const theme = body.theme;
const age = body.age;
const character = body.character;
const situation = body.situation;
const conflict = body.conflict;
let prompt = "Generate a bed time story for " + age + " with theme " + theme  + ". story with " + character + " character, happening in " + situation + " " + "with " + conflict
 
console.log(prompt)
 if (!prompt) {
    res.status(400).send("No prompt in the request");
    // return new Response("No prompt in the request", {status: 400})
  }


  if (prompt !== undefined) {

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", content: "You are a kids book author. Use straightforward and simple language that is suitable for the target age group. Avoid overly complex words and sentence structures. Begin the story with an exciting or intriguing introduction to capture the child's attention from the start. Incorporate repetition of words, phrases, or themes to make the story memorable and interactive. Choose words that are appropriate for the child's age and understanding. Consider the developmental stage of the target audience. Use vivid and descriptive language to paint a clear picture in the child's mind. Appeal to their imagination.  Include dialogue to make characters relatable. Use simple and expressive language in conversations. Keep sentences relatively short to maintain the child's attention and make the text more accessible. Maintain a positive and uplifting tone throughout the story. Children respond well to positivity and encouragement. Include elements that invite interaction, such as asking questions or suggesting actions for the child to participate in the story. Organize the story with a clear beginning, middle, and end. Children appreciate a well-defined structure. Be mindful of age-appropriate content. Avoid overly scary or intense themes that may be too much for the target age group. Incorporate age-appropriate humor to entertain and engage young readers. Craft the story to be read aloud easily. Consider the rhythm and flow of the language. Create characters that children can relate to, with whom they can empathize or see themselves. Maintain a consistent point of view to avoid confusion. Most children's stories are written in the third person. Generate the story with 10 to 15 lines on the given age, character, theme, situation, conflict."},
        {"role": "user", "content": prompt}
      ],
    });
    console.log(chatCompletion.choices[0].message);
    let response = chatCompletion.choices[0].message;
    res.status(200).json({ text: `${response.content}` });
    // res.status(200).send(`${response.content}`);

  } else {
    res.status(400).json({ text: "No prompt provided." });
  }
};
