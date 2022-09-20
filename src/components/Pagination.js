import React from 'react'

const Pagination = (prev, next, onPrevius, onNext) => {

    const handlerPrevius = () => {
        onPrevius();
    }
    const handlerNext = () => {
        onNext();

    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {prev ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handlerPrevius}>Previus</button>
                    </li>
                ) : null}
                {next ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handlerNext}>Next</button>
                    </li>
                ) : null}

            </ul>
        </nav>
    )
}

export default Pagination