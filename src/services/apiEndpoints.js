import axios from 'axios'


const getRandomImg = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=nature')
    .then(res => {
      return res.data
    })

}
const getRelatedCollectionPictures = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=nature&count=9')
    .then(res => {
      return res.data
    })

}

const getPictures = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=nature&count=30')
    .then(res => res.data)
}
const getPicturesBySearch = (search) => {
  return axios.get(`https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=${search}&count=30`)
    .then(res => res.data)
}

const getPhotoById = (id) => {
  return axios.get(`https://api.unsplash.com/photos/${id}?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA`)
    .then(res => {
      return res.data
    })
}



export {
  getRandomImg,
  getPictures,
  getRelatedCollectionPictures,
  getPhotoById,
  getPicturesBySearch
}
