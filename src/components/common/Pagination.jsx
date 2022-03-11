import React from 'react'

import {Button, Grid} from './'

const Pagination = () => {
  return (
    <section className='pagination'>
            <Grid col={3} mdCol={3} smCol={3} gap={20}>
                <Button 
                    animate={true}
                    handler={() => {}}
                    size="sm" 
                    icon='bx bx-left-arrow-alt'
                >
                Prev
                </Button>

                <div className='pagination__counter'>
                1/35
                </div>
                

                <Button 
                    animate={true}
                    handler={() => {}}
                    size="sm" 
                    icon='bx bx-right-arrow-alt'
                >
                Next
                </Button>
            </Grid>
        </section>
  )
}

export default Pagination