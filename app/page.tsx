'use client';
import Header from "./components/header"
import Layout from "./layout"
import React, { useState, FormEvent } from 'react'
 
// const [isSubmitting, setSubmitting] = useState(false);


// const Characters = ({ characters }) => {
//   return (
//       {characters.map((character) => (
//         <p>{character.name}</p>
//       ))}
//   );
// };

export default function Home() {
  
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [Content, setContent] = useState("");
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const theme = formData.get('theme');
      console.log(theme)
      // for (var [key, value] of formData.entries()) { 
      //   console.log(key, value);
      //  }


      var json = JSON.stringify(Object.fromEntries(formData));

      // var json = JSON.stringify(object);
      //console.log(json)


      const response = await fetch('/api/generate', {
        method: 'POST',
        body: json,
      })
      // console.log(formData)
      // Handle response if necessary
      const data = await response.json()
      let content = data.text
      content.replace(/\n/g, "<br />")
      console.log(content)

      setContent(content);
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  const themes =  [
      {"id": "theme1", "name": "Courage and Bravery", "description": "Characters overcoming fears and challenges with courage."},
      {"id": "theme2", "name": "Friendship and Cooperation", "description": "Emphasizing the value of teamwork and strong friendships."},
      {"id": "theme3", "name": "Discovery and Adventure", "description": "Characters embarking on exciting journeys of exploration."},
      {"id": "theme4", "name": "Imagination and Creativity", "description": "Encouraging creativity and the power of imagination."},
      {"id": "theme5", "name": "Kindness and Empathy", "description": "Highlighting the importance of kindness and understanding towards others."}
    ]

  const characters = [
      {"id": "opt1", "type": "Magical Creatures", "name": "Unicorn"},
      {"id": "opt2", "type": "Fantasy Characters", "name": "Wizard"},
      {"id": "opt3", "type": "Everyday Heroes", "name": "Firefighter"},
      {"id": "opt4", "type": "Animal Friends", "name": "Penguin"},
      {"id": "opt5", "type": "Imaginary Friends", "name": "Friendly Monster"},
      {"id": "opt6", "type": "Historical Figures", "name": "Princess"},
      {"id": "opt7", "type": "Nature Spirits", "name": "Animal"},
      {"id": "opt8", "type": "Robots and Machines", "name": "Friendly Robot"},
      {"id": "opt9", "type": "Enchanted Objects", "name": "Living Book"},
      {"id": "opt10", "type": "Mythical Beings", "name": "Centaur"}
    ]


    const conflicts =  [
        {"id": "conflict1", "name": "Friendship Dilemma", "description": "Two friends and a magical object causing misunderstandings."},
        {"id": "conflict2", "name": "Mystery in the Enchanted Forest", "description": "Quest to solve the disappearance of magical creatures."},
        {"id": "conflict3", "name": "Magical Mishap", "description": "Mischievous character's spell goes haywire, causing chaos."},
        {"id": "conflict4", "name": "Quest for Lost Treasure", "description": "Characters seek a legendary treasure with rivals in pursuit."},
        {"id": "conflict5", "name": "Balance of Nature", "description": "Natural elements out of balance, characters on a journey to restore harmony."}
      ]


    const situations =  [
          {"id": "situation1", "name": "Enchanted Castle", "description": "A magical castle with secret passages and friendly magical creatures."},
          {"id": "situation2", "name": "Lost Island of Wonders", "description": "An unexplored island full of mysterious plants, animals, and hidden treasures."},
          {"id": "situation3", "name": "Space Adventure", "description": "A journey through space with alien friends, encountering unique planets and celestial phenomena."},
          {"id": "situation4", "name": "Underwater Kingdom", "description": "An underwater world with talking fish, mermaids, and hidden underwater cities."},
          {"id": "situation5", "name": "Time-traveling Forest", "description": "A magical forest where characters can travel through time, meeting creatures from different eras."}
    ]
  
  return (
    <>
      <Layout>
        <Header />

        <div className="container mx-auto pt-2">
          <div className="">
          

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg">
      

                  <div className="mx-auto">
                    <div className="mx-auto max-w-lg p-5">
                      {/* <h2 className="text-center text-sm text-black-600">Select below options</h2> */}
                      <form onSubmit={onSubmit} action="" method="POST" className="mb-0 mt-1 rounded-lg">


                      <p className="text-md font-medium">Age of the child</p>

                    <div className="flex space-x-4 shadow-lg bg-gray-100 p-2 rounded-lg shadow-lg bg-gray-100 p-2 rounded-lg">
                      <div>
                        <input className="peer p-0 sr-only rounded-sm" id="age1" type="radio"  name="age" value="infant" />

                        <label
                          htmlFor="age1"
                          className="block w-full rounded-lg border border-black-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                          
                        >
                          <span className="text-xs"> Baby Explorer 🍼 </span>
                        </label>
                      </div>

                      <div>
                        <input className="peer sr-only" id="age2" type="radio"  name="age" value="toddler" />

                        <label
                          htmlFor="age2"
                          className="block text-center leading-none w-full rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                          
                        >
                          <span className="text-xs"> Tiny Trailblazer 🚀 </span>
                        </label>
                      </div>

                      <div>
                        <input className="peer sr-only" id="age3" type="radio"  name="age" value="Preschooler" />

                        <label
                          htmlFor="age3"
                          className="block text-center leading-none w-full rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                          
                        >
                          <span className="text-xs"> Mini Dreamer 🌈 </span>
                        </label>
                      </div>


                    </div>



                        <p className="text-md font-medium">Choose a Character</p>

                        

                        <div className="flex-wrap space-x-4 shadow-lg bg-gray-100 p-2 rounded-lg">

                        {characters.map((character) => {
                          return (
                            <div className="p-1" key={(character.id)}>
                            <input className="peer sr-only" id={(character.id)} type="radio"  name="character" value={(character.name)} />

                            <label
                              htmlFor={(character.id)}
                              className="block w-full text-center leading-none rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            >
                              <span className="text-xs"> {(character.name)} </span>
                            </label>
                          </div>
                
                        )})}

                       </div>


                       <p className="text-md font-medium">Choose a Theme</p>

                       <div className="flex-wrap space-x-4 shadow-lg bg-gray-100 p-2 rounded-lg">

                       {themes.map((theme) => {
                          return (
                            <div className="p-1" key={(theme.id)}>
                            <input className="peer sr-only" id={(theme.id)} type="radio"  name="theme" value={(theme.name)} />

                            <label
                              htmlFor={(theme.id)}
                              className="block w-full text-center leading-none rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            >
                              <span className="text-xs"> {(theme.name)} </span>
                            </label>
                          </div>
                
                        )})}

                       </div>
               
                      <p className="text-md font-medium">Choose a Conflict</p>

                       <div className="flex-wrap space-x-4 shadow-lg bg-gray-100 p-2 rounded-lg">
                      
                       {conflicts.map((conflict) => {
                          return (
                            <div className="p-1" key={(conflict.id)}>
                            <input className="peer sr-only" id={(conflict.id)} type="radio"  name="conflict" value={(conflict.name)} />

                            <label
                              htmlFor={(conflict.id)}
                              className="block w-full text-center leading-none rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            >
                              <span className="text-xs"> {(conflict.name)} </span>
                            </label>
                          </div>
                
                        )})}


                       </div>


                      <p className="text-md font-medium">Choose a Situation</p>

                      <div className="flex-wrap space-x-4 shadow-lg bg-gray-100 p-2 rounded-lg">

                      {situations.map((situation) => {
                          return (
                            <div className="p-1" key={(situation.id)}>
                            <input className="peer sr-only" id={(situation.id)} type="radio"  name="situation" value={(situation.name)} />

                            <label
                              htmlFor={(situation.id)}
                              className="block w-full text-center leading-none rounded-lg border border-gray-200 p-1 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            >
                              <span className="text-xs"> {(situation.name)} </span>
                            </label>
                          </div>
                
                        )})}

                      </div>



                <button
                  type="submit"
                  
                  className="block mt-5 w-full rounded-lg bg-amber-600 px-5 py-3 text-xs font-medium text-white"
                  disabled={isLoading}>
                    {isLoading ? 'Generating...' : '📚 Create Magical Tale! 🌟'}
                </button>

              </form>
            </div>
          </div>



          </div>
          <div className="rounded-lg border border-double mb-10 lg:col-span-2 p-5 font-serif text-xl font-medium text-slate-950 border-amber-600 ">
            <div style={{whiteSpace: "pre-wrap"}}>
              {Content}
              </div>

          </div>
        </div>

        </div>
  
  </div>
  

      </Layout>
    </>
  );
}