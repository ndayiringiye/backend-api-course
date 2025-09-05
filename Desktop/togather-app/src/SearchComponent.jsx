    import React, { useState } from 'react';
    import axios from 'axios';

    function SearchComponent() {
        const [searchTerm, setSearchTerm] = useState('');
        const [results, setResults] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const handleSearch = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:5000/api/items/search?q=${searchTerm}`);
                setResults(response.data);
            } catch (err) {
                setError('Error fetching search results.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>

                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {results.length > 0 ? (
                    <ul>
                        {results.map((item) => (
                            <li key={item._id}>{item.name} - {item.description}</li>
                        ))}
                    </ul>
                ) : (
                    !loading && !error && <p>No results found.</p>
                )}
            </div>
        );
    }

    export default SearchComponent;