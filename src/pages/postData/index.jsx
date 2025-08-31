import axios from 'axios';
import React from 'react'


const PostData = () => {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || body === "") {
            alert("Please fill all the fields");
            return;
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: 11,
        })
            .then(function (response) {
                console.log(response, 'res');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div className='container'>
                <h1>Post Data Page</h1>
                <p>This is Post Data Page</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Title'
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <br />
                    <textarea name="" id="" cols="30" rows="10"
                        value={body} onChange={(e) => setBody(e.target.value)}
                        placeholder='Enter Body'></textarea>
                    <br />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PostData
