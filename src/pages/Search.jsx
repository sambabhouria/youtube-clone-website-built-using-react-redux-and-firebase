


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosBySearch } from '../redux/actions/videos.action';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal'

const Search = () => {

  const { query } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosBySearch(query))
  }, [query, dispatch])

  const { videos, loading } = useSelector(state => state.searchedVideos)
  console.log("🚀 ~ file: Search.jsx ~ line 21 ~ Search ~ videos", videos)

  return (
    <div style={{position: 'relative', left: '2rem' ,width: '100px'}}>
      {!loading ? (
            videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.id.videoId}
                  searchScreen
               />
            ))
         ) : (
            <h1>Loading...</h1>
         )}
    </div>
  )
}

export default Search
