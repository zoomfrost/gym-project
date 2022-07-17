import { useGetVideosQuery } from "../../api/youTubeApi";
import { Box, Stack, Typography } from "@mui/material";


export const ExerciseVideos = ({name}: any) => {

  const {isLoading: youtubeLoading, data: videosData} = useGetVideosQuery(`search?query=${name}`);

  if(youtubeLoading) return <p>Loading</p>
  return (
    <Box
      sx={{marginTop: {lg: '200px', xs: '20px'}}}
      p='20px'
    > 
      <Typography variant='h3' mb='30px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span>  exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start' 
        flexWrap="wrap"
        alignItems='center'
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '110px', xs: '0'}
        }}
      >
        {videosData.contents?.slice(0, 3).map((video: any, i: number) => (
          <a 
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            key={i}
            className='exercise__video'
            target='_blank'
            rel="noreferrer"
          >
            <img style={{width: '387px', height: '217px', objectFit: 'cover'}} src={video.video.thumbnails[0].url} alt={video.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  )
}
