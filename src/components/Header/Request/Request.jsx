import React from 'react';
import PropTypes from 'prop-types';




const Request = ({ url, method, textBody, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      
      <label> URL: <input type="text" name="url" value={url} onChange={onChange}></input>
      </label>
      
      <div><label> <input type="radio" name="method" value="get"vonChange={onChange}/> GET 
      </label>

      <label><input type="radio" name="method" value="post"vonChange={onChange}/> POST 
      </label>

      <label><input type="radio" name="method" value="put" onChange={onChange}/> PUT 
      </label>

      <label><input type="radio" name="method" value="patch" onChange={onChange}/>PATCH 
      </label>

      <label><input type="radio" name="method" value="delete" onChange={onChange}/> DELETE 
      </label>
      </div>

      <textarea placeholder="JSON Body" name="textBody" value={textBody} onChange={onChange}>
      </textarea>

      <button type="submit">Submit</button>

    </form>
  </div>

);
Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired


};

export default Request;
