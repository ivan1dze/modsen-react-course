import { useState } from 'react';

const DogImage = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) {
                throw new Error('Failed to fetch dog image');
            }
            const data = await response.json();
            setImageUrl(data.message);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    const handleButtonClick = async () => {
        await fetchDogImage();
    };

    return (
        <div>
            <h2>Random Dog Image</h2>
            <button onClick={handleButtonClick}>Fetch Image</button>
            {imageUrl && <img src={imageUrl} alt="Random Dog" style={{ maxWidth: '100%' }} />}
        </div>
    );
};

export default DogImage;
