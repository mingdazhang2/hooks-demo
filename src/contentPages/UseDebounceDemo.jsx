import React from "react";
import { useState, useEffect } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
import useDebounce from "../ownHooks/useDebounce";
const UseDebounceDemo = () => {
  async function getCharacter(searchValue, signal) {
    const reponse = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchValue}`,
      { signal: signal }
    );
    const data = await reponse.json();
    if (data === undefined || data.error) {
      throw new Error(`HTTP error! status: ${data.error}`);
    }
    return data;
  }

  const [query, setQuery] = useState("");
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);

  const searchQuery = useDebounce(query, 2000);

  useEffect(() => {
    const controller = new AbortController();

    const signal = controller.signal;
    const searchCharacter = async () => {
      setListing("");
      setLoading(true);
      const data = await getCharacter(searchQuery, signal);
      setListing(data.results);
      setLoading(false);
    };
    setListing("");
    if (searchQuery || query.length < 0) searchCharacter();

    return () => {
      console.log("abort");
      controller.abort();
    };
  }, [searchQuery]);
  return (
    <>
      <input
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        placeholder="Search your character"
        size="md"
      />
      {loading && <div className="lead">Loading...</div>}
      {listing && (
        <div>
          {listing.map((character) => (
            <div key={character.id} mb={10}>
              <img src={character.image} alt={character.name} />
              {character.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default UseDebounceDemo;
