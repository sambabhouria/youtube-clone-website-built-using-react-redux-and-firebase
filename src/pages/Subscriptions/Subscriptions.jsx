import React, { useEffect } from 'react'
import './Subscriptions.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribedChannels } from '../../redux/actions/videos.action'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal';


const Subscriptions = () => {
  
  const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getSubscribedChannels())
   }, [dispatch])

  const { loading, videos } = useSelector(state => state.subscriptionsChannel)
  console.log("🚀 ~ file: Subscriptions.jsx ~ line 17 ~ Subscriptions ~ videos", videos)
  console.log("🚀 ~ file: Subscriptions.jsx ~ line 17 ~ Subscriptions ~ loading", loading)

  return (
    <div className='subscriptions'>
      {
        !loading ? (videos?.map(video=>
          <VideoHorizontal video={video} key={video.id} subScreen/>)
          ) : (
            <h1>Loading...</h1>
          )
      }
    </div>
  )
}

export default Subscriptions
