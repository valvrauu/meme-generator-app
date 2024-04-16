import React, { useState, useEffect } from 'react';

import { Form } from '../Form';
import { Input } from '../Input';
import { Photo } from '../Photo';
import { Button } from '../Button';

import galleryIcon from '../../assets/imgs/gallery.svg';
import './styles.css';

export function Meme() {
    const [listMemes, setListMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/3eqjd8.jpg'
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const data = await response.json();
            const { data: { memes } } = data;

            setListMemes(memes);
        }

        fetchData();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const randomIdx = Math.floor(Math.random() * listMemes.length);
        const { url } = listMemes[randomIdx];

        setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme(prevMeme => ({ ...prevMeme, [name]: value }));
    }

    return (
        <div className='meme'>
            <Form onSubmit={handleSubmit}>
                <div className='meme__content'>
                    <Input
                        name='topText'
                        label='Top text'
                        onChange={handleChange}
                        value={meme.topText}
                    />

                    <Input
                        name='bottomText'
                        label='Bottom text'
                        onChange={handleChange}
                        value={meme.bottomText}
                    />

                    <Button type={1} text="Get a new meme image" icon={galleryIcon} />
                </div>
            </Form>

            <div className='meme__result'>
                <Photo src={meme.randomImage} />
                <span className='meme__text meme__text--top'>{meme.topText}</span>
                <span className='meme__text meme__text--bottom'>{meme.bottomText}</span>
            </div>
        </div>
    )
}