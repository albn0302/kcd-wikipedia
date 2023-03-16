/* Imports all the images */

import kcdLogo from "./kcd-logo.png";
import meme from "./image(1).webp";
import gitlogo from "./git-logo.webp";
import discordlogo from "./discord-logo.webp";
import instagramlogo from "./instagram-logo.webp";

/* Imports actual functions */

import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";


/* Get a pre-configured url-builder from your sanity client */

const builder = imageUrlBuilder(client);

/* Failed code for the image render, thanks for nothing Sanity */

function urlFor(source) {

  return builder.image(source);

}

function App() {

  /* Tbh, idk what this does */

  const [data, setData] = useState([])

  useEffect(() => {

    /* Fetches the data */

    const dataFetch = async () => {

      const posts = await client.fetch('*[_type == "post"]') /* Not this one either, but it somehow works so I'm not complaining */

      /* Sets the state when the data is received */

      setData(posts)

    }

    dataFetch()

  }, [])

  return (

    <>

      {/* The navbar */}

      <div className="text-3xl">

        <nav className="w-full bg-slate-200 dark:bg-zinc-800"> {/* This is the navbar background */}

          <ul className="flex flex-row gap-32"> {/* Aligns all the items in the navbar horizontally plus it also adds a gap inbetween them */}

            <img className="pl-5" src={kcdLogo} alt="kingdom come: deliverance logo"></img> {/* This is the Kingdom Come: Deliverance logo */}

            {/* All the different buttons/text in the navbar */}

            <li onClick={() => { alert("This function is a work in progress..."); }} className="mt-16 text-black hover:text-amber-400 dark:hover:text-amber-200 dark:text-white static invisible sm:absolute md:static md:visible lg:visible lg:static xl:visible xl:static 2xl:visible 2xl:static"><a href="#">Navigation Page</a></li>
            <li onClick={() => { alert("This one aswell..."); }} className="mt-16 text-black hover:text-amber-400 dark:hover:text-amber-200 dark:text-white static invisible sm:absolute md:absolute lg:visible lg:static xl:visible xl:static 2xl:visible 2xl:static"><a href="#">Info</a></li>
            <li onClick={() => { alert("Ok, fr stop. All of these are a work in progress, nerd."); }} className="mt-16 text-black hover:text-amber-400 dark:hover:text-amber-200 dark:text-white static invisible sm:absolute md:absolute lg:visible lg:static xl:visible xl:static 2xl:visible 2xl:static"><a href="#">About</a></li>

            {/* This submits stuff from the search bar */}

            <form onSubmit={() => { alert("What? You thought this actually did someting? Nerd..."); }}> {/* It works, trust me */}

              {/* This is the search bar */}

              <input className="h-8 mt-16 rounded-xl placeholder:italic dark:bg-black static sm:absolute md:absolute" placeholder="Search ..."></input>

            </form>

          </ul>

        </nav>

      </div>

      <main>

        {/* The post section */}

        <ul>
          {
            data.map(post =>
              <li className="text-black dark:text-white" key={post._id} /* Fetches the content from my Sanity project */>
                {post.title} {/* Renders my header from my Sanity project */}

                {/* This section is currently a work in progress */}

                {/*       <li key={post.mainImage}>
                  <img src={urlFor(post.image).url("https://cdn.sanity.io/images/68ehyq8a/production/fa57b39169764f6a8bf4a6f017babe67182c351-460x459.jpg")} />
                </li> */}

                {/* <p>{post.body}</p> */}

                {/* Temporary Content */}

                <p className="w-full sm:w-5/6">Hello! Here's the last words of the dev. He sadly dissapeared during the making of this project and hasn't been found. Since there is no content here I will fill this section out with his message: "Hello! Sadly I lost my last few braincells working on this project. The code has now grown beyond my comprehension and I will now go into exile until further notice. To be honest, I barely know what anything does in here. For all I know it might even be a secret telegram to some unknown gremlin in some swamp. Apparently this message is duplicated. I don't know why or how to fix it. I must write this message in order to cover up my absolute lack of programming skills. If anything seems scuffed it's because it's a feature, and that is what we will call it from now on, deal with it! In exile I will look at programming memes and pretend I know how to program... -Me, 2023"</p>

                <img src={meme} alt="meme"></img>

              </li>
            )
          }
        </ul>

      </main >

      {/* This is the bottom of the page */}

      <footer className="w-full bg-slate-200 dark:bg-zinc-800"> {/* This is totally the right element for the bottom of the page */}

        <div>

          <div className="flex flex-row justify-end gap-2">

            {/* Github logo */}

            <img onClick={() => window.open("https://github.com/albn0302?tab=repositories", "_blank")} /* <-- Opens my GitHub page */ className="w-12 pl-2" src={gitlogo} alt="git logo"></img>

            {/* Discord logo */}

            <img onClick={() => { navigator.clipboard.writeText("albn_johanssn#6822"); /* <-- Copies to clipboard */ alert("Copied to clipboard!"); /* <-- Temporary function to confirm that something has been copied to the clipboard */ }} className="w-12 pl-2" src={discordlogo} alt="discord logo"></img>

            {/* Instagram logo */}

            <img onClick={() => window.open("https://www.instagram.com/albn_johanssn/", "_blank")} /* <-- Opens my instagram page */ className="w-12 pl-2" src={instagramlogo} alt="instagram logo"></img>

          </div>

          <p className="text-zinc-300 dark:text-zinc-600">© 2023 KCD-wikipedia, Albin Johansson</p> {/* A fancy copyright signature */}

        </div>

      </footer>

    </>

  );

}

export default App;
