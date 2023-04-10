import React from 'react'
import H2 from '../components/commun/titeles/H2'
import RequestForm from '../components/form/RequestForm'

function Request() {

    

return (
    <div className='flex flex-col gap-12 w-[70vw] mx-auto'>
        <div className=''>
            <H2>Request a book</H2>
            <p className='-mt-3 text-sm text-gray-400'>Didn’t find a book? request it and we will provide it asap</p>
        </div>
        <div>
        <RequestForm />
        </div>
    </div>
)
}

export default Request
