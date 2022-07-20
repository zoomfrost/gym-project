import { Autocomplete, Box, Button, Stack, TextField, Typography } from "@mui/material"

export const SearchCalories = () => {

    const activities = [
        'yoga',
        'aerobics',
        'swimming',
        'jogging',
        'dancing',
        'golf',
        'climbing',
        'table tennis',
        'tennis',
        'football',
        'basketball',
        'soccer'
    ]


    // <Autocomplete
//     freeSolo
//     id="free-solo-2-demo"
//     disableClearable
//     options={top100Films.map((option) => option.title)}
//     renderInput={(params) => (
//       <TextField
//         {...params}
//         label="Search input"
//         InputProps={{
//           ...params.InputProps,
//           type: 'search',
//         }}
//       />
//     )}
//   />


// eslint-disable-next-line no-lone-blocks
 

  return (
    <Stack 
            alignItems='center' 
            mt='37px' 
            justifyContent='center' 
            p='20px'
        >
            <Typography 
                fontWeight={700} 
                sx={{
                    fontSize: {lg: '44px', xs: '30px'}
                    }} 
                mb='50px' 
                textAlign='center'
            >
                Let`s calculate <br /> Your burned calories
            </Typography>
            <Box position='relative' mb='72px'>
                <form>
                    <Stack direction='column' spacing={2}>
                        <Autocomplete 
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={activities.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                placeholder='Activity'
                                sx={{
                                    input: {
                                        fontWeight: '700', 
                                        border: 'none', 
                                        borderRadius: '4px',
                                    },     
                                    width: {
                                        lg: '800px', 
                                        xs: '350px'
                                    },
                                    backgroundColor: '#fff',
                                    borderRadius: '40px'
                                }}
                                />
                            )}
                        />
                        <TextField
                            placeholder='Your weight (kg)'
                            sx={{
                                input: {
                                    fontWeight: '700', 
                                    border: 'none', 
                                    borderRadius: '4px'
                                },     
                                width: {
                                    lg: '800px', 
                                    xs: '350px'
                                },
                                backgroundColor: '#fff',
                                borderRadius: '40px'
                            }}
                        /> 
                        <TextField
                            placeholder="Duration"
                            sx={{
                                input: {
                                    fontWeight: '700', 
                                    border: 'none', 
                                    borderRadius: '4px'
                                },     
                                width: {
                                    lg: '800px', 
                                    xs: '350px'
                                },
                                backgroundColor: '#fff',
                                borderRadius: '40px'
                            }}
                        /> 
                    </Stack>
                    <Button 
                        className="search__btn"
                        sx={{
                            backgroundColor: '#FF2625',
                            color: '#fff',
                            textTransform: 'none',
                            width: {lg: '160px', xs: '80px'},
                            fontSize: {lg: '20px', xs: '14px'},
                            height: '56px',
                            position: 'absolute',
                            right: '0',
                            marginTop: '15px'
                        }}
                        type='submit'
                    >
                        Search
                    </Button>
                </form>
            </Box>
            <Box
                sx={{position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
            </Box>
        </Stack>
  )
}
