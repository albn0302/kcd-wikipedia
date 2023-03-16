import kcdLogo from "./kcd-logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import client from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}

function App() {
  const [data, setData] = useState([]);

  let QUERY = encodeURIComponent('*[_type == "post"]');
  let URL = `https://68ehyq8a.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`;

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {

      const { result } = await (
        await fetch(URL)
      ).json();

      // set state when the data received
      setData(result);
    };

    dataFetch();
  }, []);

  return (
    <>

      {/* Navbar */}
      <div className="text-3xl">
        <nav className="bg-slate-200">
          <ul className="flex flex-row">
            <img className="pr-60" src={kcdLogo}></img>
            <li className="pr-60 mt-16"><a href="#">Navigation Page</a></li>
            <li className="pr-60 mt-16"><a href="#">Info</a></li>
            <li className="pr-60 mt-16"><a href="#">About</a></li>
            <input className="h-8 mt-16" placeholder="Search ..."></input>
          </ul>
        </nav>
      </div>

      <main>

        {/* Post section */}
        <>
          <ul>
            {data.map(post => (
              <li key={post._id}>
                <a href="#">{post.title}</a>
                <li key={post.mainImage}>
                  <img src={urlFor(post.image).url("https://cdn.sanity.io/images/68ehyq8a/production/fa57b39169764f6a8bf4a6f017babe67182c351-460x459.jpg")} />
                </li>
                <li key={post._id}>
                  <p>{post.body}</p>
                </li>
              </li>
            ))}
          </ul>
        </>
      </main >
    </>
  );
}

export default App;
