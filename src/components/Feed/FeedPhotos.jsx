import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos(params) {
      const {url, options} = PHOTOS_GET()
      request(URL,options)
    }
    fetchPhotos();
  }, []);

  return (
    <div>
      <FeedPhotoItem />
    </div>
  );
};

export default FeedPhotos;
