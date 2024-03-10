import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Typography mt={5} variant='h4' textAlign={'center'}>
      OUR PHILOSOPHY
      </Typography>
      <Typography mt={5} variant='h4' textAlign={'center'}>
      Fast, efficient, and reliable, we are a reputable and well-known Water Testing Service in San Francisco. Our team goes above and beyond to cater to each project’s specific needs. We want our customers to be satisfied with our work, which is why we provide open communication channels throughout every step of the way. Browse our site to learn more about the services and plans we offer.
      </Typography>
      +
        <Button
            href="https://tailornova.com/designer"
            style={{ textDecoration: 'none', color: 'blue', fontSize: 'xx-large' }}
            variant="text"
          >
            ADD YOUR DESIGN
          </Button>
        
    </div>
  )
}

export default Home