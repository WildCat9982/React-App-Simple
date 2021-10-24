import React, {useEffect}  from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

export const PaymentEdit = props => {
    let { id } = useParams()
    useEffect(() => {
        document.title = `Updating payment ${id}`
    })
     return (
        <div>
            Hello From Payment Edit
        </div>
    )
}

PaymentEdit.propTypes = {

}

export default PaymentEdit