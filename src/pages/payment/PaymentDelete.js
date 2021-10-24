import React, {useEffect}  from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

export const PaymentDelete = props => {
    let { id } = useParams()
    useEffect(() => {
        document.title = `Deleting Payment ${id}`
    })
    return (
        <div>
            Hello from Delete
        </div>
    )
}

PaymentDelete.propTypes = {

}

export default PaymentDelete