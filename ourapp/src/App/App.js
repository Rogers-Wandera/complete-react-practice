import React from 'react';
import Button from '@material-ui/core/Button'

const Home = () =>{
    return(
        <div className='home'>
            
            <span className='edit'>
                <ul>
                    <ui>
                    <div className='logo' ></div>
                    </ui>
                   <span>
                   <ui className='list'>
                        <strong><a href='#'>
                            Task Owner
                        </a></strong>
                    </ui>
                   </span>
                    <span>
                    <ui className='list'>
                        <strong><a href='#'>
                            Tasks
                        </a></strong>
                    </ui>
                    </span>
                   <span>
                   <ui className='list'>
                        <strong><a href='#'>
                            Attendants
                        </a></strong>
                    </ui>
                   </span>
                    <ui>
                        <Button
                         variant='outlined'
                         color='secondary'
                         className='button'
                         >
                            Menu
                        </Button>
                    </ui>
                </ul>
                <div className='slider'>

                </div>
            </span>
            <div className='footer'>
                <footer >&copy; Skylla Co All Rights Reserved</footer>
            </div>
        </div>
    )
}
export default Home;