import React from 'react'
import { namespace } from '../../interface/ProductInterface'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
interface IProductProps {
  product: namespace.Product
}

export const ProductItem: React.FC<IProductProps> = ({ product }) => {

  
  return (
    <>
      <Card sx={{ maxWidth: 300 }} className="m-4 flex flex-col justify-around">
        <CardMedia
          component="img"
          image={product.images[0]}
          alt="green iguana"
          className="h-72"
          
        />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </Card>
    </>
  )
}
