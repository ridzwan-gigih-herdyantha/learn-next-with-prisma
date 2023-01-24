import React, { useState } from "react";
import Head from "next/head";
import Router from 'next/router';
import Layout from "../../components/Layout";
import Style from "../../styles/create.module.css"

export default function Create() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setMessage("");
        if (title && content) {
            // send a request to the server.
            try {
                const body = { title, content, published: false };
                await fetch(`/api/post`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body),
                });
                await Router.push("/drafts");
            } catch (error) {
                console.error(error);
            }
        } else {
            setError("All fields are required");
            return;
        }
    }

    return (
        <Layout>
            <Head>
                <title>Create Post</title>
            </Head>
            <div>
                <form onSubmit={handleSubmit}>
                    {
                        error ? (
                            <div className={Style.error}>
                                {error}
                            </div>
                        ) : null
                    }
                    {
                        message ? (
                            <div className= {Style.message}>
                                {message}
                            </div>
                        ) : null
                    }
                    <div className={Style.formgroup}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={Style.formgroup}>
                        <label>Content</label>
                        <textarea
                            cols={50}
                            name= "content"
                            placeholder= "Content"
                            rows={8}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className={Style.formgroup}>
                        <button type="submit">Add Post</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}