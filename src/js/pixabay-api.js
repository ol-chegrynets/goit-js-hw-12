import axios from 'axios';

export async function fetchPhotos(query, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '44531752-ad7ff84ad7be874d52dfce5ce',
    q: query,
    per_page: 20,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const { data } = await axios.get(url, { params });
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}
