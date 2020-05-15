import React from 'react';
import { useResty } from '../../../hooks/Provider';

cosnt Request = () => {
    const { url, method, body, onChange, onSubmit } = useResty();

    return(
        <form onSubmit={onSubmit}>
            <input type="test" name="url" value={url} onChange={onChange} />

            <label>
                <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange}/>
                post
            </label>


            <label>
                <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange}/>
                get
            </label>


            <label>
                <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange}/>
                put
            </label>


            <label>
                <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange}/>
                patch
            </label>


            <label>
                <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange}/>
                delete
            </label>
        <textarea name="body" value={body} onChange={onChange}>
            </textarea>
            <button>Request</button>

            </form>
           
    );
};

export default Request;

