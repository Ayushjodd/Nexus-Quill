import { useEffect } from "react";
import { Backend_url } from "../conf";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  const navigate = useNavigate();

  let token = null
  if (localStorage.getItem("Sign-In-Token") !== null) {
    token = localStorage.getItem("Sign-In-Token")
  } else {
    token = localStorage.getItem("Sign-Up-Token")
  }

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Backend_url}/api/v1/blog/${id}`, {
          headers : {
            Authorization : `${token}`
          }
        })

        const afterFetching = response.data;
        setBlog(afterFetching);
        setLoading(false);
      } catch (e) {
        alert(`You are not logged into NexusQuill`);
        navigate(`/signin`)
      }
    }
    fetchBlog(); 
  }, [token, navigate, id])

  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();
  
  let token = null;
  if (localStorage.getItem("Sign-In-Token") !== null) {
    token = localStorage.getItem("Sign-In-Token")
  } else {
    token = localStorage.getItem("Sign-Up-Token")
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Backend_url}/api/v1/blog/bulk`, {
          headers : {
            Authorization : `${token}`
          }
        })

        const afterFetching  = response.data;
        setBlogs(afterFetching)
        setLoading(false);
      } catch (e) {
        alert (`You are not logged into NexusQuill`)
        navigate(`/signin`)
      }
    }
    fetchBlogs()
  },[token, navigate]) 


  return {
    loading,
    blogs,
  };
};
