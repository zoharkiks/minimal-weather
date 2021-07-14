import Flickr from 'flickr-sdk'

const randomPhoto=(array)=>{
    return array[Math.floor(Math.random()*array.length)];
}

let flickr= new Flickr(process.env.NEXT_PUBLIC_FLICKR_KEY)

const  fetchPhotos= async (place,setPhotos)=>{
    await flickr.photos.search({
        text: place
      }).then((res)=>{
          setPhotos(randomPhoto(res.body.photos.photo))
      })
}

export default fetchPhotos