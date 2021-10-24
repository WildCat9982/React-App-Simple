import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

export const PaymentCreate = props => {
    useEffect(() => {
        document.title = `Create Payment`
    })
    return (
        <div>
            Hello from Payment Create
        </div>
    )
}

PaymentCreate.propTypes = {

}

export default PaymentCreate