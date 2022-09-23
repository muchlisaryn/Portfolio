import PropTypes from 'prop-types'

export default function Title (props) {
    const {value} = props

    return (
        <div className="Title fw-bold">{value}</div>
    )
}

Title.prototypes = {
    value : PropTypes.string
}