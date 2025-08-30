import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetData = () => {
    const [posts, setPosts] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const fetchData = async () => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    // handle success

                    setPosts(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(posts, "posts data");

    const filterData = posts.filter(item => {
        if (selectedOption === "") {
            return item;
        } else {
            return item.userId === parseInt(selectedOption);
        }
    })

    return (
        <div>

            <select name="" id="" onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                <option value="">Select</option>

                <option value={1}>Noor</option>
                <option value={2}>Dowad</option>
                <option value={3}>Rabia</option>
                <option value={4}>Bilal</option>
                <option value={5}>Abdullah</option>
                <option value={6}>Mehak</option>
                <option value={7}>Saira</option>
                <option value={8}>XYZ</option>
                <option value={9}>X</option>
                <option value={10}>z</option>

            </select>

            <div className="grid_services">
                {filterData && filterData?.map((item) => (
                    <div className="card" key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                        <h2>{item.userId === 1 ? "Noor" : item.userId === 2 ? "Dowad" : item.userId === 3 ? "Rabia" : item.userId === 4 ? "Bilal" : item.userId === 5 ? "Abdullah" : item.userId === 6 ? "Mehak" : item.userId === 7 ? "Saira" : item.userId === 8 ? "XYZ" : item.userId === 9 ? "X" : item.userId === 10 ? "Z" : item.userId}</h2>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default GetData
