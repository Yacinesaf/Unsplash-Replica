import axios from 'axios'
import firebaseApp from '../firebase'
import firebase from 'firebase/app'

const getRandomImg = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=nature')
    .then(res => {
      console.log("getRandomImg -> res.data", res.data)
      return res.data
    })

}



export {
  getRandomImg
}