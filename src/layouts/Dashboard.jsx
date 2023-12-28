import React from 'react'
import { Button, Grid, Icon, Label } from 'semantic-ui-react'
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Route, Routes } from 'react-router-dom';


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                            <Route exact path="/" Component ={ProductList} />
                            <Route path="/products" Component ={ProductList} />

                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
