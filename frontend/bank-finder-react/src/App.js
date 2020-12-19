import { useState, useEffect } from "react";
import "./App.css";
import { Input, Select, Icon, Message, Checkbox } from "semantic-ui-react";
import Paginationx from "./components/pagination";
import Tablex from "./components/table";
import { useFetch } from "./utils";
import TableHeader from "./components/tableHeader";
import SelectField from "./components/selectField";
import SearchField from "./components/searchField";
const PAGESIZE = 10;

function App() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [favorites, setFavorites] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);

  const url =
    (query || city) &&
    `http://127.0.0.1:8000/api/branches?q=${city} ${query}&limit=${PAGESIZE}&offset=${
      (activePage - 1) * PAGESIZE
    }`;

  const { status, data, error } = useFetch(url);

  // Handles city selection
  const handleCitySelect = (e, d) => {
    setCity(d.value);
    setActivePage(1);
  };

  // Handles search input
  const handleSearchInput = (e, d) => {
    setQuery(e.target.value);
    setActivePage(1);
  };

  // Handles add to favorites click
  const handleFavorites = (ifsc, value, branch) => {
    if (value) {
      const temp = { ...favorites };
      temp[ifsc] = branch;
      setFavorites(temp);
      localStorage.setItem("favorites", JSON.stringify(temp));
    } else {
      const temp = { ...favorites };
      delete temp[ifsc];
      setFavorites(temp);
      localStorage.setItem("favorites", JSON.stringify(temp));
    }
  };

  // Retrive favorites stored in localStorage
  useEffect(() => {
    const temp = localStorage.getItem("favorites");
    if (temp) {
      setFavorites(JSON.parse(temp));
    }
  }, []);

  // flattens and return list of favorites
  const getFavoritesList = () => {
    const list = Object.keys(favorites).map((k, i) => {
      return favorites[k];
    });

    return list;
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="header">Bank Finder</div>
      </div>

      <div className="inputcontainer">
        <SelectField value={city} onChange={handleCitySelect} />

        <SearchField
          value={query}
          onChange={handleSearchInput}
          status={status}
        />

        {error && (
          <Message className="alertmessage" attached="bottom" warning>
            <Icon name="exclamation" />
            Error occured. Please try again
          </Message>
        )}
      </div>

      <div className="tablecontainer">
        <TableHeader
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          data={data}
        />

        <Paginationx
          status={status}
          activePage={activePage}
          setActivePage={setActivePage}
          data={data}
          PAGESIZE={PAGESIZE}
        />
        <Tablex
          handleFavorites={handleFavorites}
          list={showFavorites ? getFavoritesList() : data.results}
          status={status}
          favorites={favorites}
        />
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
