import React, { useState } from 'react'

export const useDemo = ({name}) => {

    const { names, setName} = useState(name)



    return { names }

}
