import axios from 'axios';
import React, { useState } from 'react';
import { FaLink } from "react-icons/fa";
import { BASE_URLS } from '../../utils/baseurl';

const UrlShortener = () => {
  const [ input, setInput ] = useState<String>("");
  const [ shortenedURL, setShortenedURL ] = useState<String | null >(null);
  const [ copied, setCopied ] = useState<boolean>(false);
  const [ error, setError ] = useState<String>("");
  const [ loading, setLoading ] = useState<boolean>(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    await axios
    .post(
      BASE_URLS.url,
      {
        url: input,
      },
    )
    .then((res) => {
      setLoading(false);
      setShortenedURL(res.data.shortened_url);
    })
    .catch((err) => {
      setLoading(false);
      setError(err);
    });
  };



  return (
    <div className = "flex flex-col justify-center items-center space-y-6">
      <div className = "grid space-y-2 text-center justify-center">
        <span className = "font-bold text-white text-4xl">
          Shorten and beautify your long and messy links!
        </span>
        <span className = "text-xl font-normal text-gray-400">
          Enter your Long URL in the TextBox below to shorten.
        </span>
      </div>
      <form 
        onSubmit = { (e) => { 
          e.preventDefault();
          handleSubmit();
        } } 
        className = "flex flex-row justify-center items-center w-full mx-auto">
        <input 
          className = "bg-[#111111] p-5 rounded-l-md w-full block pl-7 pr-1 text-white font-semibold text-lg outline-none border-2 border-[#2a2929]"
          color = "white"
          placeholder = "Enter Long URL"
          type = "url"
          required
          onChange = {(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className = "bg-blue-800 border-2 border-blue-700 hover:bg-blue-900 p-5 rounded-r-md text-lg font-bold text-white"
          type = "submit"
          onSubmit = {(e) => {
            e.preventDefault();
          }}
        >
          Shorten
        </button>
      </form>
      { !loading && shortenedURL ?  
        <div className = "flex flex-row justify-between items-center bg-blue-900 w-full p-5 rounded-md bg-opacity-60">
          <span className = "text-blue-400 text-lg font-medium">
          { !copied ?
             shortenedURL
          :
            "Copied link!"
          }
          </span>
            <FaLink 
              data-tooltip-target = "tooltip-click" 
              data-tooltip-trigger = "click"
              className = "text-blue-400 text-xl hover:cursor-pointer"
              onClick = {() => {
                navigator.clipboard.writeText(shortenedURL.toString());
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2500)
              }}
            />
          </div>
      :
        null
      }
      {
        error ?
          <div className = "flex flex-row justify-between items-center bg-red-900 w-full p-5 rounded-md bg-opacity-60">
            <span className = "text-red-400 text-lg font-medium">
              { error }
            </span>
          </div>
        :
          null
      }
      {
        loading ?
          <div className = "flex flex-row justify-between items-center bg-orange-900 w-full p-5 rounded-md bg-opacity-60">
            <span className = "text-orange-400 text-lg font-medium">
              Processing URL...
            </span>
          </div>
        :
          null
      }
      
    </div>
  )
}

export default UrlShortener;